import { Heading, Container, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="red"
        p={3}
        mb={6}
        align="center"
      >{`Hello, I'm a full-stack developer from Taiwan!`}</Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lizard Liang
          </Heading>
          <p>A Software Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
