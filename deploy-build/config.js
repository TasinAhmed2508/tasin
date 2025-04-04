// Deploy build configuration
// This file is used during the deployment process

module.exports = {
  // Environment settings
  production: {
    apiUrl: 'https://api.example.com',
    siteUrl: 'https://your-site.netlify.app'
  },
  
  // Build settings
  build: {
    copyRedirects: true,
    generateSitemap: true,
    minify: true
  }
}; 