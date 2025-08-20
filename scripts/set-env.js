const { writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const dir = join(__dirname, '../src/environments');
mkdirSync(dir, { recursive: true });

const targetPath = join(dir, 'environment.ts');
const targetDevPath = join(dir, 'environment.development.ts');

const envConfigFile = `
export const environment = {
  giphyApiKey: '${process.env.GIPHY_API_KEY}',
  giphyUrl: '${process.env.GIPHY_URL}'
};
`;

writeFileSync(targetPath, envConfigFile);
writeFileSync(targetDevPath, envConfigFile);
console.log(`✅ Environment files generated at ${targetPath}`);
