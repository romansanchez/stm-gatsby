import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'theme-ui'

const FinancingPage = () => (
  <Layout>
    <SEO title="Financing" />
    <h1>Financing</h1>
    <Container
      p={4}
      bg='muted'>
      Content
    </Container>
  </Layout>
)

export default FinancingPage
