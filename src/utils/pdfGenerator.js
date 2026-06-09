export const generateSpecSheetPDF = (item) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;
  
  const specsHTML = item.specs.map(spec => `
    <div class="spec-row">
      <span class="spec-label">${spec.label}</span>
      <span class="spec-value">${spec.value}</span>
    </div>
  `).join('');

  printWindow.document.write(`
    <html>
      <head>
        <title>${item.name} Specification Sheet</title>
        <style>
          body {
            font-family: 'Outfit', 'Inter', sans-serif;
            color: #111;
            background: #fff;
            padding: 40px;
            line-height: 1.6;
          }
          .header {
            border-bottom: 3px solid #ff5e00;
            padding-bottom: 20px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .logo {
            font-size: 28px;
            font-weight: 900;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-family: 'Outfit', sans-serif;
          }
          .logo span {
            color: #ff5e00;
          }
          .model-code {
            font-size: 14px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .title {
            font-size: 32px;
            margin: 0 0 10px 0;
            font-weight: 800;
            color: #111;
            font-family: 'Outfit', sans-serif;
          }
          .desc {
            font-size: 16px;
            color: #444;
            margin-bottom: 40px;
            max-width: 600px;
          }
          .specs-section {
            margin-bottom: 40px;
          }
          .specs-title {
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
            margin-bottom: 20px;
            color: #ff5e00;
            font-family: 'Outfit', sans-serif;
          }
          .spec-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #eee;
          }
          .spec-label {
            font-weight: 600;
            color: #555;
          }
          .spec-value {
            font-weight: 700;
            color: #111;
          }
          .footer {
            margin-top: 60px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">KE<span>MET</span></div>
            <div style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px;">By Alpha Gino</div>
          </div>
          <div class="model-code">${item.modelCode}</div>
        </div>
        <h1 class="title">${item.name}</h1>
        <p class="desc">${item.description}</p>
        
        <div class="specs-section">
          <div class="specs-title">Technical Specifications</div>
          ${specsHTML}
        </div>
        
        <div class="footer">
          &copy; ${new Date().getFullYear()} KEMET Heavy Machinery | Alpha Sino General Trading Co. L.L.C. | www.dxbalpha.com
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
};

export const generateCatalogPDF = (selectedItems, userInfo) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const todayStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  let catalogHTML = `
    <div class="cover-page">
      <div class="cover-glow"></div>
      <div class="cover-header">
        <div class="logo">KE<span>MET</span></div>
        <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1.5px;">Heavy Machinery Division</div>
      </div>
      <div class="cover-body">
        <div class="cover-title-pill">Customized Equipment Catalog</div>
        <h1 class="cover-title">2026 LINEUP<br><span>SPECIFICATION MANUAL</span></h1>
        <p class="cover-desc">
          A tailored engineering and specification document compiled dynamically for Kemet's commercial clients. Contains active model data sheets, powertrain profiles, load capacity curves, and system diagnostics.
        </p>
      </div>
      <div class="cover-footer">
        <div class="metadata-block">
          <span class="meta-label">PREPARED FOR</span>
          <span class="meta-value">${userInfo.name}</span>
          <span class="meta-value-sub">${userInfo.email} | ${userInfo.phone}</span>
        </div>
        <div class="metadata-block" style="text-align: right;">
          <span class="meta-label">DATE GENERATED</span>
          <span class="meta-value">${todayStr}</span>
          <span class="meta-value-sub">Kemet GCC Fleet Systems</span>
        </div>
      </div>
    </div>
    <div class="page-break"></div>
  `;

  const categoriesPresent = [...new Set(selectedItems.map(item => item.category))];

  categoriesPresent.forEach(cat => {
    catalogHTML += `
      <div class="category-transition-page">
        <div class="trans-body">
          <span class="trans-pill">Filing Class</span>
          <h2 class="trans-title">${cat}</h2>
          <div class="trans-divider"></div>
          <p class="trans-desc">Powertrain specifications, dimensions, hydraulic flows, and field telemetry data for Kemet ${cat.toLowerCase()}.</p>
        </div>
        <div class="trans-footer">
          <span>&copy; KEMET Heavy Machinery</span>
          <span>Document Section: ${cat}</span>
        </div>
      </div>
      <div class="page-break"></div>
    `;

    const catItems = selectedItems.filter(item => item.category === cat);
    catItems.forEach((item, index) => {
      const specsHTML = item.specs.map(spec => `
        <div class="spec-row">
          <span class="spec-label">${spec.label}</span>
          <span class="spec-value">${spec.value}</span>
        </div>
      `).join('');

      const extraSpecsHTML = item.extraSpecs.map(spec => `
        <div class="spec-row">
          <span class="spec-label">${spec.label}</span>
          <span class="spec-value">${spec.value}</span>
        </div>
      `).join('');

      catalogHTML += `
        <div class="product-page">
          <div class="header">
            <div>
              <div class="logo">KE<span>MET</span></div>
              <div style="font-size: 9px; color: #888; text-transform: uppercase;">Heavy Machinery</div>
            </div>
            <div class="model-code">${item.modelCode} / Year ${item.year}</div>
          </div>
          
          <h2 class="product-title">${item.name}</h2>
          <p class="product-desc">${item.description}</p>
          
          <div class="specs-grid">
            <div class="specs-box">
              <div class="specs-box-title">Key Performance Criteria</div>
              ${specsHTML}
            </div>
            <div class="specs-box">
              <div class="specs-box-title">Technical Specifications</div>
              ${extraSpecsHTML}
            </div>
          </div>
          
          <div class="footer">
            <span>Prepared for ${userInfo.name} &bull; Generated on ${todayStr}</span>
            <span>Page ${cat}-${index + 1}</span>
          </div>
        </div>
        <div class="page-break"></div>
      `;
    });
  });

  catalogHTML = catalogHTML.replace(/<div class="page-break"><\/div>$/, '');

  printWindow.document.write(`
    <html>
      <head>
        <title>KEMET Catalog - Compiled for ${userInfo.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&family=Inter:wght@400;500;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            color: #111;
            background: #fff;
            margin: 0;
            padding: 0;
            line-height: 1.5;
          }
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          
          .cover-page {
            height: 100vh;
            box-sizing: border-box;
            padding: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #111215;
            color: #fff;
            position: relative;
            overflow: hidden;
          }
          .cover-glow {
            position: absolute;
            bottom: -200px;
            right: -200px;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(255, 94, 0, 0.12) 0%, transparent 70%);
          }
          .cover-header {
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 20px;
          }
          .logo {
            font-family: 'Outfit', sans-serif;
            font-size: 26px;
            font-weight: 900;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #fff;
          }
          .logo span {
            color: #ff5e00;
          }
          .cover-title-pill {
            display: inline-block;
            font-family: 'Outfit', sans-serif;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #ff5e00;
            border: 1px solid rgba(255, 94, 0, 0.3);
            background: rgba(255, 94, 0, 0.06);
            padding: 6px 14px;
            border-radius: 20px;
            margin-bottom: 24px;
          }
          .cover-title {
            font-family: 'Outfit', sans-serif;
            font-size: 48px;
            font-weight: 900;
            line-height: 1.1;
            margin: 0 0 20px 0;
            letter-spacing: -0.5px;
          }
          .cover-title span {
            color: #ff5e00;
          }
          .cover-desc {
            font-size: 16px;
            color: #8a909d;
            max-width: 600px;
            line-height: 1.6;
            margin: 0;
          }
          .cover-footer {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 30px;
          }
          .metadata-block {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .meta-label {
            font-family: 'Outfit', sans-serif;
            font-size: 10px;
            font-weight: 800;
            color: #ff5e00;
            letter-spacing: 1px;
          }
          .metadata-block .meta-value {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
          }
          .meta-value-sub {
            font-size: 12px;
            color: #8a909d;
          }

          .category-transition-page {
            height: 100vh;
            background: #ff5e00;
            color: #fff;
            padding: 80px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .trans-body {
            margin-top: auto;
            margin-bottom: auto;
            max-width: 600px;
          }
          .trans-pill {
            font-family: 'Outfit', sans-serif;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            background: rgba(255,255,255,0.15);
            padding: 5px 12px;
            border-radius: 20px;
          }
          .trans-title {
            font-family: 'Outfit', sans-serif;
            font-size: 56px;
            font-weight: 900;
            text-transform: uppercase;
            margin: 15px 0 20px 0;
            letter-spacing: -1px;
          }
          .trans-divider {
            width: 80px;
            height: 4px;
            background: #fff;
            margin-bottom: 20px;
          }
          .trans-desc {
            font-size: 18px;
            line-height: 1.6;
            opacity: 0.9;
          }
          .trans-footer {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.8;
            border-top: 1px solid rgba(255,255,255,0.2);
            padding-top: 20px;
          }

          .product-page {
            height: 100vh;
            box-sizing: border-box;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #fff;
            color: #111;
          }
          .header {
            border-bottom: 2px solid #ff5e00;
            padding-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .header .logo {
            color: #111;
          }
          .model-code {
            font-family: 'Outfit', sans-serif;
            font-size: 13px;
            font-weight: 700;
            color: #666;
            letter-spacing: 1px;
          }
          .product-title {
            font-family: 'Outfit', sans-serif;
            font-size: 32px;
            font-weight: 800;
            margin: 30px 0 10px 0;
            color: #111;
          }
          .product-desc {
            font-size: 14px;
            color: #444;
            margin: 0 0 30px 0;
            max-width: 800px;
            line-height: 1.6;
          }
          .specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            flex-grow: 1;
            align-content: start;
          }
          .specs-box {
            background: #f7f8fa;
            border-radius: 10px;
            padding: 24px;
            border: 1px solid #eef0f3;
          }
          .specs-box-title {
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 800;
            color: #ff5e00;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #e0e3e8;
            padding-bottom: 8px;
            margin-bottom: 14px;
          }
          .spec-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #eef0f3;
            font-size: 12.5px;
          }
          .spec-row:last-child {
            border-bottom: none;
          }
          .spec-label {
            font-weight: 600;
            color: #555;
          }
          .spec-value {
            font-weight: 700;
            color: #111;
          }
          .footer {
            border-top: 1px solid #eee;
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #888;
          }
          
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .cover-page {
              background: #111215 !important;
              color: #fff !important;
            }
            .category-transition-page {
              background: #ff5e00 !important;
              color: #fff !important;
            }
            .specs-box {
              background: #f7f8fa !important;
            }
          }
        </style>
      </head>
      <body>
        ${catalogHTML}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
};
