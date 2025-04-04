// Script to catch and log errors in production
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  // Create a visible error message on the page
  var errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.padding = '20px';
  errorDiv.style.backgroundColor = 'red';
  errorDiv.style.color = 'white';
  errorDiv.style.zIndex = '9999';
  errorDiv.textContent = 'Error: ' + (event.error ? event.error.message : 'Unknown error');
  document.body.appendChild(errorDiv);
});

// Log when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
});