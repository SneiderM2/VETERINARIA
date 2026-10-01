const breeds = {
  bon: {
    name:"BON (Blanco Orejinegro)", icon:"🐄", type:"Bos taurus criollo",
    role:"Base genética colombiana",
    desc:"Raza criolla colombiana utilizada en el proyecto como parental por su adaptación y por la información genética disponible en hatos nacionales.",
    traits:["Crecimiento","Fertilidad","Adaptación"],
    note:"El avance reporta heredabilidades y variables de crecimiento y reproducción para BON."
  },
  angus: {
    name:"Angus", icon:"🐂", type:"Bos taurus",
    role:"Carne y crecimiento",
    desc:"Raza de carne empleada como componente parental para complementar características productivas y de crecimiento.",
    traits:["Crecimiento","Canal","Productividad"],
    note:"Las fuentes del avance aportan información de crecimiento, fertilidad, peso adulto y características de canal."
  },
  holstein: {
    name:"Holstein", icon:"🐄", type:"Bos taurus",
    role:"Producción de leche",
    desc:"Raza lechera utilizada para estudiar el cruce con BON, especialmente producción, composición y persistencia de lactancia.",
    traits:["Leche","Proteína","Persistencia"],
    note:"El avance incluye información del parental y también un estudio directamente relacionado con BON × Holstein."
  },
  brahman: {
    name:"Brahman", icon:"🐃", type:"Bos indicus",
    role:"Adaptación al trópico",
    desc:"Raza cebuína utilizada como componente de adaptación, rusticidad y desempeño bajo condiciones de trópico.",
    traits:["Adaptación","Eficiencia","Crecimiento"],
    note:"Existe en el avance una fuente directamente relacionada con el desempeño productivo del F1 BON × Brahman."
  },
  simmental: {
    name:"Simmental", icon:"🐮", type:"Bos taurus",
    role:"Doble propósito",
    desc:"Raza adicional incorporada como referencia educativa. Su inclusión permite comparar un cruce que no aparece como resultado directo en la bibliografía del avance.",
    traits:["Carne","Leche","Crecimiento"],
    note:"Para este cruce el simulador muestra una estimación didáctica, no un resultado experimental."
  },
  hereford: {
    name:"Hereford", icon:"🐮", type:"Bos taurus",
    role:"Producción de carne",
    desc:"Raza de carne usada como referencia complementaria para entender la combinación de características productivas.",
    traits:["Carne","Crecimiento","Fertilidad"],
    note:"El avance menciona Angus × Hereford en una de sus fuentes, pero no presenta un F1 BON × Hereford."
  }
};

const crosses = [
  {a:"bon",b:"angus", title:"BON × Angus", goal:"Combinar la base criolla colombiana con características productivas de Angus.", direct:false,
   result:"El avance usa datos de los parentales BON y Angus para plantear el modelo; no presenta un resultado F1 directo."},
  {a:"bon",b:"holstein", title:"BON × Holstein", goal:"Explorar producción y composición de leche junto con características del BON.", direct:true,
   result:"El estudio citado en el avance reporta promedios de 5492,6 ± 1027,2 kg/lactación; 177,1 ± 29,5 kg de proteína; 215,1 ± 37,1 kg de grasa; 110,9 ± 55,4 días abiertos. También reporta que el intervalo entre partos fue 57% mayor en BON × Holstein."},
  {a:"bon",b:"brahman", title:"BON × Brahman", goal:"Combinar la adaptación del BON con características productivas del componente Brahman.", direct:true,
   result:"Una fuente del avance trabajó con 9 bovinos BON × Brahman, con peso inicial de 180 ± 5,0 kg, evaluando ganancia de peso, consumo, eficiencia y conversión en pastoreo de Brachiaria spp."}
];

const sources = [
["Ramírez-Toro et al., 2020","BON; crecimiento y parámetros genéticos","Translational Animal Science","https://doi.org/10.1093/tas/txaa174"],
["Ramírez-Toro et al., 2021","BON; selección genética y crecimiento/reproducción","Translational Animal Science","https://doi.org/10.1093/tas/txab133"],
["Pardo, Elzo, Gama & Melucci, 2020","Angus; crecimiento, fertilidad y productividad","Livestock Science","https://doi.org/10.1016/j.livsci.2020.103952"],
["Herd & Oddy, 2023","Angus; peso adulto, consumo y eficiencia","Animal Production Science","https://doi.org/10.1071/AN22342"],
["Pauling et al., 2023","Angus; crecimiento y características de canal","Journal of Animal Science","https://pmc.ncbi.nlm.nih.gov/articles/PMC10563144/"],
["Caivio-Nasner et al., 2021","BON; reproducción","Semina: Ciências Agrárias","https://doi.org/10.5433/1679-0359.2021v42n4p2523"],
["Hernández-Herrera, Rincón-Flórez & Pulido-Hoyos, 2024","BON; genética de proteínas lácteas","Revista de Ciências Agroveterinárias","https://doi.org/10.5965/223811712312024117"],
["Trejo-Casanova et al., 2023/2025","Holstein; producción y composición de leche","Acta Agronómica","https://doi.org/10.15446/acag.v72n1.97481"],
["Cardona-Cifuentes et al., 2021","Holstein; persistencia de lactancia","Tropical Animal Health and Production","https://doi.org/10.1007/s11250-021-02611-8"],
["Giraldo, López-Herrera & Ruiz-Cortés, 2025","BON × Holstein; producción y reproducción","Revista Colombiana de Ciencias Pecuarias","10.17533/udea.rccp.v38n1a2"],
["Londoño-Gil et al., 2022","BON; crecimiento","Tropical Animal Health and Production","10.1007/s11250-022-03211-w"],
["Correa-García, Campos-Gaona & Flórez-Díaz, 2022","BON; adaptación fisiológica","Revista Facultad Nacional de Agronomía Medellín","https://doi.org/10.15446/rfnam.v75n2.95718"],
["Riveros-Pinilla et al., 2022","BON y Brahman; reproducción y reserva ovárica","Revista de Investigaciones Veterinarias del Perú","https://doi.org/10.15381/rivep.v33i4.21000"],
["Ramírez-Restrepo et al., 2023","Brahman; crecimiento, eficiencia y ambiente","Frontiers in Animal Science","https://doi.org/10.3389/fanim.2023.1103826"],
["Navarro-Ortiz & Roa-Vega, 2024","BON × Brahman; respuesta productiva y metabólica","Sistemas de Producción Agroecológicos / Universidad de los Llanos","https://doi.org/10.22579/22484817.1011"]
];

function renderBreeds(){
  const grid=document.querySelector("#breedGrid");
  grid.innerHTML=Object.entries(breeds).map(([id,b])=>`
    <article class="card">
      <div class="breed-icon">${b.icon}</div>
      <h3>${b.name}</h3>
      <span class="tag">${b.type}</span>
      <p><b>${b.role}</b></p>
      <p>${b.desc}</p>
      <ul>${b.traits.map(t=>`<li>${t}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderCrosses(){
  document.querySelector("#crossGrid").innerHTML=crosses.map(c=>`
    <article class="cross">
      <div class="cross-code">${c.title}</div>
      <h3>${breeds[c.a].name.split(" (")[0]} + ${breeds[c.b].name.split(" (")[0]}</h3>
      <p>${c.goal}</p>
      <div class="result">${c.result}</div>
      <span class="direct">${c.direct ? "✓ F1 documentado en el avance" : "• Modelo con información parental"}</span>
    </article>`).join("");
}

function populateSelectors(){
  const opts=Object.entries(breeds).map(([id,b])=>`<option value="${id}">${b.name}</option>`).join("");
  document.querySelector("#parentA").innerHTML=opts;
  document.querySelector("#parentB").innerHTML=opts;
  document.querySelector("#parentA").value="bon";
  document.querySelector("#parentB").value="angus";
}

function getCross(a,b){
  return crosses.find(c=>(c.a===a&&c.b===b)||(c.a===b&&c.b===a));
}

function simulate(){
  const a=document.querySelector("#parentA").value, b=document.querySelector("#parentB").value;
  const A=breeds[a], B=breeds[b], direct=getCross(a,b);
  let extra = direct ? direct.result : `No se encontró en el avance un resultado F1 directo para ${A.name} × ${B.name}. Por ello, la visualización se interpreta como una aproximación educativa basada en los parentales.`;
  document.querySelector("#resultPanel").innerHTML=`
    <div class="result-head">
      <div><span class="eyebrow">RESULTADO TEÓRICO</span><h3>F1 ${A.name.split(" (")[0]} × ${B.name.split(" (")[0]}</h3></div>
      <span class="f1-badge">50% + 50%</span>
    </div>
    <div><div style="display:flex;justify-content:space-between;font-size:.78rem"><b>${A.name.split(" (")[0]}</b><b>${B.name.split(" (")[0]}</b></div>
    <div class="mix"><span class="mix-a" style="width:50%"></span><span class="mix-b" style="width:50%"></span></div></div>
    <div class="trait-grid">
      <div class="trait"><b>${A.traits[0]} + ${B.traits[0]}</b><span>Combinación de componentes parentales.</span></div>
      <div class="trait"><b>${A.traits[1]} + ${B.traits[1]}</b><span>Puede variar entre individuos.</span></div>
      <div class="trait"><b>${A.traits[2]} + ${B.traits[2]}</b><span>Depende de genética y ambiente.</span></div>
    </div>
    <div class="notice" style="margin:18px 0 0;padding:13px;font-size:.8rem"><span>📚</span><div><b>Datos del avance:</b> ${extra}</div></div>
    <p style="font-size:.75rem;color:#69756d;margin-top:14px"><b>Nota genética:</b> 50/50 describe la proporción de ascendencia esperada en una F1, no significa que cada rasgo tenga exactamente 50% de expresión.</p>`;
}

function renderSources(){
  document.querySelector("#sourceList").innerHTML=sources.map((s,i)=>`
    <article class="source">
      <div class="source-num">${i+1}</div>
      <div><h4>${s[0]}</h4><p>${s[1]} · ${s[2]}</p></div>
      <a href="${s[3]}" target="_blank" rel="noopener noreferrer">Abrir fuente ↗</a>
    </article>`).join("");
}

document.addEventListener("DOMContentLoaded",()=>{
  renderBreeds(); renderCrosses(); populateSelectors(); renderSources();
  document.querySelector("#simulateBtn").addEventListener("click",simulate);
  document.querySelector("#menuBtn").addEventListener("click",()=>{
    const nav=document.querySelector("#nav"); nav.style.display=nav.style.display==="flex"?"none":"flex";
  });
  document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=900)document.querySelector("#nav").style.display="none"}));
  simulate();

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").catch(()=>{});
  }
});
