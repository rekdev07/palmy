import { Pressable, Text } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = {
	title: string
	className?: string
	disabled?: boolean
	onPress?: () => void
}

export default function Button({ title, className, disabled, onPress }: Props) {
	return (
		<Pressable
			className={twMerge(
				'h-16 w-full items-center justify-center rounded-2xl bg-cyan-600 disabled:opacity-50',
				className
			)}
			onPress={onPress}
			disabled={disabled}
		>
			<Text className='font-medium text-gray-50'>{title}</Text>
		</Pressable>
	)
}
