/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */
  // plugins: ['gatsby-theme-apollo'],
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: "FFRAPI",
        fieldName: 'boards',
        url: 'https://us-east1-funfunretro-97a35.cloudfunctions.net/api/',
      },
    },
  ],
};
