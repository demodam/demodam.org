import React from "react"
import { graphql } from "gatsby"
import SEO from '../../components/SEO'
import Navigation from '../../components/Navigation'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Background from '../../components/Background'
import PostLink from "../../components/PostLink"

const IndexPage = ({
  location,

  data: {
    allMarkdownRemark: { edges }
  }

}) => (
  <Layout>
    <SEO title="Demodam - Nieuws" />
    <Background backgroundColor="#cbce1c">
      <Container>
        <Navigation as="nav" location={location} />
      </Container>
    </Background>

    <Container>
          <h2>Laatste nieuws</h2>
          <p>{
            edges.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
              .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
          }</p>
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] } filter: {
    frontmatter: { lang: { eq: "nl" } }
  }) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "nl")
          path
          title
          lang
        }
      }
    }
  }
}
`
