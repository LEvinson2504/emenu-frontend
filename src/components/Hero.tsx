import { Flex, Heading, Stack } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
	<Flex justifyContent="center" alignItems="center" height="100vh">
		<Heading fontSize="6vw">{title}</Heading>

		<Stack></Stack>
	</Flex>
)

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
}