document.addEventListener('DOMContentLoaded', () => {
  // Base de datos de valor genético por raza (Escala referencial 1-100)
  const breedStats = {
    "Angus": { name: "Angus", milk: 20, meat: 95, adapt: 40 },
    "Holstein": { name: "Holstein", milk: 100, meat: 30, adapt: 25 },
    "Brahman": { name: "Brahman", milk: 25, meat: 70, adapt: 100 },
    "Simmental": { name: "Simmental", milk: 75, meat: 85, adapt: 60 }
  };

  // Motor de simulación F1
  document.getElementById('btn-simular').addEventListener('click', () => {
    const sireKey = document.getElementById('sim-padre').value;
    const damKey = document.getElementById('sim-madre').value;
    
    const sire = breedStats[sireKey];
    const dam = breedStats[damKey];
    
    let heterosisBonus = 1.05; // 5% base
    if ((sireKey === 'Brahman' && damKey !== 'Brahman') || (damKey === 'Brahman' && sireKey !== 'Brahman')) {
        heterosisBonus = 1.15; // 15% por cruce Taurus x Indicus
    }
    if (sireKey === damKey) heterosisBonus = 1.0; // 0% Raza pura

    const f1Milk = ((sire.milk + dam.milk) / 2) * heterosisBonus;
    const f1Meat = ((sire.meat + dam.meat) / 2) * heterosisBonus;
    const f1Adapt = ((sire.adapt + dam.adapt) / 2) * heterosisBonus;

    document.getElementById('f1-name').textContent = sireKey === damKey ? `Puro ${sire.name}` : `Cruce ${sire.name} x ${dam.name}`;
    document.getElementById('f1-milk').textContent = f1Milk.toFixed(1) + " pts";
    document.getElementById('f1-meat').textContent = f1Meat.toFixed(1) + " pts";
    document.getElementById('f1-adapt').textContent = f1Adapt.toFixed(1) + " pts";
    
    const heterosisPct = ((heterosisBonus - 1) * 100).toFixed(0);
    document.getElementById('f1-heterosis').textContent = `+${heterosisPct}%`;
    
    document.getElementById('sim-result').classList.remove('hidden');
  });

  // Lógica de PWA (Registro Offline)
  const form = document.getElementById('bovine-form');
  const recordsContainer = document.getElementById('records-list');
  loadRecords();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const record = {
      chapa: document.getElementById('chapa').value,
      raza: document.getElementById('raza').value,
      proposito: document.getElementById('proposito').value,
      peso: document.getElementById('peso').value,
      fecha: new Date().toLocaleDateString()
    };
    const existing = JSON.parse(localStorage.getItem('bovinos_records') || '[]');
    existing.unshift(record);
    localStorage.setItem('bovinos_records', JSON.stringify(existing));
    form.reset();
    loadRecords();
  });

  function loadRecords() {
    const records = JSON.parse(localStorage.getItem('bovinos_records') || '[]');
    recordsContainer.innerHTML = records.length 
      ? records.map(r => `<div class="record-item"><h4>ID: ${r.chapa}</h4><p><b>Genética:</b> ${r.raza}</p><p><b>Propósito:</b> ${r.proposito}</p><p><b>Nacimiento:</b> ${r.peso}kg | Fecha: ${r.fecha}</p></div>`).join('') 
      : '<p style="color:#6c757d; font-style:italic;">No hay registros guardados en este dispositivo.</p>';
  }

  // Network Status
  const statusBadge = document.getElementById('network-status');
  function updateOnlineStatus() {
    if (navigator.onLine) {
        statusBadge.textContent = 'En línea'; 
        statusBadge.className = 'status-badge online';
    } else {
        statusBadge.textContent = 'Offline'; 
        statusBadge.className = 'status-badge offline';
    }
  }
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // Registro del Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker registrado correctamente.'))
      .catch((err) => console.error('Error al registrar Service Worker:', err));
  }
});
