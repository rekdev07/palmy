import { Pressable, Text } from 'react-native'

type Props = {
	onPress?: () => void
}

export default function Button({ onPress }: Props) {
	return (
		<Pressable
			className='flex h-16 items-center justify-center rounded-2xl bg-cyan-600'
			onPress={onPress}
		>
			<Text className='font-medium text-gray-50'>View in AR</Text>
		</Pressable>
	)
}
