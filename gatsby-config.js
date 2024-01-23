/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `KCD - Karlia Carty-Dinnall`,
    description: `Attorney-at-Law & Mediator Specializing in Divorce, Estate Planning, Property Sales & Purchases, Personal Injury, Adoption. Open Monday - Thursday 9-5pm and Friday 9-4:30pm`,
    author: `Dwayne Edwards`,
    image: `/icons/icon-72x72.png`,
    siteUrl: `https://karlia-carty-dinnall.netlify.app`,
    instagramUsername: `@cartydinnall`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `karlia-carty-dinnall`,
        short_name: `kcd`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/logo.png`, 
      },
    },
  ],
}
