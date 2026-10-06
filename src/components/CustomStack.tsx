import { Stack } from 'expo-router'

type Props = {
	headerColor?: string
	headerTint?: string
	className?: string
}

export default function CustomStack({ headerColor, headerTint }: Props) {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: headerColor },
				headerTintColor: headerTint,
			}}
		/>
	)
}
