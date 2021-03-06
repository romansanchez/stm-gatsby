import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'theme-ui'
import { Tireconnect } from '../components/tireconnect';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container
      p={4}
      bg='muted'>
      Centered container
    </Container>
  </Layout>
)

export default IndexPage
