import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'theme-ui'

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services</h1>
    <Container
      p={4}
      bg='muted'>
      Content
    </Container>
  </Layout>
)

export default ServicesPage
