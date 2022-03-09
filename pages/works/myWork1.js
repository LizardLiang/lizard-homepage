import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          MyWork1 <Badge>2016</Badge>
        </Title>
        <P>My work 1 description goes here</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{`C++ / Qt Creator`}</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
