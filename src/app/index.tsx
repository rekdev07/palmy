import Button from '@/components/Button'
import { FilePicker, Result } from '@/components/FilePicker'
import { randomUUID } from 'expo-crypto'
import { File } from 'expo-file-system'
import { NavigationBar } from 'expo-navigation-bar'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
	const [picked, setPicked] = useState<boolean>(false)
	const [uri, setUri] = useState<string | null>(null)
	const router = useRouter()

	const onFilePickedHandler = (result: Result) => {
		if (result.name && result.uri) {
			const file = new File(result.uri)
			const newName = randomUUID().replaceAll('-', '_')
			file.rename(`${newName}.glb`)
			console.log(file.uri)
			setPicked(true)
			setUri(file.uri)
		}
	}

	const onPressHandler = () => {
		if (uri) router.push({ pathname: '/ar', params: { uri: uri } })
	}

	return (
		<View className='items-centbg-gray-50 flex-1 justify-center gap-8 bg-gray-50 px-6 dark:bg-gray-950'>
			<Text className='font-bold text-gray-900 dark:text-gray-50'>
				Choose a glb file
			</Text>
			<FilePicker onFilePicked={onFilePickedHandler} />
			<Button title='View in AR' disabled={!picked} onPress={onPressHandler} />

			<StatusBar style='auto' />
			<NavigationBar style='auto' />
		</View>
	)
}
