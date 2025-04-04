import fs from 'fs';
import path from 'path';

// Ensure the dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy _redirects file to dist
const redirectsSource = path.join(__dirname, 'public', '_redirects');
const redirectsDest = path.join(__dirname, 'dist', '_redirects');

try {
  if (fs.existsSync(redirectsSource)) {
    fs.copyFileSync(redirectsSource, redirectsDest);
    console.log('Successfully copied _redirects file to dist folder');
  } else {
    // Create _redirects file if it doesn't exist
    fs.writeFileSync(redirectsDest, '/* /index.html 200');
    console.log('Created new _redirects file in dist folder');
  }
} catch (err) {
  console.error('Error copying _redirects file:', err);
}
