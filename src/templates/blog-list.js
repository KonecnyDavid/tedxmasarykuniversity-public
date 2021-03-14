/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
		) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "HH:mm")
            slug
						title
            speakerAllowed
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
							}
						}
          }
        }
      }
    }
  }
`
class BlogIndex extends React.Component {
  render() {
    
    const { data } = this.props

    const posts = data.allMdx.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge =>
        <PostCard key={edge.node.id} data={edge.node} />
      )
    
    return (
      <Layout className="blog-page">
        <Seo
          title={"Speakeři"}
          description={"Speakeři akce TEDxMasarykUniversity" }
        />
        <h1>Speakeři</h1>
        <div className="grids col-1 sm-2 lg-4">
          {posts}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex