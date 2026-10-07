import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function Ar() {
	const { uri } = useLocalSearchParams<{ uri: string }>()

	return (
		<View className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-950'>
			<Text className='text-gray-900 dark:text-gray-50'>Welcome to AR</Text>
			<Text className='text-gray-900 dark:text-gray-50'>{uri}</Text>
		</View>
	)
}
