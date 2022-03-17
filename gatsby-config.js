/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const settings = require("./src/util/site.json")
const path = require('path')
const process = require('process')

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    /*{
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        ignore: ['ignored.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: ['.grids.md-2'], // Don't remove this selector
        },
      },
    },*/
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: settings.ga,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TEDxMasarykUniversity`,
        short_name: `TEDxMasarykUniversity`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#E62B1E`,
        display: `standalone`,
        icon: "static" + settings.meta.iconimage,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    'gatsby-plugin-optimize-svgs',
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {},
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
  ],
}
