const https = require('https');
const fs = require('fs');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const html = await get('https://fudo-solution-shelf.lovable.app/');
  console.log('HTML length:', html.length);
  
  // Find all js files
  const re = /\/assets\/([a-zA-Z0-9_\-\.]+\.js)/g;
  let m;
  const jsFiles = new Set();
  while ((m = re.exec(html)) !== null) {
    jsFiles.add(m[1]);
  }
  console.log('Found JS files in HTML:', Array.from(jsFiles));

  for (const file of jsFiles) {
    console.log(`Downloading ${file}...`);
    const content = await get(`https://fudo-solution-shelf.lovable.app/assets/${file}`);
    fs.writeFileSync(file, content);
    console.log(`Saved ${file} (${content.length} bytes)`);
  }
}

main().catch(console.error);

