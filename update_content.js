import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const replaceInFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Alpha Gino -> Alfa Sino
  content = content.replace(/Alpha Gino/g, 'Alfa Sino');
  content = content.replace(/Alpha Sino/g, 'Alfa Sino'); // Just in case some were already Alpha Sino

  // 2. Phone Number
  content = content.replace(/\+971\s*58\s*860\s*3711/g, '+971 52 233 3388');
  content = content.replace(/971588603711/g, '971522333388');

  // 3. Address
  content = content.replace(/Dubai Airport Building, Office 104, Port Said Area, Dubai, UAE/g, 'Office 104, Al Owais Building, Port Said Area, Dubai, UAE');
  content = content.replace(/مبنى مطار دبي، مكتب 104، منطقة بورسعيد، دبي، الإمارات/g, 'مكتب 104، مبنى العويس، منطقة بورسعيد، دبي، الإمارات');

  // 4. Slogan
  content = content.replace(/"slogan":\s*"Power Without Compromise."/g, '"slogan": "KEMET — Built to Endure"');
  content = content.replace(/"slogan":\s*"قوة بلا تنازل."/g, '"slogan": "كيميت — صُممت لتدوم"');
  content = content.replace(/"slogan":\s*"Construido Sin Compromisos."/g, '"slogan": "KEMET — Built to Endure"');
  content = content.replace(/"slogan":\s*"Construit Sans Compromis."/g, '"slogan": "KEMET — Built to Endure"');
  content = content.replace(/"slogan":\s*"Создано без компромиссов."/g, '"slogan": "KEMET — Built to Endure"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
};

const directoriesToSearch = [
  path.join(__dirname, 'src', 'locales', 'en'),
  path.join(__dirname, 'src', 'locales', 'ar'),
  path.join(__dirname, 'src', 'locales', 'es'),
  path.join(__dirname, 'src', 'locales', 'fr'),
  path.join(__dirname, 'src', 'locales', 'ru'),
  __dirname
];

directoriesToSearch.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (file.endsWith('.json') || file.endsWith('.cjs')) {
        replaceInFile(path.join(dir, file));
      }
    });
  }
});
