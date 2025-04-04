// Custom Netlify build plugin for debugging
module.exports = {
  onPreBuild: ({ utils }) => {
    console.log('Starting build process...');
    console.log('Node version:', process.version);
    console.log('Environment:', process.env.NODE_ENV);
  },
  
  onBuild: ({ utils }) => {
    console.log('Build completed!');
  },
  
  onPostBuild: ({ utils, constants }) => {
    console.log('Checking built files...');
    console.log('Publish directory:', constants.PUBLISH_DIR);
    
    // Check if index.html exists in the publish directory
    const fs = require('fs');
    const path = require('path');
    
    const indexPath = path.join(constants.PUBLISH_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      console.log('✅ index.html found in publish directory');
    } else {
      console.log('❌ index.html NOT found in publish directory');
      utils.build.failBuild('index.html not found in publish directory');
    }
  }
}; 