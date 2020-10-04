import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'theme-ui'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <Container
      p={4}
      bg='muted'>
      Content
    </Container>
  </Layout>
)

export default ContactPage
