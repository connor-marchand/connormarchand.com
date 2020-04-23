module.exports = {
  siteMetadata: {
    title: "Connor Marchand",
    author: "Connor Marchand",
    description: "Connor Marchand"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "connormarchand.com",
      },
    },
  ],
}
