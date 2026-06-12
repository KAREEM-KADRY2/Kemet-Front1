import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoriesToSearch = [
  path.join(__dirname, 'src', 'locales', 'en'),
  path.join(__dirname, 'src', 'locales', 'ar'),
  path.join(__dirname, 'src', 'locales', 'es'),
  path.join(__dirname, 'src', 'locales', 'fr'),
  path.join(__dirname, 'src', 'locales', 'ru'),
];

directoriesToSearch.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (file.endsWith('.json')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        try {
          const json = JSON.parse(content);
          if (json.catalog) {
            // Fix: check if the folder is exactly 'ar'
            if (dir.endsWith(`${path.sep}ar`) || dir.endsWith('/ar') || dir.endsWith('\\ar')) {
              json.catalog.headline_1 = "كتالوج معدات كيميت";
              json.catalog.headline_2 = "2026";
            } else {
              json.catalog.headline_1 = "KEMET Machinery";
              json.catalog.headline_2 = "Catalog 2026";
            }
            
            // Ensure slogan is correct under footer
            if (json.footer) {
              if (dir.endsWith(`${path.sep}ar`) || dir.endsWith('/ar') || dir.endsWith('\\ar')) {
                json.footer.slogan = "كيميت — صُممت لتدوم";
              } else {
                json.footer.slogan = "KEMET — Built to Endure";
              }
            }
            
            content = JSON.stringify(json, null, 2);
            if (content !== originalContent) {
              fs.writeFileSync(filePath, content, 'utf8');
              console.log(`Fixed title in: ${filePath}`);
            }
          }
        } catch (e) {
          console.error('Error parsing', filePath, e);
        }
      }
    });
  }
});
