import Button from '@/components/Button'
import { NavigationBar } from 'expo-navigation-bar'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function Index() {
	return (
		<View className='items-centbg-gray-50 flex-1 justify-center gap-6 px-6 dark:bg-gray-950'>
			<Text className='text-gray-900 dark:text-gray-50'>Choose a glb file</Text>
			<Button />
			<StatusBar style='auto' />
			<NavigationBar style='auto' />
		</View>
	)
}
