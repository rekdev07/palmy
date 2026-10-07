import { Stack } from 'expo-router'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
	headerColor?: string
	headerTint?: string
	className?: string
}>

export default function CustomStack({
	children,
	headerColor,
	headerTint,
}: Props) {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: headerColor },
				headerTintColor: headerTint,
			}}
		>
			{children}
		</Stack>
	)
}
