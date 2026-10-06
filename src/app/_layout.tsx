import CustomStack from '@/components/CustomStack'
import { cssInterop } from 'nativewind'
import '../global.css'

cssInterop(CustomStack, {
	className: {
		target: false,
		nativeStyleToProp: {
			backgroundColor: 'headerColor',
			color: 'headerTint',
		},
	},
})

export default function RootLayout() {
	return (
		<CustomStack className='bg-gray-200 color-gray-900 dark:bg-gray-800 dark:color-gray-50' />
	)
}
