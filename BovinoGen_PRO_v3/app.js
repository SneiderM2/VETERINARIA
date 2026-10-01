document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     Módulo 1: Adaptación Metabólica (PubMed 40818289)
     ========================================= */
  const btnEvalMeta = document.getElementById('btn-evaluar-meta');
  const panelMeta = document.getElementById('meta-results');
  
  // Lógica basada en el estudio "Metabolic adaptation to energetic demands of early lactation"
  // Holstein (Especializada) presenta mayor estrés oxidativo e inestabilidad metabólica frente a demandas energéticas que Simmental.
  const perfilesMetabolicos = {
    "Holstein": { oxBase: 75, estBase: 40, defBase: 80, notas: "Riesgo alto de cetosis subclínica y estrés oxidativo en lactancia temprana por extrema demanda energética." },
    "Simmental": { oxBase: 45, estBase: 75, defBase: 50, notas: "Mejor adaptación metabólica, menor movilización de reservas corporales y menor estrés oxidativo." },
    "Angus": { oxBase: 30, estBase: 85, defBase: 30, notas: "Baja demanda por lactancia; excelente estabilidad energética." },
    "Brahman": { oxBase: 25, estBase: 90, defBase: 20, notas: "Altísima estabilidad, metabolismo regulado para ahorro energético." }
  };

  btnEvalMeta.addEventListener('click', () => {
    const raza = document.getElementById('meta-raza').value;
    const clima = document.getElementById('meta-clima').value;
    const data = perfilesMetabolicos[raza];
    
    // Modificadores ambientales (Simulación de estrés ambiental, como alta montaña o trópico)
    let modClimaOx = 0; let modClimaEst = 0;
    if (clima === 'tropical' && raza !== 'Brahman') { modClimaOx += 15; modClimaEst -= 20; }
    if (clima === 'altura' && raza === 'Brahman') { modClimaOx += 10; modClimaEst -= 15; } // Brahman sufre en alta montaña
    if (clima === 'altura' && raza === 'Holstein') { modClimaOx += 20; modClimaEst -= 15; } // Estrés de hipoxia sumado a lactancia

    let resOx = Math.min(100, Math.max(0, data.oxBase + modClimaOx));
    let resEst = Math.min(100, Math.max(0, data.estBase + modClimaEst));
    let resDef = Math.min(100, Math.max(0, data.defBase + (modClimaOx * 0.5)));

    panelMeta.classList.remove('hidden');
    
    // Animación de barras
    setTimeout(() => {
      document.getElementById('bar-ox').style.width = resOx + '%';
      document.getElementById('val-ox').textContent = resOx.toFixed(0) + '%';
      
      document.getElementById('bar-est').style.width = resEst + '%';
      document.getElementById('val-est').textContent = resEst.toFixed(0) + '%';
      
      document.getElementById('bar-def').style.width = resDef + '%';
      document.getElementById('val-def').textContent = resDef.toFixed(0) + '%';
    }, 100);

    document.getElementById('meta-conclusion').innerHTML = `<b>Conclusión Fisiológica:</b> ${data.notas} <br><small><i>Referencia: PMID 40818289 (Adaptación metabólica en lactancia temprana Holstein vs Simmental).</i></small>`;
  });

  /* =========================================
     Módulo 2: Simulador F1 Avanzado
     ========================================= */
  const genDB = {
    "Angus": { type: "Taurus", milk: 40, meat: 95, rust: 50 },
    "Holstein": { type: "Taurus", milk: 100, meat: 35, rust: 30 },
    "Brahman": { type: "Indicus", milk: 30, meat: 65, rust: 100 },
    "Simmental": { type: "Taurus", milk: 80, meat: 85, rust: 60 }
  };

  document.getElementById('btn-simular-f1').addEventListener('click', () => {
    const sireKey = document.getElementById('sim-padre').value;
    const damKey = document.getElementById('sim-madre').value;
    const sire = genDB[sireKey]; const dam = genDB[damKey];
    
    // El vigor híbrido es máximo (15-20%) cuando se cruza Bos Taurus x Bos Indicus
    let heterosis = 1.0; let hPct = 0;
    if (sire.type !== dam.type) { heterosis = 1.18; hPct = 18; } 
    else if (sireKey !== damKey) { heterosis = 1.08; hPct = 8; } // Cruce dentro de la misma subespecie

    const f1Milk = ((sire.milk + dam.milk) / 2) * heterosis;
    const f1Meat = ((sire.meat + dam.meat) / 2) * heterosis;
    const f1Rust = ((sire.rust + dam.rust) / 2) * heterosis;

    document.getElementById('f1-titulo').textContent = sireKey === damKey ? `Raza Pura ${sireKey}` : `${sireKey} x ${damKey}`;
    
    animateValue('f1-leche', 0, f1Milk, 800);
    animateValue('f1-carne', 0, f1Meat, 800);
    animateValue('f1-rustico', 0, f1Rust, 800);
    document.getElementById('f1-heterosis').textContent = `+${hPct}%`;
    
    document.getElementById('sim-results').classList.remove('hidden');
  });

  function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  /* =========================================
     Módulo 3: Base de Datos de Hato (PWA LocalStorage)
     ========================================= */
  const formHerd = document.getElementById('herd-form');
  const tbody = document.getElementById('herd-table-body');

  function renderTable() {
    const records = JSON.parse(localStorage.getItem('herd_data') || '[]');
    tbody.innerHTML = records.map(r => `
      <tr>
        <td><b>${r.id}</b></td>
        <td>${r.raza}</td>
        <td>${r.del} días</td>
        <td>${r.notas}</td>
        <td>${r.date}</td>
      </tr>
    `).join('');
    if(records.length === 0) tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#64748b;">No hay animales registrados.</td></tr>';
  }

  formHerd.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      id: document.getElementById('reg-id').value,
      raza: document.getElementById('reg-raza').value,
      del: document.getElementById('reg-del').value || '0',
      notas: document.getElementById('reg-notas').value || 'Sin novedades',
      date: new Date().toLocaleDateString()
    };
    const records = JSON.parse(localStorage.getItem('herd_data') || '[]');
    records.unshift(data);
    localStorage.setItem('herd_data', JSON.stringify(records));
    formHerd.reset();
    renderTable();
  });

  renderTable();

  /* =========================================
     Gestión de Red y Service Worker
     ========================================= */
  const netBadge = document.getElementById('network-status');
  const updateNet = () => {
    if (navigator.onLine) {
      netBadge.textContent = '● En línea'; netBadge.className = 'status-badge online';
    } else {
      netBadge.textContent = '● Modo Offline (Datos Locales)'; netBadge.className = 'status-badge offline';
    }
  };
  window.addEventListener('online', updateNet);
  window.addEventListener('offline', updateNet);
  updateNet();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.error('SW Failed', err));
  }
});
