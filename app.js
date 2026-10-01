const breeds = {
  bon: {
    name: "BON (Blanco Orejinegro)",
    icon: "🐄",
    type: "Bos taurus criollo",
    role: "Base genética colombiana",
    desc: "Raza criolla colombiana utilizada en el proyecto como parental por su adaptación al trópico, resistencia a enfermedades y eficiencia reproductiva.",
    origin: "Colombia, zona andina media.",
    weight: "Hembras: 400-450 kg | Machos: 600-750 kg",
    production: "Leche: 4-5 L/día en pastoreo. Carne: Excelente calidad y terneza.",
    traits: ["Adaptación extrema", "Alta fertilidad", "Resistencia a parásitos", "Longevidad", "Habilidad materna"],
    note: "El avance reporta heredabilidades y variables de crecimiento y reproducción para BON en sistemas de cruzamiento.",
    radar: [80, 50, 95, 90, 85, 70] // [Crecimiento, Leche, Adaptación, Fertilidad, Resistencia, Calidad Carne]
  },
  angus: {
    name: "Angus",
    icon: "🐂",
    type: "Bos taurus británco",
    role: "Carne y precocidad",
    desc: "Raza especializada en producción de carne, empleada como componente parental para complementar características de crecimiento, precocidad y calidad de canal.",
    origin: "Escocia (Aberdeenshire y Angus).",
    weight: "Hembras: 500-550 kg | Machos: 800-900 kg",
    production: "Carne: Alto marmoleo, terneza superior, rápido crecimiento.",
    traits: ["Precocidad", "Calidad de canal", "Alta ganancia de peso", "Fertilidad", "Facilidad de parto"],
    note: "Las fuentes del avance aportan información de crecimiento, fertilidad, peso adulto y características de canal.",
    radar: [95, 30, 40, 85, 50, 100]
  },
  holstein: {
    name: "Holstein",
    icon: "🐄",
    type: "Bos taurus especializado",
    role: "Producción de leche",
    desc: "Raza lechera por excelencia, utilizada para estudiar el cruce con BON buscando mejorar volumen de producción de leche conservando adaptación.",
    origin: "Países Bajos y Alemania.",
    weight: "Hembras: 600-700 kg | Machos: 900-1000 kg",
    production: "Leche: Alta producción (25-40+ L/día), menor porcentaje de sólidos.",
    traits: ["Alto volumen lechero", "Ubres de excelente conformación", "Temperamento dócil"],
    note: "El avance incluye información del parental y también un estudio directamente relacionado con BON × Holstein.",
    radar: [70, 100, 30, 60, 40, 30]
  },
  brahman: {
    name: "Brahman",
    icon: "🐃",
    type: "Bos indicus",
    role: "Rusticidad y adaptación",
    desc: "Raza cebuína altamente resistente al calor y ectoparásitos, utilizada para inyectar adaptación y vigor híbrido en cruces tropicales.",
    origin: "Estados Unidos (a partir de razas de la India).",
    weight: "Hembras: 450-550 kg | Machos: 800-1000 kg",
    production: "Carne: Rendimiento en canal aceptable, excelente desempeño en forrajes pobres.",
    traits: ["Tolerancia al calor", "Resistencia a garrapatas", "Habilidad para caminar", "Longevidad productiva"],
    note: "Existe en el avance una fuente directamente relacionada con el desempeño productivo del F1 BON × Brahman.",
    radar: [85, 20, 100, 65, 95, 50]
  },
  simmental: {
    name: "Simmental",
    icon: "🐮",
    type: "Bos taurus continental",
    role: "Doble propósito",
    desc: "Raza continental de gran tamaño y musculatura, aporta tanto producción de carne como un nivel decente de leche en sistemas de cruzamiento.",
    origin: "Suiza (valle del río Simme).",
    weight: "Hembras: 650-750 kg | Machos: 1000-1200 kg",
    production: "Carne y Leche: Alta tasa de crecimiento y leche rica en sólidos.",
    traits: ["Doble propósito real", "Alta tasa de crecimiento", "Musculatura", "Longevidad"],
    note: "Para este cruce el simulador muestra una estimación didáctica, no un resultado experimental reportado en el avance.",
    radar: [90, 75, 45, 80, 55, 85]
  },
  hereford: {
    name: "Hereford",
    icon: "🐮",
    type: "Bos taurus británico",
    role: "Producción de carne en pastoreo",
    desc: "Raza cárnica de gran rusticidad entre las británicas, excelente capacidad de conversión forrajera y buena calidad de carne.",
    origin: "Inglaterra (condado de Herefordshire).",
    weight: "Hembras: 500-600 kg | Machos: 800-900 kg",
    production: "Carne: Rápida maduración, buena calidad, excelente en pastoreo.",
    traits: ["Rusticidad", "Habilidad forrajera", "Fertilidad", "Temperamento muy dócil"],
    note: "El avance menciona Angus × Hereford en una de sus fuentes, pero no presenta un F1 BON × Hereford.",
    radar: [85, 25, 60, 85, 65, 80]
  }
};

const crosses = [
  {
    a: "bon", b: "angus",
    title: "BON × Angus",
    goal: "Sintetizar una línea cárnica adaptada al trópico, con la calidad de canal del Angus y la resistencia al calor/parásitos del BON.",
    direct: false,
    result: "El avance usa datos de los parentales BON y Angus para plantear el modelo. Se espera alta heterosis para características reproductivas y de supervivencia, y un complemento aditivo ideal entre adaptación (BON) y calidad/crecimiento (Angus)."
  },
  {
    a: "bon", b: "holstein",
    title: "BON × Holstein",
    goal: "Sistema de producción de leche en el trópico bajo, combinando el alto volumen lechero del Holstein con la adaptación y rusticidad del BON.",
    direct: true,
    result: "El estudio de Giraldo et al. (2025) reporta promedios F1 de 5492,6 ± 1027,2 kg de leche por lactación; 177,1 ± 29,5 kg de proteína; 215,1 ± 37,1 kg de grasa; 110,9 ± 55,4 días abiertos. El intervalo entre partos fue 57% mayor en BON × Holstein comparado con cruces menos lecheros."
  },
  {
    a: "bon", b: "brahman",
    title: "BON × Brahman",
    goal: "Máxima adaptación y rusticidad. Cruce clásico para la ganadería de cría extensiva en sabanas inundables y trópico bajo severo.",
    direct: true,
    result: "Navarro-Ortiz & Roa-Vega (2024) trabajaron con novillos BON × Brahman, con peso inicial de 180 ± 5,0 kg, evaluando ganancia de peso (GDP), consumo, eficiencia metabólica y conversión en pastoreo de Brachiaria spp., demostrando excelente adaptación."
  }
];

const sources = [
  ["Ramírez-Toro et al., 2020", "BON; crecimiento y parámetros genéticos", "Translational Animal Science", "https://doi.org/10.1093/tas/txaa174"],
  ["Ramírez-Toro et al., 2021", "BON; selección genética y crecimiento/reproducción", "Translational Animal Science", "https://doi.org/10.1093/tas/txab133"],
  ["Pardo, Elzo, Gama & Melucci, 2020", "Angus; crecimiento, fertilidad y productividad", "Livestock Science", "https://doi.org/10.1016/j.livsci.2020.103952"],
  ["Herd & Oddy, 2023", "Angus; peso adulto, consumo y eficiencia", "Animal Production Science", "https://doi.org/10.1071/AN22342"],
  ["Pauling et al., 2023", "Angus; crecimiento y características de canal", "Journal of Animal Science", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563144/"],
  ["Caivio-Nasner et al., 2021", "BON; reproducción", "Semina: Ciências Agrárias", "https://doi.org/10.5433/1679-0359.2021v42n4p2523"],
  ["Hernández-Herrera, Rincón-Flórez & Pulido-Hoyos, 2024", "BON; genética de proteínas lácteas", "Revista de Ciências Agroveterinárias", "https://doi.org/10.5965/223811712312024117"],
  ["Trejo-Casanova et al., 2023", "Holstein; producción y composición de leche", "Acta Agronómica", "https://doi.org/10.15446/acag.v72n1.97481"],
  ["Cardona-Cifuentes et al., 2021", "Holstein; persistencia de lactancia", "Tropical Animal Health and Production", "https://doi.org/10.1007/s11250-021-02611-8"],
  ["Giraldo, López-Herrera & Ruiz-Cortés, 2025", "BON × Holstein; producción y reproducción", "Revista Colombiana de Ciencias Pecuarias", "https://doi.org/10.17533/udea.rccp.v38n1a2"],
  ["Londoño-Gil et al., 2022", "BON; crecimiento", "Tropical Animal Health and Production", "https://doi.org/10.1007/s11250-022-03211-w"],
  ["Correa-García, Campos-Gaona & Flórez-Díaz, 2022", "BON; adaptación fisiológica", "Revista Facultad Nacional de Agronomía Medellín", "https://doi.org/10.15446/rfnam.v75n2.95718"],
  ["Riveros-Pinilla et al., 2022", "BON y Brahman; reproducción y reserva ovárica", "Revista de Investigaciones Veterinarias del Perú", "https://doi.org/10.15381/rivep.v33i4.21000"],
  ["Ramírez-Restrepo et al., 2023", "Brahman; crecimiento, eficiencia y ambiente", "Frontiers in Animal Science", "https://doi.org/10.3389/fanim.2023.1103826"],
  ["Navarro-Ortiz & Roa-Vega, 2024", "BON × Brahman; respuesta productiva", "Sistemas de Producción Agroecológicos", "https://doi.org/10.22579/22484817.1011"]
];

const concepts = [
  { title: "Heterosis (Vigor Híbrido)", icon: "📈", desc: "Aumento del rendimiento funcional de la descendencia híbrida respecto al promedio de las razas parentales. Es especialmente alto en rasgos de baja heredabilidad como reproducción y supervivencia." },
  { title: "Complementariedad", icon: "🧩", desc: "Ocurre cuando se cruzan razas que destacan en diferentes características, logrando una descendencia F1 que combina las fortalezas de ambas (ej. adaptación tropical de una + calidad de carne de otra)." },
  { title: "Heredabilidad (h²)", icon: "🧬", desc: "Proporción de la variación fenotípica total de un rasgo que se debe a la variación genética aditiva. Rasgos de carcasa tienen alta h², peso tiene media h², y reproducción tiene baja h²." },
  { title: "Efecto Aditivo", icon: "➕", desc: "La suma de los efectos individuales de los alelos en múltiples genes sobre un rasgo fenotípico. Se transmite de manera predecible a la descendencia (valor de cría)." },
  { title: "Interacción Genotipo × Ambiente", icon: "🌍", desc: "El fenómeno por el cual diferentes genotipos responden de manera distinta a los cambios ambientales. Un genotipo superior en clima templado puede ser inferior en el trópico." }
];

const glossary = [
  { term: "F1", def: "Primera generación filial resultante del cruce entre dos líneas o razas puras diferentes." },
  { term: "Bos taurus", def: "Subespecie de bovino sin giba, originaria de Europa. Se divide en británicos (ej. Angus), continentales (ej. Simmental) y criollos adaptados (ej. BON)." },
  { term: "Bos indicus", def: "Subespecie bovina con giba (cebú), originaria de la India, altamente resistente al calor (ej. Brahman)." },
  { term: "Poligénico", def: "Rasgo fenotípico controlado por la acción combinada de múltiples genes, a menudo influenciado por el ambiente." },
  { term: "Locus / Loci", def: "Ubicación física específica de un gen o secuencia de ADN en un cromosoma." }
];

function renderBreeds() {
  const grid = document.querySelector("#breedGrid");
  grid.innerHTML = Object.entries(breeds).map(([id, b]) => `
    <article class="card">
      <div class="breed-icon">${b.icon}</div>
      <h3>${b.name}</h3>
      <span class="tag">${b.type}</span>
      <p><b>${b.role}</b></p>
      <p class="desc-text">${b.desc}</p>
      <div class="breed-details">
        <p><strong>📍 Origen:</strong> ${b.origin}</p>
        <p><strong>⚖️ Peso:</strong> ${b.weight}</p>
        <p><strong>🥛🥩 Prod:</strong> ${b.production}</p>
      </div>
      <ul class="trait-tags">
        ${b.traits.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </article>`).join("");
}

function renderTable() {
  const thead = document.querySelector("#breedComparisonTable thead");
  const tbody = document.querySelector("#breedComparisonTable tbody");
  
  thead.innerHTML = `
    <tr>
      <th>Raza</th>
      <th>Tipo</th>
      <th>Aptitud</th>
      <th>Adaptación</th>
      <th>Calidad Carne</th>
      <th>Leche</th>
    </tr>
  `;
  
  tbody.innerHTML = Object.values(breeds).map(b => {
    // Estimaciones simples para la tabla
    const getStars = (val) => "⭐".repeat(Math.round(val / 20)) + "☆".repeat(5 - Math.round(val / 20));
    return `
    <tr>
      <td><strong>${b.name}</strong></td>
      <td><span class="type-badge">${b.type.split(" ")[1]}</span></td>
      <td>${b.role.split(" ")[0]}</td>
      <td>${getStars(b.radar[2])}</td>
      <td>${getStars(b.radar[5])}</td>
      <td>${getStars(b.radar[1])}</td>
    </tr>
  `}).join("");
}

function renderCrosses() {
  document.querySelector("#crossGrid").innerHTML = crosses.map(c => `
    <article class="cross ${c.direct ? 'is-direct' : ''}">
      <div class="cross-header">
        <div class="cross-code">${c.title}</div>
        ${c.direct ? '<span class="badge badge-success">Con Datos Directos F1</span>' : '<span class="badge badge-warning">Estimación de parentales</span>'}
      </div>
      <h3>${breeds[c.a].name.split(" (")[0]} + ${breeds[c.b].name.split(" (")[0]}</h3>
      <p class="goal">${c.goal}</p>
      <div class="result">
        <strong>📚 Según el avance:</strong><br>
        ${c.result}
      </div>
    </article>`).join("");
}

function populateSelectors() {
  const opts = Object.entries(breeds).map(([id, b]) => `<option value="${id}">${b.name}</option>`).join("");
  const aSelect = document.querySelector("#parentA");
  const bSelect = document.querySelector("#parentB");
  aSelect.innerHTML = opts;
  bSelect.innerHTML = opts;
  aSelect.value = "bon";
  bSelect.value = "holstein";
  
  aSelect.addEventListener('change', updatePreviews);
  bSelect.addEventListener('change', updatePreviews);
  updatePreviews();
}

function updatePreviews() {
  const a = breeds[document.querySelector("#parentA").value];
  const b = breeds[document.querySelector("#parentB").value];
  document.querySelector("#parentAPreview").innerHTML = `${a.icon} <strong>${a.type}</strong><br><span>Especialidad: ${a.role}</span>`;
  document.querySelector("#parentBPreview").innerHTML = `${b.icon} <strong>${b.type}</strong><br><span>Especialidad: ${b.role}</span>`;
}

function getCross(a, b) {
  return crosses.find(c => (c.a === a && c.b === b) || (c.a === b && c.b === a));
}

function calculateF1Radar(rA, rB, heterosisBonus = 10) {
  // Simple additive model + generic heterosis bonus
  return rA.map((val, idx) => {
    let avg = (val + rB[idx]) / 2;
    // Apply heterosis (mostly to adaptation, fertility)
    let bonus = idx === 2 || idx === 3 ? heterosisBonus * 1.5 : heterosisBonus;
    return Math.min(100, Math.round(avg + (avg * bonus / 100)));
  });
}

function simulate() {
  const aId = document.querySelector("#parentA").value;
  const bId = document.querySelector("#parentB").value;
  const A = breeds[aId];
  const B = breeds[bId];
  const direct = getCross(aId, bId);
  
  if (aId === bId) {
    document.querySelector("#resultPanel").innerHTML = `
      <div class="result-empty" style="color:#b22222">
        <div class="big-icon">⚠️</div>
        <h3>Misma raza seleccionada</h3>
        <p>Por favor selecciona dos razas diferentes para visualizar un cruce genético y evaluar el vigor híbrido.</p>
      </div>`;
    return;
  }

  let extra = direct ? direct.result : `El cruce específico F1 ${A.name} × ${B.name} no se reporta con datos directos en las fuentes del proyecto. La simulación muestra el complemento aditivo teórico basado en los promedios parentales más la heterosis esperada.`;
  
  const f1Radar = calculateF1Radar(A.radar, B.radar, direct ? 12 : 8);

  document.querySelector("#resultPanel").innerHTML = `
    <div class="result-head">
      <div>
        <span class="eyebrow">RESULTADO F1 (TEÓRICO)</span>
        <h3>1/2 ${A.name.split(" (")[0]} × 1/2 ${B.name.split(" (")[0]}</h3>
      </div>
      <div class="f1-badges">
        <span class="f1-badge">🧬 50/50</span>
        ${direct ? '<span class="f1-badge direct">✓ F1 Documentado</span>' : ''}
      </div>
    </div>
    
    <div class="genetics-viz">
      <div class="mix-labels">
        <span>${A.icon} 50% ${A.name.split(" (")[0]}</span>
        <span>${B.icon} 50% ${B.name.split(" (")[0]}</span>
      </div>
      <div class="mix-bar">
        <div class="mix-a"></div>
        <div class="mix-b"></div>
      </div>
    </div>

    <div class="data-grid">
      <div class="data-card">
        <h4>Heterosis Esperada</h4>
        <div class="heterosis-meter">
          <div class="meter-fill" style="width: ${direct ? '85%' : '70%'}"></div>
        </div>
        <p>Especialmente en rasgos como: <strong>${A.traits[0]}</strong> y <strong>${B.traits[1] || B.traits[0]}</strong>.</p>
      </div>
      <div class="data-card">
        <h4>Complementariedad</h4>
        <p>Se espera combinar la <strong>${A.role.toLowerCase()}</strong> del parental A con la <strong>${B.role.toLowerCase()}</strong> del parental B.</p>
      </div>
    </div>

    <div class="radar-container">
      <h4>Perfil Fenotípico F1 Estimado</h4>
      <div class="radar-bars">
        ${['Crecimiento', 'Producción Leche', 'Adaptación Trópico', 'Fertilidad', 'Resistencia Enfermedades', 'Calidad de Carne'].map((label, idx) => `
          <div class="bar-row">
            <span class="bar-label">${label}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${f1Radar[idx]}%"></div>
            </div>
            <span class="bar-val">${f1Radar[idx]}/100</span>
          </div>
        `).join('')}
      </div>
      <p class="chart-note">Basado en promedio parental + efecto de vigor híbrido estimado.</p>
    </div>

    <div class="notice conclusion-notice">
      <span>📚</span>
      <div>
        <strong>Conclusión del Avance:</strong><br>
        ${extra}
      </div>
    </div>
  `;
}

function renderConcepts() {
  document.querySelector("#conceptsGrid").innerHTML = concepts.map(c => `
    <div class="concept-card">
      <div class="concept-icon">${c.icon}</div>
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>
  `).join("");
  
  document.querySelector("#glossaryGrid").innerHTML = glossary.map(g => `
    <div class="glossary-item">
      <dt>${g.term}</dt>
      <dd>${g.def}</dd>
    </div>
  `).join("");
}

function renderSources() {
  document.querySelector("#sourceList").innerHTML = sources.map((s, i) => `
    <article class="source">
      <div class="source-num">${i + 1}</div>
      <div>
        <h4>${s[0]}</h4>
        <p>${s[1]} · <i>${s[2]}</i></p>
      </div>
      <a href="${s[3]}" target="_blank" rel="noopener noreferrer" class="btn-source">Ver fuente ↗</a>
    </article>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderBreeds();
  renderTable();
  renderCrosses();
  populateSelectors();
  renderConcepts();
  renderSources();
  
  document.querySelector("#simulateBtn").addEventListener("click", simulate);
  
  document.querySelector("#menuBtn").addEventListener("click", () => {
    const nav = document.querySelector("#nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
  
  document.querySelectorAll("#nav a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        document.querySelector("#nav").style.display = "none";
      }
    });
  });
  
  simulate();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
});
