import {
	Viro3DObject,
	ViroAmbientLight,
	ViroARPlaneSelector,
	ViroARScene,
	ViroARSceneNavigator,
} from '@reactvision/react-viro'
import { useLocalSearchParams } from 'expo-router'
import { useRef, useState } from 'react'

type ARSceneProps = {
	modelUri: string
}

function ARScene({ modelUri }: ARSceneProps) {
	const [placed, setPlaced] = useState<boolean>(false)
	const selectorRef = useRef<ViroARPlaneSelector | null>(null)
	const [anchorPosition, setAnchorPosition] =
		useState<[number, number, number]>()

	return (
		<ViroARScene
			anchorDetectionTypes={['PlanesHorizontal']}
			onAnchorFound={(a) => selectorRef.current?.handleAnchorFound(a)}
			onAnchorUpdated={(a) => selectorRef.current?.handleAnchorUpdated(a)}
			onAnchorRemoved={(a) => a && selectorRef.current?.handleAnchorRemoved(a)}
		>
			<ViroAmbientLight color='#fff' intensity={400} />

			{!placed && (
				<ViroARPlaneSelector
					minHeight={0.1}
					minWidth={0.1}
					ref={selectorRef}
					alignment='Horizontal'
					onPlaneSelected={(anchor, tapPosition) => {
						setAnchorPosition(tapPosition)
						setPlaced(true)
					}}
				/>
			)}

			{placed && (
				<Viro3DObject
					source={{ uri: modelUri }}
					type='GLB'
					position={anchorPosition}
					scale={[0.6, 0.6, 0.6]}
					onLoadStart={() => console.log('Load start')}
					onLoadEnd={() => console.log('Load end')}
					onError={(error) =>
						console.warn('Model load error:', error.nativeEvent.error)
					}
					animation={{
						name: 'idle',
						loop: true,
						run: true,
					}}
				/>
			)}
		</ViroARScene>
	)
}

export default function SceneNavigator() {
	const { uri } = useLocalSearchParams<{ uri: string }>()

	return (
		<ViroARSceneNavigator
			initialScene={{ scene: () => <ARScene modelUri={uri} /> }}
		/>
	)
}
