import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'theme-ui'

const TiresPage = () => (
  <Layout>
    <SEO title="Tires" />
    <h1>Tires</h1>
    <Container
      p={4}
      bg='muted'>
      Content
    </Container>
  </Layout>
)

export default TiresPage
