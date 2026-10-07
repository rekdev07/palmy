import { getDocumentAsync } from 'expo-document-picker'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

type Result = {
	name: string | null
	uri: string | null
	cancelled: boolean
}

type Props = {
	onFilePicked: (result: Result) => void
}

function FilePicker({ onFilePicked }: Props) {
	const [tag, setTag] = useState<'No file selected' | '1 file selected'>(
		'No file selected'
	)

	const onPressHandler = async () => {
		try {
			const result = await getDocumentAsync({
				type: 'model/gltf-binary',
				copyToCacheDirectory: true,
				multiple: false,
			})
			if (!result.canceled) {
				result.assets?.forEach((item) => {
					onFilePicked({ name: item.name, uri: item.uri, cancelled: false })
					setTag('1 file selected')
				})
			} else {
				onFilePicked({ name: null, uri: null, cancelled: true })
			}
		} catch {
			onFilePicked({ name: null, uri: null, cancelled: true })
		}
	}

	return (
		<View className='flex w-full flex-row gap-5'>
			<Text className='flex-initial text-gray-900 dark:text-gray-50'>
				{tag}
			</Text>
			<Pressable
				className='h-16 w-56 flex-initial items-center justify-center rounded-2xl bg-cyan-600 disabled:opacity-50 dark:bg-gray-700 disabled:dark:bg-gray-700/50'
				onPress={onPressHandler}
			>
				<Text className='font-medium text-gray-50'>Select a file</Text>
			</Pressable>
		</View>
	)
}

export { FilePicker, Result }
