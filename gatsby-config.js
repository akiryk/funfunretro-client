/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  // plugins: ['gatsby-theme-apollo'],
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: "FFRAPI",
        fieldName: 'boards',
        url: `${process.env.GATSBY_API_URL}`,
      },
    },
  ],
};
