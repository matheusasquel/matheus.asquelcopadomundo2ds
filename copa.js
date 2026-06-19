/* ===================================================================
   COPA DO MUNDO — HISTÓRIA
   Dados e interatividade
   =================================================================== */

/* ---------- DADOS: 22 edições disputadas + 2 canceladas ---------- */
const editions = [
  {
    year:1930, decade:1930, host:"Uruguai", hostFlag:"🇺🇾",
    champion:"Uruguai", championFlag:"🇺🇾", score:"4–2", runnerUp:"Argentina",
    third:"Estados Unidos", fourth:"Iugoslávia",
    teams:13, goals:70, yellow:null, red:1, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Não existiam cartões — as expulsões eram comunicadas apenas verbalmente. Curiosamente, a final foi disputada com duas bolas diferentes: uma escolhida pela Argentina no primeiro tempo, outra pelo Uruguai no segundo."
  },
  {
    year:1934, decade:1930, host:"Itália", hostFlag:"🇮🇹",
    champion:"Itália", championFlag:"🇮🇹", score:"2–1 (prorrogação)", runnerUp:"Tchecoslováquia",
    third:"Alemanha", thirdScore:"3–2", fourth:"Áustria",
    teams:16, goals:70, yellow:null, red:1, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Jogo extremamente físico e disputado sob forte pressão do regime político italiano da época — mesmo assim, não houve expulsões na final."
  },
  {
    year:1938, decade:1930, host:"França", hostFlag:"🇫🇷",
    champion:"Itália", championFlag:"🇮🇹", score:"4–2", runnerUp:"Hungria",
    third:"Brasil", thirdScore:"4–2", fourth:"Suécia",
    teams:15, goals:84, yellow:null, red:4, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Uma partida limpa para os padrões da época, decidida em campo pela ótima seleção italiana comandada por Vittorio Pozzo."
  },
  {
    year:1942, decade:1940, cancelled:true,
    note:"Edição cancelada em razão da Segunda Guerra Mundial."
  },
  {
    year:1946, decade:1940, cancelled:true,
    note:"Edição cancelada em razão da Segunda Guerra Mundial."
  },
  {
    year:1950, decade:1950, host:"Brasil", hostFlag:"🇧🇷",
    champion:"Uruguai", championFlag:"🇺🇾", score:"2–1", runnerUp:"Brasil",
    third:"Suécia", thirdScore:"3–1", fourth:"Espanha",
    teams:13, goals:88, yellow:null, red:0,
    penalty:"Não",
    note:"O célebre \"Maracanaço\": apesar do drama em campo, a partida teve pouquíssimas faltas e foi considerada bastante leal pelas duas seleções."
  },
  {
    year:1954, decade:1950, host:"Suíça", hostFlag:"🇨🇭",
    champion:"Alemanha Ocidental", championFlag:"🇩🇪", score:"3–2", runnerUp:"Hungria",
    third:"Áustria", thirdScore:"3–1", fourth:"Uruguai",
    teams:16, goals:140, yellow:null, red:3, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Conhecida como \"O Milagre de Berna\". Disputada sob forte chuva e muita lama, teve os húngaros reclamando bastante de um gol anulado por impedimento no fim do jogo."
  },
  {
    year:1958, decade:1950, host:"Suécia", hostFlag:"🇸🇪",
    champion:"Brasil", championFlag:"🇧🇷", score:"5–2", runnerUp:"Suécia",
    third:"França", thirdScore:"6–3", fourth:"Alemanha Ocidental",
    teams:16, goals:126, yellow:null, red:3, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Uma das finais mais limpas e bonitas da história. Pelé, com apenas 17 anos, encantou o mundo sem sofrer violência desmedida em campo."
  },
  {
    year:1962, decade:1960, host:"Chile", hostFlag:"🇨🇱",
    champion:"Brasil", championFlag:"🇧🇷", score:"3–1", runnerUp:"Tchecoslováquia",
    third:"Chile", thirdScore:"1–0", fourth:"Iugoslávia",
    teams:16, goals:89, yellow:null, red:6, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Jogo tenso, mas o Brasil controlou bem as investidas adversárias — mesmo sem Pelé, lesionado ainda no início do torneio."
  },
  {
    year:1966, decade:1960, host:"Inglaterra", hostFlag:"🏴",
    champion:"Inglaterra", championFlag:"🏴", score:"4–2 (prorrogação)", runnerUp:"Alemanha Ocidental",
    third:"Portugal", thirdScore:"2–1", fourth:"União Soviética",
    teams:16, goals:89, yellow:null, red:5, redNote:"(expulsões verbais)",
    penalty:"Não",
    note:"Final marcada pelo polêmico \"gol fantasma\" de Geoff Hurst. Houve reclamações acaloradas, mas nenhuma punição grave em campo."
  },
  {
    year:1970, decade:1970, host:"México", hostFlag:"🇲🇽",
    champion:"Brasil", championFlag:"🇧🇷", score:"4–1", runnerUp:"Itália",
    third:"Alemanha Ocidental", thirdScore:"1–0", fourth:"Uruguai",
    teams:16, goals:95, yellow:33, red:0,
    penalty:"Não",
    note:"A primeira Copa a usar cartões físicos. A final teve apenas dois amarelos: Burgnich, pela Itália, e Rivelino, pelo Brasil."
  },
  {
    year:1974, decade:1970, host:"Alemanha Ocidental", hostFlag:"🇩🇪",
    champion:"Alemanha Ocidental", championFlag:"🇩🇪", score:"2–1", runnerUp:"Países Baixos",
    third:"Polônia", thirdScore:"1–0", fourth:"Brasil",
    teams:16, goals:97, yellow:82, red:5,
    penalty:"Sim, dois — logo no 1º minuto, pênalti para a Holanda (Neeskens); aos 25, pênalti para a Alemanha (Breitner).",
    note:"Jogo tenso, com quatro cartões amarelos distribuídos: três para os holandeses e um para os alemães."
  },
  {
    year:1978, decade:1970, host:"Argentina", hostFlag:"🇦🇷",
    champion:"Argentina", championFlag:"🇦🇷", score:"3–1 (prorrogação)", runnerUp:"Países Baixos",
    third:"Brasil", thirdScore:"2–1", fourth:"Itália",
    teams:16, goals:102, yellow:65, red:3,
    penalty:"Não",
    note:"Clima hostil no estádio Monumental de Núñez. Foram quatro cartões amarelos aplicados — três para a Holanda e um para a Argentina."
  },
  {
    year:1982, decade:1980, host:"Espanha", hostFlag:"🇪🇸",
    champion:"Itália", championFlag:"🇮🇹", score:"3–1", runnerUp:"Alemanha Ocidental",
    third:"Polônia", thirdScore:"3–2", fourth:"França",
    teams:24, goals:146, yellow:98, red:5,
    penalty:"Sim — Cabrini, pela Itália, perdeu um pênalti aos 25 minutos do primeiro tempo.",
    note:"Cinco cartões amarelos no total, num jogo muito travado no meio-campo, com marcação implacável sobre os alemães."
  },
  {
    year:1986, decade:1980, host:"México", hostFlag:"🇲🇽",
    champion:"Argentina", championFlag:"🇦🇷", score:"3–2", runnerUp:"Alemanha Ocidental",
    third:"França", thirdScore:"4–2 (prorrogação)", fourth:"Bélgica",
    teams:24, goals:132, yellow:135, red:8,
    penalty:"Não",
    note:"Seis cartões amarelos — quatro para a Argentina, incluindo Maradona, e dois para a Alemanha — um recorde de advertências para a época."
  },
  {
    year:1990, decade:1980, host:"Itália", hostFlag:"🇮🇹",
    champion:"Alemanha Ocidental", championFlag:"🇩🇪", score:"1–0", runnerUp:"Argentina",
    third:"Itália", thirdScore:"2–1", fourth:"Inglaterra",
    teams:24, goals:115, yellow:162, red:16,
    penalty:"Sim — Andreas Brehme garantiu o título alemão num pênalti polêmico aos 40 minutos do segundo tempo.",
    note:"A final mais indisciplinada até então: quatro cartões amarelos e dois vermelhos diretos — Monzón e Dezotti, ambos da Argentina, foram expulsos."
  },
  {
    year:1994, decade:1990, host:"Estados Unidos", hostFlag:"🇺🇸",
    champion:"Brasil", championFlag:"🇧🇷", score:"0–0 (pên. 3–2)", runnerUp:"Itália",
    third:"Suécia", thirdScore:"4–0", fourth:"Bulgária",
    teams:24, goals:141, yellow:235, red:15,
    penalty:"Apenas na disputa por pênaltis, após 0–0 no tempo normal e na prorrogação — Baggio isolou o último.",
    note:"Muita cautela defensiva dos dois lados. Quatro cartões amarelos: Mazinho e Cafu pelo Brasil; Apolloni e Albertini pela Itália."
  },
  {
    year:1998, decade:1990, host:"França", hostFlag:"🇫🇷",
    champion:"França", championFlag:"🇫🇷", score:"3–0", runnerUp:"Brasil",
    third:"Croácia", thirdScore:"2–1", fourth:"Países Baixos",
    teams:32, goals:171, yellow:258, red:22,
    penalty:"Não",
    note:"Jogo nervoso: dois cartões amarelos para o Brasil e um vermelho para o francês Marcel Desailly, expulso por segundo amarelo."
  },
  {
    year:2002, decade:2000, host:"Coreia do Sul e Japão", hostFlag:"🇰🇷🇯🇵",
    champion:"Brasil", championFlag:"🇧🇷", score:"2–0", runnerUp:"Alemanha",
    third:"Turquia", thirdScore:"3–2", fourth:"Coreia do Sul",
    teams:32, goals:161, yellow:272, red:17,
    penalty:"Não",
    note:"O Brasil cometeu 19 faltas e a Alemanha, 21 — mas só dois cartões amarelos foram mostrados: Roque Júnior, pelo Brasil, e Klose, pela Alemanha."
  },
  {
    year:2006, decade:2000, host:"Alemanha", hostFlag:"🇩🇪",
    champion:"Itália", championFlag:"🇮🇹", score:"1–1 (pên. 5–3)", runnerUp:"França",
    third:"Alemanha", thirdScore:"3–1", fourth:"Portugal",
    teams:32, goals:147, yellow:"307 (recorde)", red:"28 (recorde)",
    penalty:"Sim — Zidane abriu o placar de pênalti para a França logo no início do jogo.",
    note:"A final entrou para a história pela cabeçada de Zinedine Zidane em Materazzi, que lhe rendeu um cartão vermelho direto na prorrogação. O jogo teve ainda outras 32 faltas e quatro cartões amarelos."
  },
  {
    year:2010, decade:2010, host:"África do Sul", hostFlag:"🇿🇦",
    champion:"Espanha", championFlag:"🇪🇸", score:"1–0 (prorrogação)", runnerUp:"Países Baixos",
    third:"Alemanha", thirdScore:"3–2", fourth:"Uruguai",
    teams:32, goals:145, yellow:260, red:17,
    penalty:"Não",
    note:"Um recorde absoluto de violência em finais: 47 faltas marcadas, 12 cartões amarelos e um vermelho (Heitinga, da Holanda) — tudo isso já depois da voadora de De Jong em Xabi Alonso."
  },
  {
    year:2014, decade:2010, host:"Brasil", hostFlag:"🇧🇷",
    champion:"Alemanha", championFlag:"🇩🇪", score:"1–0 (prorrogação)", runnerUp:"Argentina",
    third:"Países Baixos", thirdScore:"3–0", fourth:"Brasil",
    teams:32, goals:171, yellow:187, red:10,
    penalty:"Não — embora a Argentina tenha reclamado bastante de um choque entre o goleiro Neuer e Higuaín dentro da área.",
    note:"Partida muito física, com 36 faltas no total e quatro cartões amarelos, dois para cada lado."
  },
  {
    year:2018, decade:2010, host:"Rússia", hostFlag:"🇷🇺",
    champion:"França", championFlag:"🇫🇷", score:"4–2", runnerUp:"Croácia",
    third:"Bélgica", thirdScore:"2–0", fourth:"Inglaterra",
    teams:32, goals:169, yellow:219, red:4,
    penalty:"Sim — gol de pênalti de Antoine Griezmann para a França, confirmado com o auxílio do VAR.",
    note:"Jogo corrido e bastante limpo: apenas 27 faltas combinadas e três cartões amarelos ao longo dos 90 minutos."
  },
  {
    year:2022, decade:2020, host:"Catar", hostFlag:"🇶🇦",
    champion:"Argentina", championFlag:"🇦🇷", score:"3–3 (pên. 4–2)", runnerUp:"França",
    third:"Croácia", thirdScore:"2–1", fourth:"Marrocos",
    teams:32, goals:"172 (recorde)", yellow:223, red:4,
    penalty:"Sim, três durante o próprio jogo: Messi cobrou um para a Argentina no tempo normal, e Mbappé converteu outros dois para a França — um no tempo regulamentar, outro na prorrogação — antes da decisão nos pênaltis máximos.",
    note:"Considerada por muitos a final mais dramática da história: 3 a 3 no tempo normal e na prorrogação, com hat-trick de Mbappé, decidida nos pênaltis para a Argentina."
  }
];

/* ---------- RANKING HISTÓRICO 1930–2022 ---------- */
const ranking = [
  {team:"Brasil",      apps:22, games:114, wins:76, draws:19, losses:19, goals:240},
  {team:"Alemanha",    apps:20, games:112, wins:68, draws:21, losses:23, goals:232},
  {team:"Argentina",   apps:18, games:88,  wins:47, draws:15, losses:26, goals:152},
  {team:"Itália",      apps:18, games:83,  wins:45, draws:21, losses:17, goals:128},
  {team:"França",      apps:16, games:73,  wins:39, draws:14, losses:20, goals:136},
  {team:"Inglaterra",  apps:16, games:74,  wins:32, draws:22, losses:20, goals:104},
  {team:"Espanha",     apps:16, games:67,  wins:31, draws:17, losses:19, goals:108},
  {team:"Holanda",     apps:11, games:55,  wins:30, draws:14, losses:11, goals:96},
  {team:"Uruguai",     apps:14, games:59,  wins:25, draws:13, losses:21, goals:89},
  {team:"Bélgica",     apps:14, games:51,  wins:21, draws:10, losses:20, goals:69}
];

const DECADES = [1930,1940,1950,1960,1970,1980,1990,2000,2010,2020];

/* ===================================================================
   RENDER: cards de edições
   =================================================================== */
function cardChip(kind, value, note){
  if (value === null || value === undefined){
    return `<span>Cartões ${kind === 'yellow' ? 'amarelos' : 'vermelhos'}: não existiam</span>`;
  }
  const label = kind === 'yellow' ? 'Amarelos' : 'Vermelhos';
  const extra = note ? ` <em>${note}</em>` : '';
  return `<span><span class="card-chip ${kind}" aria-hidden="true"></span> ${label}: ${value}${extra}</span>`;
}

function renderEditionCard(ed){
  if (ed.cancelled){
    return `
    <article class="edition-card cancelled reveal" data-decade="${ed.decade}">
      <div class="edition-head">
        <div class="edition-year-host">
          <span class="edition-year">${ed.year}</span>
          <span class="edition-host">Não realizada</span>
        </div>
      </div>
      <div class="edition-result">
        <p>${ed.note}</p>
      </div>
    </article>`;
  }

  const thirdScore = ed.thirdScore ? ` <span class="edition-score">${ed.thirdScore}</span>` : '';

  return `
  <article class="edition-card reveal" data-decade="${ed.decade}">
    <button class="edition-head" aria-expanded="false">
      <div class="edition-year-host">
        <span class="edition-year">${ed.year}</span>
        <span class="edition-host">${ed.hostFlag} ${ed.host}</span>
      </div>
      <span class="edition-toggle-icon" aria-hidden="true">+</span>
    </button>

    <div class="edition-result">
      <div class="edition-champion-row">
        <span class="edition-trophy">🏆</span>
        <span>${ed.championFlag} ${ed.champion}</span>
        <span class="edition-score">${ed.score}</span>
      </div>
      <p class="edition-runner">Vice-campeão: ${ed.runnerUp}</p>
    </div>

    <div class="edition-stats">
      <span>${ed.teams} seleções</span>
      <span>${ed.goals} gols</span>
    </div>

    <div class="edition-detail">
      <div class="edition-detail-inner">
        <dl>
          <dt>3.º lugar</dt><dd>${ed.third}${thirdScore}</dd>
          <dt>4.º lugar</dt><dd>${ed.fourth}</dd>
          <dt>Cartões</dt><dd>${cardChip('yellow', ed.yellow)} &nbsp;·&nbsp; ${cardChip('red', ed.red, ed.redNote)}</dd>
          <dt>Pênalti na final?</dt><dd>${ed.penalty}</dd>
        </dl>
        <p class="edition-note"><strong>Como foi a final:</strong> ${ed.note}</p>
      </div>
    </div>
  </article>`;
}

function renderEditions(){
  const grid = document.getElementById('editionsGrid');
  grid.innerHTML = editions.map(renderEditionCard).join('');

  // accordion toggle
  grid.querySelectorAll('.edition-card:not(.cancelled) .edition-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.edition-card');
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ===================================================================
   FILTROS DE DÉCADA
   =================================================================== */
function decadeLabel(d){
  return d === 2020 ? '2020s*' : `${d}s`;
}

function renderDecadeFilters(){
  const wrap = document.getElementById('decadeFilters');
  const chips = ['<button class="decade-chip active" data-decade="all">Todas</button>']
    .concat(DECADES.map(d => `<button class="decade-chip" data-decade="${d}">${decadeLabel(d)}</button>`));
  wrap.innerHTML = chips.join('');

  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.decade-chip');
    if (!btn) return;
    wrap.querySelectorAll('.decade-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const decade = btn.dataset.decade;
    document.querySelectorAll('#editionsGrid .edition-card').forEach(card => {
      const show = decade === 'all' || card.dataset.decade === decade;
      card.classList.toggle('is-hidden', !show);
    });
  });
}

/* ===================================================================
   DROPDOWN "EDIÇÕES" NO MENU SUPERIOR
   =================================================================== */
function renderDropdown(){
  const wrap = document.getElementById('decadeDropdownGrid');
  wrap.innerHTML = DECADES.map(d => {
    const years = editions.filter(e => e.decade === d && !e.cancelled).map(e => e.year);
    if (!years.length) return '';
    const links = years.map(y => `<li><a href="#edicoes" data-jump-year="${y}">${y}</a></li>`).join('');
    return `<div class="dropdown-decade"><h4>${decadeLabel(d)}</h4><ul>${links}</ul></div>`;
  }).join('');

  wrap.querySelectorAll('a[data-jump-year]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const year = a.dataset.jumpYear;
      closeAllMenus();
      // mostra todas as décadas antes de buscar o card
      document.querySelectorAll('.decade-chip').forEach(c => c.classList.remove('active'));
      document.querySelector('.decade-chip[data-decade="all"]').classList.add('active');
      document.querySelectorAll('#editionsGrid .edition-card').forEach(c => c.classList.remove('is-hidden'));

      const card = [...document.querySelectorAll('.edition-card')].find(c => c.querySelector('.edition-year')?.textContent === year);
      if (card){
        card.classList.add('open');
        card.querySelector('.edition-head')?.setAttribute('aria-expanded','true');
        card.scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  });
}

/* ===================================================================
   RANKING TABLE
   =================================================================== */
let rankingSortKey = null;
let rankingSortDir = 1;

function renderRanking(data){
  const body = document.getElementById('rankingBody');
  body.innerHTML = data.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.team}</td>
      <td>${r.apps}</td>
      <td>${r.games}</td>
      <td>${r.wins}</td>
      <td>${r.draws}</td>
      <td>${r.losses}</td>
      <td>${r.goals}</td>
    </tr>
  `).join('');
}

function setupRankingSort(){
  const keys = ['pos','team','apps','games','wins','draws','losses','goals'];
  document.querySelectorAll('#rankingTable thead th').forEach((th, idx) => {
    th.addEventListener('click', () => {
      const key = keys[idx];
      if (key === 'pos'){
        renderRanking(ranking);
        rankingSortKey = null;
        return;
      }
      if (rankingSortKey === key){
        rankingSortDir *= -1;
      } else {
        rankingSortKey = key;
        rankingSortDir = -1;
      }
      const sorted = [...ranking].sort((a,b) => {
        if (key === 'team') return a.team.localeCompare(b.team) * -rankingSortDir;
        return (a[key] - b[key]) * rankingSortDir;
      });
      renderRanking(sorted);
    });
  });
}

/* ===================================================================
   MENU SUPERIOR — toggle mobile, dropdown, active link, smooth scroll
   =================================================================== */
function closeAllMenus(){
  document.getElementById('primaryNav').classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded','false');
  document.querySelectorAll('.has-dropdown').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded','false');
  });
}

function setupNav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', () => closeAllMenus());
  });

  const dropdownParent = document.querySelector('.has-dropdown');
  const dropdownTrigger = dropdownParent.querySelector('.dropdown-trigger');

  dropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownParent.classList.toggle('open');
    dropdownTrigger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (e) => {
    if (!dropdownParent.contains(e.target)){
      dropdownParent.classList.remove('open');
      dropdownTrigger.setAttribute('aria-expanded','false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllMenus();
  });

  // active link highlighting on scroll
  const sections = ['topo','sobre','trofeu','edicoes','recordes','ranking']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});

  sections.forEach(s => observer.observe(s));
}

/* ===================================================================
   SCROLL REVEAL
   =================================================================== */
function setupReveal(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  items.forEach(el => io.observe(el));
}

/* ===================================================================
   INIT
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderEditions();
  renderDecadeFilters();
  renderDropdown();
  renderRanking(ranking);
  setupRankingSort();
  setupNav();
  setupReveal();
});