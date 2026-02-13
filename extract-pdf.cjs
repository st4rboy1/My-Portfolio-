const fs = require('fs');
const PDFParse = require('pdf-parse/lib/pdf.js');

const pdfPath = 'c:\\Users\\imasa\\Downloads\\MASANGCAY-RESUME 10 PAGES.pdf';

const dataBuffer = fs.readFileSync(pdfPath);

PDFParse(dataBuffer)
  .then(data => {
    console.log(data.text);
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
