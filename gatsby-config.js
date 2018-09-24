module.exports = {
  siteMetadata: {
    title: 'LED',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `591d1a5fbb1caf7debba91a97b6e2f`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
