import NextLink from 'next/link'
import {
  Heading,
  Container,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, Icon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
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
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My profolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in New Taipei City, Taiwan
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Completed the bachelor degree of electronical engineering at Yuan Ze
            University
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Worked at Famax corp.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Movie, Video Games, Learning</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/LizardLiang" target="_blank" />
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Github
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Peter Parker#0520
              </Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

