// Netlify build configuration
const fs = require('fs');
const path = require('path');

// This script can be used as a pre or post build step
// to ensure that Netlify environment is properly configured

console.log('Netlify build process starting...');

// Check that we're in a Netlify environment
if (process.env.NETLIFY) {
  console.log('Running in Netlify environment');
  
  // Ensure _redirects is properly set up
  const redirectsPath = path.join(__dirname, '..', 'dist', '_redirects');
  if (!fs.existsSync(redirectsPath)) {
    console.log('Creating _redirects file for client-side routing...');
    fs.writeFileSync(redirectsPath, '/* /index.html 200');
  }
  
  console.log('Netlify environment setup complete');
} else {
  console.log('Not running in Netlify environment');
} 