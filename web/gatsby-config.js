require('dotenv').config('./.env');

const sanityConfig = require('./sanity-config');

module.exports = {
  siteMetadata: {
    title: `IV Quest blog`,
    siteUrl: `https://www.ivquest.cf`,
    description: `Iv Quest blog provides the latest and reliable educative information about various subject, such as: 'How to make money online, Google career job opportunites, Handshake, Relationship and love advice, walmart, target,  long distant relationships, ups etc`,
    image: `./iv-quest-blog.jpg`,
    keywords: `Quest Blog, Make money online, How to make money online, Target, Handshake, Relationship and love advice, Long distant relationship, Google career job, google, Job opportunities, walmart, Ups, how to work online, educative information,`,
    author: `Quest`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-03QT3VP79C', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/assets/images/icon.png',
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./iv-quest-blog.jpg`,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blogs',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityBlog{
            nodes{
              id
              title
              publishedAt
              slug{
                current
              }
              coverImage{
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedAt', 'slug', 'coverImage'],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'categories',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityCategory{
            nodes{
              id
              title
              slug{
                current
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'slug'],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'authors',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityAuthor{
            nodes{
              id
              name
              slug{
                current
              }
              profileImage{
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['name'],
        store: ['id', 'name', 'slug', 'profileImage'],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
  ],
};
