JavaScript
// BANCO DE DADOS INTEGRADO DAS COPAS (1930 - 2022)
const copasData = [
    { ano: 1930, sede: "Uruguai", campeao: "Uruguai", vice: "Argentina", placar: "4 x 2", terceiro: "EUA", quarto: "Iugoslávia", cidade: "Montevidéu", estadio: "Centenário", prorrogacao: "Não", penaltis: "Não", gols: 70, amarelos: 0, vermelhos: 0, faltas: 160, selecoes: 13, artilheiro: "Guillermo Stábile (8 gols)", curiosidade: "Primeira edição da história. Não houve eliminatórias." },
    { ano: 1934, sede: "Itália", campeao: "Itália", vice: "Tchecoslováquia", placar: "2 x 1", terceiro: "Alemanha", quarto: "Áustria", cidade: "Roma", estadio: "Nazionale PNF", prorrogacao: "Sim", penaltis: "Não", gols: 70, amarelos: 0, vermelhos: 1, faltas: 190, selecoes: 16, artilheiro: "Oldřich Nejedlý (5 gols)", curiosidade: "Primeira copa com fase eliminatória prévia." },
    { ano: 1938, sede: "França", campeao: "Itália", vice: "Hungria", placar: "4 x 2", terceiro: "Brasil", quarto: "Suécia", cidade: "Paris", estadio: "Olympique", prorrogacao: "Não", penaltis: "Não", gols: 84, amarelos: 0, vermelhos: 4, faltas: 210, selecoes: 15, artilheiro: "Leônidas da Silva (7 gols)", curiosidade: "Última Copa antes da Segunda Guerra Mundial." },
    { ano: 1950, sede: "Brasil", campeao: "Uruguai", vice: "Brasil", placar: "2 x 1", terceiro: "Suécia", quarto: "Espanha", cidade: "Rio de Janeiro", estadio: "Maracanã", prorrogacao: "Não", penaltis: "Não", gols: 88, amarelos: 0, vermelhos: 0, faltas: 140, selecoes: 13, artilheiro: "Ademir de Menezes (9 gols)", curiosidade: "O famoso Maracanazo. Não teve uma final direta, mas sim um quadrangular final." },
    { ano: 1954, sede: "Suíça", campeao: "Alemanha Ocidental", vice: "Hungria", placar: "3 x 2", terceiro: "Áustria", quarto: "Uruguai", cidade: "Berna", estadio: "Wankdorf", prorrogacao: "Não", penaltis: "Não", gols: 140, amarelos: 0, vermelhos: 3, faltas: 240, selecoes: 16, artilheiro: "Sándor Kocsis (11 gols)", curiosidade: "Conhecido como 'O Milagre de Berna'. Maior média de gols da história." },
    { ano: 1958, sede: "Suécia", campeao: "Brasil", vice: "Suécia", placar: "5 x 2", terceiro: "França", quarto: "Alemanha Ocidental", cidade: "Solna", estadio: "Råsunda", prorrogacao: "Não", penaltis: "Não", gols: 126, amarelos: 0, vermelhos: 3, faltas: 220, selecoes: 16, artilheiro: "Just Fontaine (13 gols)", curiosidade: "Surgimento mundial de Pelé aos 17 anos e recorde imbatível de gols de Fontaine." },
    { ano: 1962, sede: "Chile", campeao: "Brasil", vice: "Tchecoslováquia", placar: "3 x 1", terceiro: "Chile", quarto: "Iugoslávia", cidade: "Santiago", estadio: "Nacional", prorrogacao: "Não", penaltis: "Não", gols: 89, amarelos: 0, vermelhos: 6, faltas: 280, selecoes: 16, artilheiro: "Garrincha e outros (4 gols)", curiosidade: "Pelé se machucou no início; Garrincha liderou a seleção ao bicampeonato." },
    { ano: 1966, sede: "Inglaterra", campeao: "Inglaterra", vice: "Alemanha Ocidental", placar: "4 x 2", terceiro: "Portugal", quarto: "URSS", cidade: "Londres", estadio: "Wembley", prorrogacao: "Sim", penaltis: "Não", gols: 89, amarelos: 0, vermelhos: 5, faltas: 290, selecoes: 16, artilheiro: "Eusébio (9 gols)", curiosidade: "Gol fantasma na final gera polêmica debatida até hoje." },
    { ano: 1970, sede: "México", campeao: "Brasil", vice: "Itália", placar: "4 x 1", terceiro: "Alemanha Ocidental", quarto: "Uruguai", cidade: "Cidade do México", estadio: "Azteca", prorrogacao: "Não", penaltis: "Não", gols: 95, amarelos: 33, vermelhos: 0, faltas: 310, selecoes: 16, artilheiro: "Gerd Müller (10 gols)", curiosidade: "Introdução dos cartões amarelos e vermelhos (nenhum vermelho aplicado)." },
    { ano: 1974, sede: "Alemanha Ocidental", campeao: "Alemanha Ocidental", vice: "Holanda", placar: "2 x 1", terceiro: "Polônia", quarto: "Brasil", cidade: "Munique", estadio: "Olympiastadion", prorrogacao: "Não", penaltis: "Não", gols: 97, amarelos: 88, vermelhos: 5, faltas: 340, selecoes: 16, artilheiro: "Grzegorz Lato (7 gols)", curiosidade: "Primeira aparição do Carrossel Holandês e da atual Taça FIFA." },
    { ano: 1978, sede: "Argentina", campeao: "Argentina", vice: "Holanda", placar: "3 x 1", terceiro: "Brasil", quarto: "Itália", cidade: "Buenos Aires", estadio: "Monumental de Núñez", prorrogacao: "Sim", penaltis: "Não", gols: 102, amarelos: 84, vermelhos: 3, faltas: 380, selecoes: 16, artilheiro: "Mario Kempes (6 gols)", curiosidade: "Primeiro título argentino cercado por forte clima político militar." },
    { ano: 1982, sede: "Espanha", campeao: "Itália", vice: "Alemanha Ocidental", placar: "3 x 1", terceiro: "Polônia", quarto: "França", cidade: "Madri", estadio: "Santiago Bernabéu", prorrogacao: "Não", penaltis: "Não", gols: 146, amarelos: 98, vermelhos: 5, faltas: 410, selecoes: 24, artilheiro: "Paolo Rossi (6 gols)", curiosidade: "Expansão do torneio para 24 seleções e eliminação da histórica seleção brasileira de 82." },
    { ano: 1986, sede: "México", campeao: "Argentina", vice: "Alemanha Ocidental", placar: "3 x 2", terceiro: "França", quarto: "Bélgica", cidade: "Cidade do México", estadio: "Azteca", prorrogacao: "Não", penaltis: "Não", gols: 132, amarelos: 115, vermelhos: 8, faltas: 430, selecoes: 24, artilheiro: "Gary Lineker (6 gols)", curiosidade: "A Copa de Diego Maradona: O gol da 'Mão de Deus' e o 'Gol do Século' contra a Inglaterra." },
    { ano: 1990, sede: "Itália", campeao: "Alemanha Ocidental", vice: "Argentina", placar: "1 x 0", terceiro: "Itália", quarto: "Inglaterra", cidade: "Roma", estadio: "Stadio Olimpico", prorrogacao: "Não", penaltis: "Não", gols: 115, amarelos: 162, vermelhos: 16, faltas: 490, selecoes: 24, artilheiro: "Salvatore Schillaci (6 gols)", curiosidade: "Copa com menor média de gols e recorde de cartões vermelhos até então." },
    { ano: 1994, sede: "EUA", campeao: "Brasil", vice: "Itália", placar: "0 x 0", terceiro: "Suécia", quarto: "Bulgária", cidade: "Pasadena", estadio: "Rose Bowl", prorrogacao: "Sim", penaltis: "Sim (3x2)", gols: 141, amarelos: 156, vermelhos: 15, faltas: 460, selecoes: 24, artilheiro: "H. Stoichkov e O. Salenko (6 gols)", curiosidade: "Primeira final decidida nos pênaltis na história das copas." },
    { ano: 1998, sede: "França", campeao: "França", vice: "Brasil", placar: "3 x 0", terceiro: "Croácia", quarto: "Holanda", cidade: "Saint-Denis", estadio: "Stade de France", prorrogacao: "Não", penaltis: "Não", gols: 171, amarelos: 250, vermelhos: 22, faltas: 510, selecoes: 32, artilheiro: "Davor Šuker (6 gols)", curiosidade: "Expansão definitiva para o formato de 32 equipes." },
    { ano: 2002, sede: "Coreia do Sul / Japão", campeao: "Brasil", vice: "Alemanha", placar: "2 x 0", terceiro: "Turquia", quarto: "Coreia do Sul", cidade: "Yokohama", estadio: "International Stadium", prorrogacao: "Não", penaltis: "Não", gols: 161, amarelos: 272, vermelhos: 17, faltas: 495, selecoes: 32, artilheiro: "Ronaldo Fenômeno (8 gols)", curiosidade: "Primeira Copa sediada na Ásia e em dois países simultaneamente. Pentacampeonato invicto do Brasil." },
    { ano: 2006, sede: "Alemanha", campeao: "Itália", vice: "França", placar: "1 x 1", terceiro: "Alemanha", quarto: "Portugal", cidade: "Berlim", estadio: "Olympiastadion", prorrogacao: "Sim", penaltis: "Sim (5x3)", gols: 147, amarelos: 307, vermelhos: 28, faltas: 530, selecoes: 32, artilheiro: "Miroslav Klose (5 gols)", curiosidade: "Marcada pela cabeçada de Zidane em Materazzi na grande final." },
    { ano: 2010, sede: "África do Sul", campeao: "Espanha", vice: "Holanda", placar: "1 x 0", terceiro: "Alemanha", quarto: "Uruguai", cidade: "Joanesburgo", estadio: "Soccer City", prorrogacao: "Sim", penaltis: "Não", gols: 145, amarelos: 260, vermelhos: 17, faltas: 480, selecoes: 32, artilheiro: "Thomas Müller e outros (5 gols)", curiosidade: "Primeira Copa no continente africano. Estilo de posse de bola Tiki-Taka consagra a Espanha." },
    { ano: 2014, sede: "Brasil", campeao: "Alemanha", vice: "Argentina", placar: "1 x 0", terceiro: "Holanda", quarto: "Brasil", cidade: "Rio de Janeiro", estadio: "Maracanã", prorrogacao: "Sim", penaltis: "Não", gols: 171, amarelos: 187, vermelhos: 10, faltas: 420, selecoes: 32, artilheiro: "James Rodríguez (6 gols)", curiosidade: "Marcada pelo traumático placar de 7x1 sofrido pelo Brasil contra a Alemanha na semifinal." },
    { ano: 2018, sede: "Rússia", campeao: "França", vice: "Croácia", placar: "4 x 2", terceiro: "Bélgica", quarto: "Inglaterra", cidade: "Moscou", estadio: "Luzhniki", prorrogacao: "Não", penaltis: "Não", gols: 169, amarelos: 219, vermelhos: 4, faltas: 395, selecoes: 32, artilheiro: "Harry Kane (6 gols)", curiosidade: "Primeira edição a contar com o auxílio tecnológico do Árbitro de Vídeo (VAR)." },
    { ano: 2022, sede: "Catar", campeao: "Argentina", vice: "França", placar: "3 x 3", terceiro: "Croácia", quarto: "Marrocos", cidade: "Lusail", estadio: "Estádio de Lusail", prorrogacao: "Sim", penaltis: "Sim (4x2)", gols: 172, amarelos: 224, vermelhos: 4, faltas: 415, selecoes: 32, artilheiro: "Kylian Mbappé (8 gols)", curiosidade: "A consagração definitiva de Lionel Messi em uma das maiores finais de todos os tempos." }
];

const maioresCampeoes = [
    { pais: "Brasil", titulos: 5, part: 22, v: 76, e: 18, d: 18, gols: 237 },
    { pais: "Alemanha", titulos: 4, part: 20, v: 68, e: 21, d: 23, gols: 232 },
    { pais: "Itália", titulos: 4, part: 18, v: 45, e: 21, d: 17, gols: 128 },
    { pais: "Argentina", titulos: 3, part: 18, v: 49, e: 16, d: 24, gols: 152 },
    { pais: "França", titulos: 2, part: 16, v: 39, e: 14, d: 20, gols: 136 },
    { pais: "Uruguai", titulos: 2, part: 14, v: 25, e: 13, d: 20, gols: 89 },
    { pais: "Inglaterra", titulos: 1, part: 16, v: 32, e: 22, d: 22, gols: 104 },
    { pais: "Espanha", titulos: 1, part: 16, v: 31, e: 17, d: 22, gols: 108 }
];

// INICIALIZAÇÃO DO PORTAL
document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initCounters();
    renderTable(copasData);
    renderCards(copasData);
    renderChampionsRank();
    renderTimelineH();
    initCharts();
    initScrollAnimation();
});

// MENU RESPONSIVO
function initMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => links.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('active'));
    });
}

// CONTADORES ANIMADOS (HERO)
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 60;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);
            if (count < target) {
                counter.innerText = Math.min(count + inc, target);
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// RENDERIZAR TABELA DE EDICÕES COM FILTROS E ORDENAÇÃO
let ordemDecrescente = false;
function renderTable(data) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = "";
    data.forEach(item => {
        const row = `<tr>
            <td><strong>${item.ano}</strong></td>
            <td>${item.sede}</td>
            <td><strong>${item.campeao}</strong></td>
            <td>${item.vice}</td>
            <td>${item.placar}</td>
            <td>${item.terceiro}</td>
            <td>${item.quarto}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// CONFIGURAÇÃO DOS FILTROS DA TABELA
document.getElementById('search-input').addEventListener('input', filtrarTabela);
document.getElementById('filter-winner').addEventListener('change', filtrarTabela);
document.getElementById('sort-btn').addEventListener('click', () => {
    ordemDecrescente = !ordemDecrescente;
    document.getElementById('sort-btn').innerText = ordemDecrescente ? "Ordenar por Ano (Crescente)" : "Ordenar por Ano (Decrescente)";
    filtrarTabela();
});

function filtrarTabela() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const selectWinner = document.getElementById('filter-winner').value;
    
    let dadosFiltrados = copasData.filter(item => {
        const matchText = item.sede.toLowerCase().includes(searchText) || item.campeao.toLowerCase().includes(searchText);
        const matchWinner = selectWinner === "" || item.campeao === selectWinner;
        return matchText && matchWinner;
    });

    if (ordemDecrescente) {
        dadosFiltrados.sort((a, b) => b.ano - a.ano);
    } else {
        dadosFiltrados.sort((a, b) => a.ano - b.ano);
    }
    renderTable(dadosFiltrados);
}

// RENDERIZAR CARDS DAS FINAIS DETALHADAS
function renderCards(data) {
    const grid = document.getElementById('finais-cards');
    grid.innerHTML = "";
    data.forEach(item => {
        const card = `
        <div class="card fade-in">
            <h3>${item.ano} - ${item.sede}</h3>
            <p><strong>Resultado:</strong> ${item.campeao} ${item.placar} ${item.vice}</p>
            <p><strong>Estádio:</strong> ${item.estadio} (${item.cidade})</p>
            <p><strong>Prorrogação:</strong> ${item.prorrogacao} | <strong>Pênaltis:</strong> ${item.penaltis}</p>
            <p><strong>Estatísticas do Jogo:</strong></p>
            <ul style="padding-left:20px; font-size:0.9rem; margin-bottom:10px;">
                <li>Gols Totais na Copa: ${item.gols}</li>
                <li>Cartões Amarelos: ${item.amarelos === 0 ? 'N/A' : item.amarelos}</li>
                <li>Cartões Vermelhos: ${item.vermelhos}</li>
                <li>Faltas Estimadas: ${item.faltas}</li>
            </ul>
            <p><strong>Curiosidade:</strong> <em>${item.curiosidade}</em></p>
        </div>`;
        grid.innerHTML += card;
    });
}

// RENDERIZAR MAIORES CAMPEÕES (SEÇÃO 8)
function renderChampionsRank() {
    const container = document.getElementById('champions-cards');
    maioresCampeoes.forEach(c => {
        const card = `
        <div class="champ-card fade-in">
            <h3>${c.pais}</h3>
            <div class="champ-badge">${c.titulos} ${c.titulos > 1 ? 'Títulos' : 'Título'}</div>
            <div class="champ-stats">
                <p><strong>Participações:</strong> ${c.part}</p>
                <p><strong>Vitórias:</strong> ${c.v}</p>
                <p><strong>Empates:</strong> ${c.e}</p>
                <p><strong>Derrotas:</strong> ${c.d}</p>
                <p><strong>Gols Marcados:</strong> ${c.gols}</p>
            </div>
        </div>`;
        container.innerHTML += card;
    });
}

// LINHA DO TEMPO HORIZONTAL INTERATIVA (SEÇÃO 9)
function renderTimelineH() {
    const timeline = document.getElementById('timeline-h');
    copasData.forEach(item => {
        const node = document.createElement('div');
        node.className = 'timeline-h-item';
        node.innerText = item.ano;
        node.addEventListener('click', () => openModal(item));
        timeline.appendChild(node);
    });

    // Fechar Modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('info-modal').style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if(e.target == document.getElementById('info-modal')) {
            document.getElementById('info-modal').style.display = 'none';
        }
    });
}

function openModal(item) {
    const body = document.getElementById('modal-body-data');
    body.innerHTML = `
        <h2 style="color: #8A1538; margin-bottom:15px;">Copa do Mundo ${item.ano}</h2>
        <p><strong>País Sede:</strong> ${item.sede}</p>
        <p><strong>Campeão:</strong> ${item.campeao}</p>
        <p><strong>Vice-campeão:</strong> ${item.vice}</p>
        <p><strong>Placar da Final:</strong> ${item.placar}</p>
        <p><strong>Artilheiro Principal:</strong> ${item.artilheiro}</p>
        <h3 style="margin-top:15px; font-size:1.1rem;">Estatísticas Básicas</h3>
        <p>Total de Seleções: ${item.selecoes}</p>
        <p>Gols Marcados: ${item.gols}</p>
        <p>Cartões Vermelhos: ${item.vermelhos}</p>
    `;
    document.getElementById('info-modal').style.display = 'flex';
}

// ENGINE GRÁFICA EM CANVAS PURO (VANILLA) CONTROLANDO MOUSE HOVER INTERATIVO
function initCharts() {
    drawBarChart('chart-gols', copasData.map(d => d.ano), copasData.map(d => d.gols), '#8A1538');
    drawBarChart('chart-selecoes', copasData.map(d => d.ano), copasData.map(d => d.selecoes), '#EEA243');
    
    // Filtro pós-1970 para exibição correta dos cartões criados naquele ano
    const pos1970 = copasData.filter(d => d.ano >= 1970);
    drawBarChart('chart-amarelos', pos1970.map(d => d.ano), pos1970.map(d => d.amarelos), '#ecc94b');
    drawBarChart('chart-vermelhos', pos1970.map(d => d.ano), pos1970.map(d => d.vermelhos), '#e53e3e');
}

function drawBarChart(canvasId, labels, values, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Dimensões lógicas fixas para responsividade interna do canvas
    const width = 500;
    const height = 300;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const maxVal = Math.max(...values) * 1.1;
    const barWidth = chartWidth / labels.length;

    function render(mouseX = -1, mouseY = -1) {
        ctx.clearRect(0, 0, width, height);
        
        // Desenha Linhas de Grade de Fundo
        ctx.strokeStyle = '#eee';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding + (chartHeight / 4) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }

        // Renderização Estrutural das Barras
        let activeTooltip = null;
        for (let i = 0; i < labels.length; i++) {
            const barH = (values[i] / maxVal) * chartHeight;
            const x = padding + i * barWidth + 2;
            const y = height - padding - barH;
            const w = barWidth - 4;

            // Identificação de Hitbox de Mouse (Hover)
            if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= height - padding) {
                ctx.fillStyle = '#333'; // Cor de destaque ao focar com mouse
                activeTooltip = { x: x + w/2, y: y - 10, label: labels[i], val: values[i] };
            } else {
                ctx.fillStyle = color;
            }

            // Desenhar Barra
            ctx.fillRect(x, y, w, barH);
        }

        // Renderizar Tooltip de dados Dinâmicos caso selecionado por proximidade
        if (activeTooltip) {
            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(activeTooltip.x - 45, activeTooltip.y - 25, 90, 22);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${activeTooltip.label}: ${activeTooltip.val}`, activeTooltip.x, activeTooltip.y - 10);
        }

        // Desenhar Eixos Base
        ctx.strokeStyle = '#666';
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();
    }

    // Ouvinte de Movimentos de Mouse mapeando a posição real interna
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * (width / rect.width);
        const mouseY = (e.clientY - rect.top) * (height / rect.height);
        render(mouseX, mouseY);
    });

    canvas.addEventListener('mouseleave', () => render(-1, -1));
    render(); // Renderização Inicial Estática
}

// ANIMAÇÃO DE ROLAGEM E EVENTOS INTERATIVOS COMPLEMENTARES
function initScrollAnimation() {
    const items = document.querySelectorAll('.fade-in');
    const backToTop = document.getElementById('back-to-top');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.9;
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            }
        });

        // Botão voltar ao topo visível após 400px de scroll
        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Executa uma checagem inicial de carregamento da página
}