// Simple build script to bundle Speed Insights with the HTML
import { readFileSync, writeFileSync } from 'fs';

// Read the original HTML
const html = readFileSync('FCS Bate Ponto.html', 'utf8');

// Create inline Speed Insights initialization script
const speedInsightsScript = `
<script>
  // Vercel Speed Insights - Inline initialization
  (function() {
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
    
    // This will be automatically configured by Vercel when deployed
    // The script path is generated during deployment
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      var script = document.createElement('script');
      script.defer = true;
      script.src = '/_vercel/speed-insights/script.js';
      document.head.appendChild(script);
    }
  })();
</script>`;

// Insert the script before the closing </head> tag
const updatedHtml = html.replace('</head>', speedInsightsScript + '\n</head>');

// Write the updated HTML
writeFileSync('FCS Bate Ponto.html', updatedHtml, 'utf8');

console.log('Speed Insights script added to FCS Bate Ponto.html');
