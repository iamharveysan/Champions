// script.js
document.addEventListener("DOMContentLoaded", () => {
  const equiposBase = [
    { id: "liverpool", nombre: "Liverpool", pais: "Inglaterra", perfil: "presión alta", razon: "Tradición europea y ritmo competitivo." },
    { id: "arsenal", nombre: "Arsenal", pais: "Inglaterra", perfil: "equilibrio moderno", razon: "Proyecto sólido, ordenado y ambicioso." },
    { id: "man-city", nombre: "Manchester City", pais: "Inglaterra", perfil: "control del juego", razon: "Posesión, estructura y mucha calidad técnica." },
    { id: "chelsea", nombre: "Chelsea", pais: "Inglaterra", perfil: "plantilla profunda", razon: "Equipo con recursos y margen de crecimiento." },
    { id: "tottenham", nombre: "Tottenham", pais: "Inglaterra", perfil: "verticalidad", razon: "Partidos abiertos y transiciones rápidas." },
    { id: "newcastle", nombre: "Newcastle United", pais: "Inglaterra", perfil: "intensidad física", razon: "Energía, presión y sensación de ascenso." },

    { id: "napoli", nombre: "Napoli", pais: "Italia", perfil: "ataque dinámico", razon: "Equipo intenso, ofensivo y emocionante." },
    { id: "inter", nombre: "Inter", pais: "Italia", perfil: "solidez táctica", razon: "Orden competitivo y experiencia internacional." },
    { id: "atalanta", nombre: "Atalanta", pais: "Italia", perfil: "valentía ofensiva", razon: "Estilo agresivo y poco conservador." },
    { id: "juventus", nombre: "Juventus", pais: "Italia", perfil: "peso histórico", razon: "Nombre grande, tradición y mentalidad competitiva." },

    { id: "barcelona", nombre: "Barcelona", pais: "España", perfil: "identidad técnica", razon: "Talento, posesión y enorme atractivo global." },
    { id: "real-madrid", nombre: "Real Madrid", pais: "España", perfil: "ADN ganador", razon: "Historia europea y sensación constante de grandeza." },
    { id: "atleti", nombre: "Atlético de Madrid", pais: "España", perfil: "intensidad táctica", razon: "Carácter, resistencia y competitividad." },
    { id: "athletic", nombre: "Athletic Club", pais: "España", perfil: "identidad fuerte", razon: "Proyecto singular con mucha personalidad." },
    { id: "villarreal", nombre: "Villarreal", pais: "España", perfil: "equipo incómodo", razon: "Bloque ordenado que suele competir bien." },

    { id: "bayern", nombre: "Bayern München", pais: "Alemania", perfil: "potencia total", razon: "Pegada, experiencia y aspiración máxima." },
    { id: "leverkusen", nombre: "Bayer Leverkusen", pais: "Alemania", perfil: "fútbol fluido", razon: "Proyecto reciente muy atractivo." },
    { id: "frankfurt", nombre: "Eintracht Frankfurt", pais: "Alemania", perfil: "energía colectiva", razon: "Equipo intenso con empuje emocional." },
    { id: "dortmund", nombre: "Borussia Dortmund", pais: "Alemania", perfil: "juventud y ritmo", razon: "Talento joven y ambiente competitivo." },

    { id: "psg", nombre: "Paris Saint-Germain", pais: "Francia", perfil: "talento ofensivo", razon: "Plantilla brillante y mucha capacidad de desequilibrio." },
    { id: "marseille", nombre: "Marseille", pais: "Francia", perfil: "pasión competitiva", razon: "Contexto intenso y club con personalidad." },
    { id: "monaco", nombre: "Monaco", pais: "Francia", perfil: "proyección joven", razon: "Talento, velocidad y margen de crecimiento." },

    { id: "psv", nombre: "PSV", pais: "Países Bajos", perfil: "ataque vertical", razon: "Estilo ofensivo y tradición formativa." },
    { id: "ajax", nombre: "Ajax", pais: "Países Bajos", perfil: "escuela histórica", razon: "Peso formativo e identidad futbolística." },

    { id: "benfica", nombre: "Benfica", pais: "Portugal", perfil: "tradición continental", razon: "Gran historia y cultura competitiva." },
    { id: "sporting", nombre: "Sporting CP", pais: "Portugal", perfil: "proyecto equilibrado", razon: "Equipo serio con buena base táctica." },

    { id: "brugge", nombre: "Club Brugge", pais: "Bélgica", perfil: "orden y ritmo", razon: "Competidor estable y bien trabajado." },
    { id: "union-sg", nombre: "Union Saint-Gilloise", pais: "Bélgica", perfil: "historia emergente", razon: "Club atractivo para quien valora sorpresas." },

    { id: "galatasaray", nombre: "Galatasaray", pais: "Turquía", perfil: "ambiente caliente", razon: "Peso emocional y gran energía competitiva." },
    { id: "slavia", nombre: "Slavia Praha", pais: "Chequia", perfil: "disciplina táctica", razon: "Equipo ordenado y combativo." },
    { id: "bodo", nombre: "Bodø/Glimt", pais: "Noruega", perfil: "sorpresa valiente", razon: "Ideal si te gustan las historias inesperadas." },
    { id: "olympiacos", nombre: "Olympiacos", pais: "Grecia", perfil: "carácter competitivo", razon: "Club con tradición regional y personalidad." },
    { id: "copenhagen", nombre: "Copenhagen", pais: "Dinamarca", perfil: "equilibrio nórdico", razon: "Bloque serio, estable y disciplinado." },
    { id: "pafos", nombre: "Pafos", pais: "Chipre", perfil: "outsider", razon: "Equipo llamativo para un ranking más original." },
    { id: "qarabag", nombre: "Qarabağ", pais: "Azerbaiyán", perfil: "resistencia", razon: "Proyecto persistente y competitivo." },
    { id: "kairat", nombre: "Kairat Almaty", pais: "Kazajistán", perfil: "curiosidad competitiva", razon: "Opción distinta para quien busca novedad." }
  ];

  const objetivos = {
    seguir: {
      label: "Equipo que más me gustaría seguir",
      pregunta: "Si tuvieras que seguir un equipo durante toda la Champions, ¿cuál elegirías?"
    },
    espectaculo: {
      label: "Equipo más atractivo para ver",
      pregunta: "Si priorizas emoción, ritmo y partidos entretenidos, ¿cuál eliges?"
    },
    historia: {
      label: "Equipo con más peso e historia",
      pregunta: "Si priorizas tradición, prestigio y peso europeo, ¿cuál eliges?"
    },
    sorpresa: {
      label: "Equipo sorpresa que apoyaría",
      pregunta: "Si quisieras apoyar una historia sorpresa o menos obvia, ¿cuál eliges?"
    },
    proyecto: {
      label: "Equipo con proyecto más sólido",
      pregunta: "Si priorizas proceso, equilibrio y construcción deportiva, ¿cuál eliges?"
    }
  };

  const STORAGE_KEY = "champions-mash-2026";

  const objetivoSelect = document.getElementById("objetivo");
  const preguntaObjetivo = document.getElementById("preguntaObjetivo");
  const progreso = document.getElementById("progreso");
  const comparisonArea = document.getElementById("comparisonArea");
  const rankingList = document.getElementById("rankingList");
  const topRecommendation = document.getElementById("topRecommendation");
  const historyList = document.getElementById("historyList");
  const skipBtn = document.getElementById("skipBtn");
  const resetBtn = document.getElementById("resetBtn");

  function crearEquipoConStats(equipo, previo = {}) {
    return {
      ...equipo,
      victorias: Number(previo.victorias) || 0,
      derrotas: Number(previo.derrotas) || 0,
      apariciones: Number(previo.apariciones) || 0
    };
  }

  function crearEstadoInicial() {
    return {
      objetivo: "seguir",
      comparaciones: 0,
      historial: [],
      currentPair: [],
      equipos: equiposBase.map((equipo) => crearEquipoConStats(equipo))
    };
  }

  function cargarEstado() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return crearEstadoInicial();

      const parsed = JSON.parse(raw);
      const previos = Array.isArray(parsed.equipos) ? parsed.equipos : [];
      const mapaPrevio = new Map(previos.map((e) => [e.id, e]));

      return {
        objetivo: objetivos[parsed.objetivo] ? parsed.objetivo : "seguir",
        comparaciones: Number(parsed.comparaciones) || 0,
        historial: Array.isArray(parsed.historial) ? parsed.historial.slice(0, 12) : [],
        currentPair: [],
        equipos: equiposBase.map((equipo) =>
          crearEquipoConStats(equipo, mapaPrevio.get(equipo.id))
        )
      };
    } catch (error) {
      return crearEstadoInicial();
    }
  }

  const state = cargarEstado();

  function guardarEstado() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        objetivo: state.objetivo,
        comparaciones: state.comparaciones,
        historial: state.historial,
        equipos: state.equipos
      })
    );
  }

  function getEquipo(id) {
    return state.equipos.find((equipo) => equipo.id === id);
  }

  function tasaVictoria(equipo) {
    if (!equipo.apariciones) return 0;
    return Math.round((equipo.victorias / equipo.apariciones) * 100);
  }

  function balance(equipo) {
    return equipo.victorias - equipo.derrotas;
  }

  function compararEquipos(a, b) {
    const aEvaluado = a.apariciones > 0 ? 1 : 0;
    const bEvaluado = b.apariciones > 0 ? 1 : 0;

    if (bEvaluado !== aEvaluado) return bEvaluado - aEvaluado;
    if (tasaVictoria(b) !== tasaVictoria(a)) return tasaVictoria(b) - tasaVictoria(a);
    if (b.victorias !== a.victorias) return b.victorias - a.victorias;
    if (balance(b) !== balance(a)) return balance(b) - balance(a);
    if (a.derrotas !== b.derrotas) return a.derrotas - b.derrotas;
    return a.nombre.localeCompare(b.nombre, "es");
  }

  function makePairKey(id1, id2) {
    return [id1, id2].sort().join("|");
  }

  function pickPairFromPool(pool, recentKeys, strict = true) {
    if (pool.length < 2) return null;

    for (let intento = 0; intento < 120; intento++) {
      const first = pool[Math.floor(Math.random() * pool.length)];
      let second = pool[Math.floor(Math.random() * pool.length)];

      while (second.id === first.id) {
        second = pool[Math.floor(Math.random() * pool.length)];
      }

      const key = makePairKey(first.id, second.id);
      const currentKey =
        state.currentPair.length === 2
          ? makePairKey(state.currentPair[0], state.currentPair[1])
          : null;

      if (strict && (recentKeys.includes(key) || key === currentKey)) {
        continue;
      }

      return [first.id, second.id];
    }

    return null;
  }

  function elegirNuevoPar() {
    const recentKeys = state.historial.slice(0, 8).map((item) => item.pairKey);

    const menosVistos = [...state.equipos]
      .sort((a, b) => a.apariciones - b.apariciones)
      .slice(0, Math.min(12, state.equipos.length));

    let par = pickPairFromPool(menosVistos, recentKeys, true);

    if (!par) {
      par = pickPairFromPool(state.equipos, recentKeys, true);
    }

    if (!par) {
      par = pickPairFromPool(state.equipos, recentKeys, false);
    }

    state.currentPair = par || [state.equipos[0].id, state.equipos[1].id];
  }

  function renderPregunta() {
    objetivoSelect.value = state.objetivo;
    preguntaObjetivo.textContent = objetivos[state.objetivo].pregunta;
  }

  function renderProgreso() {
    const evaluados = state.equipos.filter((equipo) => equipo.apariciones > 0).length;
    const cobertura = Math.round((evaluados / state.equipos.length) * 100);

    let mensaje = "Ranking inicial.";
    if (state.comparaciones >= 15 && state.comparaciones < 30) {
      mensaje = "El ranking ya empieza a estabilizarse.";
    } else if (state.comparaciones >= 30) {
      mensaje = "Ya tienes un ranking bastante consistente.";
    }

    progreso.innerHTML = `
      Comparaciones realizadas: <strong>${state.comparaciones}</strong><br>
      Equipos que ya aparecieron: <strong>${evaluados}/36</strong><br>
      Cobertura del dataset: <strong>${cobertura}%</strong><br>
      ${mensaje}
    `;
  }

  function cardTemplate(equipo) {
    return `
      <article class="team-card">
        <div class="team-header">
          <div>
            <h3 class="team-name">${equipo.nombre}</h3>
            <p class="team-country">${equipo.pais}</p>
          </div>
        </div>

        <div class="badge-row">
          <span class="badge">${equipo.perfil}</span>
          <span class="badge">${objetivos[state.objetivo].label}</span>
        </div>

        <p class="team-reason">${equipo.razon}</p>

        <div class="team-stats">
          <div class="stat-box">
            <strong>${equipo.victorias}</strong>
            <span>Victorias</span>
          </div>
          <div class="stat-box">
            <strong>${equipo.derrotas}</strong>
            <span>Derrotas</span>
          </div>
          <div class="stat-box">
            <strong>${tasaVictoria(equipo)}%</strong>
            <span>Tasa de éxito</span>
          </div>
        </div>

        <button class="pick-btn" data-team="${equipo.id}">
          Elijo ${equipo.nombre}
        </button>
      </article>
    `;
  }

  function renderComparacion() {
    if (state.currentPair.length !== 2) {
      elegirNuevoPar();
    }

    const [idA, idB] = state.currentPair;
    const equipoA = getEquipo(idA);
    const equipoB = getEquipo(idB);

    comparisonArea.innerHTML = `
      ${cardTemplate(equipoA)}
      <div class="vs-pill">VS</div>
      ${cardTemplate(equipoB)}
    `;
  }

  function renderTopRecommendation(sorted) {
    const top = sorted.find((equipo) => equipo.apariciones > 0);

    if (!top) {
      topRecommendation.innerHTML = `
        <h3>Recomendación provisional</h3>
        <p>Aún no hay suficiente información. Empieza comparando equipos.</p>
      `;
      return;
    }

    topRecommendation.innerHTML = `
      <h3>Recomendación provisional</h3>
      <div class="reco-team">${top.nombre}</div>
      <p>
        Lidera tu ranking con ${top.victorias} victorias, ${top.derrotas} derrotas
        y una tasa de éxito de ${tasaVictoria(top)}%.
      </p>
    `;
  }

  function renderRanking() {
    const sorted = [...state.equipos].sort(compararEquipos);

    renderTopRecommendation(sorted);

    rankingList.innerHTML = sorted
      .map((equipo, index) => {
        return `
          <div class="ranking-row ${index === 0 ? "leader" : ""}">
            <div class="rank-number">#${index + 1}</div>

            <div>
              <strong>${equipo.nombre}</strong>
              <small>${equipo.pais} · ${equipo.perfil}</small>
            </div>

            <div class="metric-box">
              <strong>${tasaVictoria(equipo)}%</strong>
              <span>${equipo.victorias}V / ${equipo.derrotas}D</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderHistorial() {
    if (!state.historial.length) {
      historyList.innerHTML = `<li class="empty-state">Todavía no has tomado decisiones.</li>`;
      return;
    }

    historyList.innerHTML = state.historial
      .map(
        (item) => `
          <li class="history-item">
            <strong>${item.ganador}</strong> superó a <strong>${item.perdedor}</strong><br>
            Criterio: ${objetivos[item.objetivo]?.label || item.objetivo}<br>
            <small>${item.fecha}</small>
          </li>
        `
      )
      .join("");
  }

  function renderAll() {
    renderPregunta();
    renderProgreso();
    renderComparacion();
    renderRanking();
    renderHistorial();
    guardarEstado();
  }

  function registrarEleccion(ganadorId) {
    const [idA, idB] = state.currentPair;
    const perdedorId = ganadorId === idA ? idB : idA;

    const ganador = getEquipo(ganadorId);
    const perdedor = getEquipo(perdedorId);

    ganador.victorias += 1;
    ganador.apariciones += 1;

    perdedor.derrotas += 1;
    perdedor.apariciones += 1;

    state.comparaciones += 1;

    state.historial.unshift({
      ganador: ganador.nombre,
      perdedor: perdedor.nombre,
      objetivo: state.objetivo,
      fecha: new Date().toLocaleString("es-CO"),
      pairKey: makePairKey(ganadorId, perdedorId)
    });

    state.historial = state.historial.slice(0, 12);
    state.currentPair = [];
    renderAll();
  }

  objetivoSelect.addEventListener("change", (event) => {
    state.objetivo = event.target.value;
    renderAll();
  });

  comparisonArea.addEventListener("click", (event) => {
    const button = event.target.closest("[data-team]");
    if (!button) return;
    registrarEleccion(button.dataset.team);
  });

  skipBtn.addEventListener("click", () => {
    state.currentPair = [];
    renderAll();
  });

  resetBtn.addEventListener("click", () => {
    const confirmar = confirm("¿Seguro que quieres borrar el ranking y comenzar de cero?");
    if (!confirmar) return;

    localStorage.removeItem(STORAGE_KEY);
    const limpio = crearEstadoInicial();

    state.objetivo = limpio.objetivo;
    state.comparaciones = limpio.comparaciones;
    state.historial = limpio.historial;
    state.currentPair = limpio.currentPair;
    state.equipos = limpio.equipos;

    renderAll();
  });

  renderAll();
});
