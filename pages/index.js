import {
  Heading,
  Container,
  Box,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxHeight="100px"
            boxSize="100"
            fit="cover"
            display="inline-block"
            borderRadius="full"
            src="/images/lizard.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          {`I'm a enthusiastic engineer from Taiwan, love to learn everything about coding.`}
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
