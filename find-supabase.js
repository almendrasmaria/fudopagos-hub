const fs = require('fs');

const content = fs.readFileSync('index-8jit5-a7.js', 'utf8');

const idx = content.indexOf('https://gketelkayhgohxztefkh.supabase.co');
if (idx !== -1) {
  console.log('Surrounding code:');
  console.log(content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 500)));
}

