import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query AboutQuery($id: String!){
		mdx(id: { eq: $id }) {
      id
			body
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
	const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body, excerpt } = mdx

	return (
		<Layout className="page">
			<Seo
				title={frontmatter.title}
				description={""}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<MDXRenderer article>{body}</MDXRenderer>
			</div>
		</Layout>
	)
}

export default AboutPage