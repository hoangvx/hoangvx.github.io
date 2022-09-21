import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vo Xuan Hoang`,
    siteUrl: `https://hoangvx.github.io/`,
    description: `HoangVX's page!`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-MBH6BE78SP"
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ]
};

export default config;
