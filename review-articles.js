const fs = require('fs');

const content = fs.readFileSync('data/mockArticles.ts', 'utf8');

// Match all titles
const regex = /"title":\s*"([^"]+)"/g;
let m;
let i = 1;
while ((m = regex.exec(content)) !== null) {
  console.log(`${i++}. ${m[1]}`);
}
