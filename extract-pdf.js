import fs from 'fs';
import pdfParse from 'pdf-parse/legacy/build/pdf.js';

const pdfPath = 'c:\\Users\\imasa\\Downloads\\MASANGCAY-RESUME 10 PAGES.pdf';

const data = fs.readFileSync(pdfPath);

pdfParse(data).then(result => {
  console.log(result.text);
}).catch(err => {
  console.error('Error parsing PDF:', err.message);
  process.exit(1);
});
