// ==========================================================================
// BASE DE DADOS COMPLETA CONSOLIDADA (Dados fornecidos para o site)
// ==========================================================================
const dadosCopas = [
    { ano: 1930, flag: "🇺🇾", sede: "Uruguai", campeao: "Uruguai", vice: "Argentina", placar: "4 – 2", terceiro: "Estados Unidos", quarto: "Iugoslávia", gols: 70, am: "-", vm: "1 (verbal)", pen: "Não.", faltas: "Não havia cartões. Jogo truncado, mas sem expulsões.", cur: "Foi jogada uma metade com a bola da Argentina e a outra com a do Uruguai." },
    { ano: 1934, flag: "🇮🇹", sede: "Itália", campeao: "Itália", vice: "Tchecoslováquia", placar: "2 – 1 (pro)", terceiro: "Alemanha", quarto: "Áustria", gols: 70, am: "-", vm: "1 (verbal)", pen: "Não.", faltas: "Jogo extremamente físico e violento sob pressão política, sem expulsões na final.", cur: "" },
    { ano: 1938, flag: "🇫🇷", sede: "França", campeao: "Itália", vice: "Hungria", placar: "4 – 2", terceiro: "Brasil", quarto: "Suécia", gols: 84, am: "-", vm: "4 (verbal)", pen: "Não.", faltas: "Partida muito limpa para os padrões da época, resolvida na bola pela grande seleção italiana.", cur: "" },
    { ano: 1950, flag: "🇧🇷", sede: "Brasil", campeao: "Uruguai", vice: "Brasil", placar: "2 – 1", terceiro: "Suécia", quarto: "Espanha", gols: 88, am: "-", vm: "0", pen: "Não.", faltas: "Apesar do drama do Maracanazo, o jogo teve poucas faltas e foi considerado muito leal.", cur: "" },
    { ano: 1954, flag: "🇨🇭", sede: "Suíça", campeao: "Alemanha Ocidental", vice: "Hungria", placar: "3 – 2", terceiro: "Áustria", quarto: "Uruguai", gols: 140, am: "-", vm: "3 (verbal)", pen: "Não.", faltas: "Jogo sob forte chuva e lama. Húngaros contestaram muito um impedimento no final do jogo.", cur: "" },
    { ano: 1958, flag: "🇸🇪", sede: "Suécia", campeao: "Brasil", vice: "Suécia", placar: "5 – 2", terceiro: "França", quarto: "Alemanha Ocidental", gols: 126, am: "-", vm: "3 (verbal)", pen: "Não.", faltas: "Uma das finais mais limpas e plásticas. Pelé, aos 17 anos, encantou o mundo sem sofrer violência.", cur: "" },
    { ano: 1962, flag: "🇨🇱", sede: "Chile", campeao: "Brasil", vice: "Tchecoslováquia", placar: "3 – 1", terceiro: "Chile", quarto: "Iugoslávia", gols: 89, am: "-", vm: "6 (verbal)", pen: "Não.", faltas: "Jogo tenso, mas o Brasil controlou bem as investidas adversárias mesmo sem Pelé (lesionado).", cur: "" },
    { ano: 1966, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", sede: "Inglaterra", campeao: "Inglaterra", vice: "Alemanha Ocidental", placar: "4 – 2 (pro)", terceiro: "Portugal", quarto: "União Soviética", gols: 89, am: "-", vm: "5 (verbal)", pen: "Não.", faltas: "Marcada pelo polêmico 'gol fantasma' de Geoff Hurst. O jogo teve reclamações, mas nenhuma punição grave.", cur: "" },
    { ano: 1970, flag: "🇲🇽", sede: "México", campeao: "Brasil", vice: "Itália", placar: "4 – 1", terceiro: "Alemanha Ocidental", quarto: "Uruguai", gols: 95, am: "33", vm: "0", pen: "Não.", faltas: "Primeira Copa com cartões físicos. A final teve apenas 2 cartões amarelos (Burgnich e Rivelino).", cur: "" },
    { ano: 1974, flag: "🇩🇪", sede: "Alemanha Ocidental", campeao: "Alemanha Ocidental", vice: "Países Baixos", placar: "2 – 1", terceiro: "Polônia", quarto: "Brasil", gols: 97, am: "82", vm: "5", pen: "Sim, dois! Um para a Holanda no 1º minuto (Neeskens) e outro para a Alemanha (Breitner).", faltas: "Jogo tenso. 4 cartões amarelos distribuídos na final (3 para holandeses e 1 para alemães).", cur: "" },
    { ano: 1978, flag: "🇦🇷", sede: "Argentina", campeao: "Argentina", vice: "Países Baixos", placar: "3 – 1 (pro)", terceiro: "Brasil", quarto: "Itália", gols: 102, am: "65", vm: "3", pen: "Não.", faltas: "Clima hostil no Monumental de Núñez. Foram 4 cartões amarelos aplicados (3 para a Holanda e 1 para a Argentina).", cur: "" },
    { ano: 1982, flag: "🇪🇸", sede: "Espanha", campeao: "Itália", vice: "Alemanha Ocidental", placar: "3 – 1", terceiro: "Polônia", quarto: "França", gols: 146, am: "98", vm: "5", pen: "Sim! Cabrini (Itália) cobrou um pênalti para fora aos 25 minutos do primeiro tempo.", faltas: "5 cartões amarelos no total. Jogo muito travado no meio-campo com marcação implacável.", cur: "" },
    { ano: 1986, flag: "🇲🇽", sede: "México", campeao: "Argentina", vice: "Alemanha Ocidental", placar: "3 – 2", terceiro: "França", quarto: "Bélgica", gols: 132, am: "135", vm: "8", pen: "Não.", faltas: "6 cartões amarelos (4 para a Argentina, incluindo Maradona, e 2 para a Alemanha). Recorde para a época.", cur: "" },
    { ano: 1990, flag: "🇮🇹", sede: "Itália", campeao: "Alemanha Ocidental", vice: "Argentina", placar: "1 – 0", terceiro: "Itália", quarto: "Inglaterra", gols: 115, am: "162", vm: "16", pen: "Sim! Andreas Brehme garantiu o título alemão cobrando pênalti polêmico aos 40 minutos do 2º tempo.", faltas: "A final mais indisciplinada até então: 4 cartões amarelos e 2 vermelhos diretos (Monzón e Dezotti da Argentina).", cur: "" },
    { ano: 1994, flag: "🇺🇸", sede: "Estados Unidos", campeao: "Brasil", vice: "Itália", placar: "0 – 0 (3-2 pen)", terceiro: "Suécia", quarto: "Bulgária", gols: 141, am: "235", vm: "15", pen: "Apenas na disputa de penais após o 0x0 persistir no tempo regulamentar e prorrogação.", faltas: "Muita cautela defensiva. 4 cartões amarelos aplicados na partida decisiva.", cur: "" },
    { ano: 1998, flag: "🇫🇷", sede: "França", campeao: "França", vice: "Brasil", placar: "3 – 0", terceiro: "Croácia", quarto: "Países Baixos", gols: 171, am: "258", vm: "22", pen: "Não.", faltas: "Jogo tenso. 2 cartões amarelos para o Brasil e 1 vermelho para o francês Desailly (por segundo amarelo).", cur: "" },
    { ano: 2002, flag: "🇰🇷", sede: "Coreia / Japão", campeao: "Brasil", vice: "Alemanha", placar: "2 – 0", terceiro: "Turquia", quarto: "Coreia do Sul", gols: 161, am: "272", vm: "17", pen: "Não.", faltas: "O Brasil cometeu 19 faltas e a Alemanha 21. Apenas 2 cartões amarelos exibidos (Roque Júnior e Klose).", cur: "" },
    { ano: 2006, flag: "🇩🇪", sede: "Alemanha", campeao: "Itália", vice: "França", placar: "1 – 1 (5-3 pen)", terceiro: "Alemanha", quarto: "Portugal", gols: 147, am: "307", vm: "28", pen: "Sim! Zidane abriu o placar de pênalti para a França no começo do jogo.", faltas: "Marcado pela cabeçada de Zidane em Materazzi, rendendo vermelho direto ao craque. O jogo teve 4 amarelos.", cur: "" },
    { ano: 2010, flag: "🇿🇦", sede: "África do Sul", campeao: "Espanha", vice: "Países Baixos", placar: "1 – 0 (pro)", terceiro: "Alemanha", quarto: "Uruguai", gols: 145, am: "260", vm: "17", pen: "Não.", faltas: "Recorde absoluto de violência em finais: 47 faltas, 12 amarelos e 1 vermelho (Heitinga). Voadora de De Jong.", cur: "" },
    { ano: 2014, flag: "🇧🇷", sede: "Brasil", campeao: "Alemanha", vice: "Argentina", placar: "1 – 0 (pro)", terceiro: "Países Baixos", quarto: "Brasil", gols: 171, am: "187", vm: "10", pen: "Não (embora a Argentina tenha reclamado de choque de Neuer em Higuaín).", faltas: "Partida extremamente física com 36 faltas no total. Foram aplicados 4 cartões amarelos.", cur: "" },
    { ano: 2018, flag: "🇷🇺", sede: "Rússia", campeao: "França", vice: "Croácia", placar: "4 – 2", terceiro: "Bélgica", quarto: "Inglaterra", gols: 169, am: "219", vm: "4", pen: "Sim! Gol de pênalti anotado por Antoine Griezmann para a França com auxílio do VAR.", faltas: "Jogo limpo e dinâmico. Apenas 27 faltas combinadas e 3 cartões amarelos.", cur: "" },
    { ano: 2022, flag: "🇶🇦", sede: "Catar", campeao: "Argentina", vice: "França", placar: "3 – 3 (4-2 pen)", terceiro: "Croácia", quarto: "Marrocos", gols: 172, am: "223", vm: "4", pen: "Sim, três durante o jogo! Um convertido por Messi e dois por Mbappé.", faltas: "Final épica e tensa com 45 faltas e 8 cartões amarelos (5 para a Argentina e 3 para a França).", cur: "" }
];

// Executa o script automaticamente assim que a página estiver carregada
document.addEventListener("DOMContentLoaded", () => {
    
    const dropdownMenu = document.getElementById("dropdown-anos");
    const tabelaCorpo = document.querySelector("#tabela-estatisticas tbody");
    const containerFinais = document.getElementById("container-finais");

    // ==========================================================================
    // 1. GERAÇÃO DINÂMICA DOS LINKS NO MENU DROPDOWN
    // ==========================================================================
    dadosCopas.forEach(copa => {
        const link = document.createElement("a");
        link.href = `#ano-${copa.ano}`; // Aponta para a ID do card correspondente
        link.textContent = copa.ano;
        dropdownMenu.appendChild(link);
    });

    // ==========================================================================
    // 2. PREENCHIMENTO AUTOMÁTICO DA TABELA DE ESTATÍSTICAS GERAIS
    // ==========================================================================
    dadosCopas.forEach(copa => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${copa.ano}</strong></td>
            <td>${copa.flag} ${copa.sede}</td>
            <td>${copa.campeao}</td>
            <td>${copa.vice}</td>
            <td>${copa.gols}</td>
            <td>${copa.am}</td>
            <td>${copa.vm}</td>
        `;
        tabelaCorpo.appendChild(tr);
    });

    // ==========================================================================
    // 3. CONSTRUÇÃO DOS CARDS DE DETALHES DE CADA COPA
    // ==========================================================================
    dadosCopas.forEach(copa => {
        const card = document.createElement("div");
        card.className = "year-card";
        card.id = `ano-${copa.ano}`; // ID mapeada para o link de navegação do topo

        // Criação de estrutura HTML semântica dentro do card de detalhes
        card.innerHTML = `
            <div class="year-card-header">
                <span class="year-title">${copa.flag} Copa do Mundo de ${copa.ano}</span>
                <span class="score-badge">${copa.campeao} ${copa.placar} ${copa.vice}</span>
            </div>
            <p><strong>País Sede:</strong> ${copa.sede} | <strong>3º Lugar:</strong> ${copa.terceiro} | <strong>4º Lugar:</strong> ${copa.quarto}</p>
            
            <ul class="details-list">
                <li><strong>Teve Pênalti na Final?</strong> ${copa.pen}</li>
                <li><strong>Faltas e Disciplina:</strong> ${copa.faltas}</li>
                ${copa.cur ? `<li><strong>Curiosidade Extra:</strong> ${copa.cur}</li>` : ''}
            </ul>
        `;
        containerFinais.appendChild(card);
    });

    // ==========================================================================
    // 4. MECANISMO DE LIAME ATIVO NO MENU (Efeito Visual de Seleção)
    // ==========================================================================
    const linksMenu = document.querySelectorAll(".nav-link");
    const secoes = document.querySelectorAll(".content-section");

    // Altera a classe "active" do menu conforme o usuário rola a página pelas seções
    window.addEventListener("scroll", () => {
        let atual = "";
        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop;
            if (pageYOffset >= topoSecao - 120) {
                atual = secao.getAttribute("id");
            }
        });

        linksMenu.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(atual)) {
                link.classList.add("active");
            }
        });
    });
});