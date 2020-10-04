import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'theme-ui'

const WheelsPage = () => (
  <Layout>
    <SEO title="Wheels" />
    <h1>Wheels</h1>
    <Container
      p={4}
      bg='muted'>
      Content
    </Container>
  </Layout>
)

export default WheelsPage
