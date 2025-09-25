const fs = require('fs');
const path = require('path');

function generateAPI() {
  const resultsDir = './_data/results';
  const apiDir = './api';
  
  // Crear directorio API si no existe
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }
  
  if (!fs.existsSync(resultsDir)) {
    console.log('No results directory found');
    return;
  }
  
  const sites = fs.readdirSync(resultsDir);
  
  sites.forEach(siteId => {
    const siteDir = path.join(resultsDir, siteId);
    const files = fs.readdirSync(siteDir);
    const latestFile = files.sort().pop();
    
    if (latestFile) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(siteDir, latestFile), 'utf8'));
        
        // Crear JSON simplificado para la API
        const apiData = {
          url: data.url,
          timestamp: data.timestamp,
          lighthouse: {
            performance: Math.round(data.lighthouse.performance * 100),
            accessibility: Math.round(data.lighthouse.accessibility * 100),
            bestPractices: Math.round(data.lighthouse.bestPractices * 100),
            seo: Math.round(data.lighthouse.seo * 100),
            pwa: Math.round(data.lighthouse.pwa * 100)
          },
          firstContentfulPaint: parseFloat((data.firstContentfulPaint / 1000).toFixed(1)),
          largestContentfulPaint: parseFloat((data.largestContentfulPaint / 1000).toFixed(1)),
          cumulativeLayoutShift: parseFloat(data.cumulativeLayoutShift.toFixed(3)),
          totalBlockingTime: Math.round(data.totalBlockingTime),
          speedIndex: parseFloat((data.speedIndex / 1000).toFixed(1))
        };
        
        // Determinar nombre del archivo basado en la URL
        let filename = 'portfolio.json';
        if (data.url.includes('/cv')) {
          filename = 'cv.json';
        }
        
        // Guardar como archivo API
        fs.writeFileSync(path.join(apiDir, filename), JSON.stringify(apiData, null, 2));
        console.log(`Generated API file: ${filename}`);
        
      } catch (error) {
        console.error(`Error processing ${latestFile}:`, error);
      }
    }
  });
  
  // Crear un archivo de índice con todos los sitios
  const indexData = {
    sites: fs.readdirSync(apiDir)
      .filter(file => file.endsWith('.json') && file !== 'index.json')
      .map(file => {
        const data = JSON.parse(fs.readFileSync(path.join(apiDir, file), 'utf8'));
        return {
          name: file.replace('.json', ''),
          url: data.url,
          lastUpdate: data.timestamp,
          performance: data.lighthouse.performance
        };
      }),
    lastUpdate: Date.now()
  };
  
  fs.writeFileSync(path.join(apiDir, 'index.json'), JSON.stringify(indexData, null, 2));
  console.log('Generated index.json');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateAPI();
}

module.exports = generateAPI;
