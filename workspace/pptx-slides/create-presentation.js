const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/kittipos/.claude/skills/pptx/scripts/html2pptx.js');
const path = require('path');

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Acme AI Solution';
  pptx.title = 'Hospital Microservice Architecture';

  const slideFiles = [
    'slide01-title.html',
    'slide02-executive-summary.html',
    'slide03-architecture-overview.html',
    'slide04-presentation-layer.html',
    'slide05-infrastructure.html',
    'slide06-microservices.html',
    'slide07-data-layer.html',
    'slide08-integration.html',
    'slide09-security.html',
    'slide10-deployment.html',
    'slide11-benefits.html',
    'slide12-roadmap.html'
  ];

  for (const slideFile of slideFiles) {
    const slidePath = path.join(__dirname, slideFile);
    console.log(`Processing ${slideFile}...`);
    await html2pptx(slidePath, pptx);
  }

  await pptx.writeFile({ fileName: 'acme-ai-cto-presentation.pptx' });
  console.log('Presentation created successfully: acme-ai-cto-presentation.pptx');
}

createPresentation().catch(error => {
  console.error('Error creating presentation:', error);
  process.exit(1);
});
