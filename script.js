/* ==========================================
   COPA DO MUNDO FIFA 1930-2022
   SCRIPT.JS
========================================== */

/* ==========================================
   BASE DE DADOS DAS COPAS
========================================== */

const worldCups = [
{
year:1930,
host:"Uruguai",
champion:"Uruguai",
runnerUp:"Argentina",
result:"4 x 2",
third:"Estados Unidos",
fourth:"Iugoslávia"
},
{
year:1934,
host:"Itália",
champion:"Itália",
runnerUp:"Tchecoslováquia",
result:"2 x 1",
third:"Alemanha",
fourth:"Áustria"
},
{
year:1938,
host:"França",
champion:"Itália",
runnerUp:"Hungria",
result:"4 x 2",
third:"Brasil",
fourth:"Suécia"
},
{
year:1950,
host:"Brasil",
champion:"Uruguai",
runnerUp:"Brasil",
result:"2 x 1",
third:"Suécia",
fourth:"Espanha"
},
{
year:1954,
host:"Suíça",
champion:"Alemanha",
runnerUp:"Hungria",
result:"3 x 2",
third:"Áustria",
fourth:"Uruguai"
},
{
year:1958,
host:"Suécia",
champion:"Brasil",
runnerUp:"Suécia",
result:"5 x 2",
third:"França",
fourth:"Alemanha"
},
{
year:1962,
host:"Chile",
champion:"Brasil",
runnerUp:"Tchecoslováquia",
result:"3 x 1",
third:"Chile",
fourth:"Iugoslávia"
},
{
year:1966,
host:"Inglaterra",
champion:"Inglaterra",
runnerUp:"Alemanha",
result:"4 x 2",
third:"Portugal",
fourth:"União Soviética"
},
{
year:1970,
host:"México",
champion:"Brasil",
runnerUp:"Itália",
result:"4 x 1",
third:"Alemanha",
fourth:"Uruguai"
},
{
year:1974,
host:"Alemanha",
champion:"Alemanha",
runnerUp:"Holanda",
result:"2 x 1",
third:"Polônia",
fourth:"Brasil"
},
{
year:1978,
host:"Argentina",
champion:"Argentina",
runnerUp:"Holanda",
result:"3 x 1",
third:"Brasil",
fourth:"Itália"
},
{
year:1982,
host:"Espanha",
champion:"Itália",
runnerUp:"Alemanha",
result:"3 x 1",
third:"Polônia",
fourth:"França"
},
{
year:1986,
host:"México",
champion:"Argentina",
runnerUp:"Alemanha",
result:"3 x 2",
third:"França",
fourth:"Bélgica"
},
{
year:1990,
host:"Itália",
champion:"Alemanha",
runnerUp:"Argentina",
result:"1 x 0",
third:"Itália",
fourth:"Inglaterra"
},
{
year:1994,
host:"Estados Unidos",
champion:"Brasil",
runnerUp:"Itália",
result:"0 x 0 (3x2 p)",
third:"Suécia",
fourth:"Bulgária"
},
{
year:1998,
host:"França",
champion:"França",
runnerUp:"Brasil",
result:"3 x 0",
third:"Croácia",
fourth:"Holanda"
},
{
year:2002,
host:"Coreia/Japão",
champion:"Brasil",
runnerUp:"Alemanha",
result:"2 x 0",
third:"Turquia",
fourth:"Coreia do Sul"
},
{
year:2006,
host:"Alemanha",
champion:"Itália",
runnerUp:"França",
result:"1 x 1 (5x3 p)",
third:"Alemanha",
fourth:"Portugal"
},
{
year:2010,
host:"África do Sul",
champion:"Espanha",
runnerUp:"Holanda",
result:"1 x 0",
third:"Alemanha",
fourth:"Uruguai"
},
{
year:2014,
host:"Brasil",
champion:"Alemanha",
runnerUp:"Argentina",
result:"1 x 0",
third:"Holanda",
fourth:"Brasil"
},
{
year:2018,
host:"Rússia",
champion:"França",
runnerUp:"Croácia",
result:"4 x 2",
third:"Bélgica",
fourth:"Inglaterra"
},
{
year:2022,
host:"Catar",
champion:"Argentina",
runnerUp:"França",
result:"3 x 3 (4x2 p)",
third:"Croácia",
fourth:"Marrocos"
}
];

/* ==========================================
   TABELA
========================================== */

const tableBody =
document.getElementById("tableBody");

function renderTable(data){

if(!tableBody) return;

tableBody.innerHTML = "";

data.forEach(cup=>{

tableBody.innerHTML += `
<tr>
<td>${cup.year}</td>
<td>${cup.host}</td>
<td>${cup.champion}</td>
<td>${cup.runnerUp}</td>
<td>${cup.result}</td>
<td>${cup.third}</td>
<td>${cup.fourth}</td>
</tr>
`;

});

}

renderTable(worldCups);

/* ==========================================
   FILTRO DE CAMPEÕES
========================================== */

const championFilter =
document.getElementById("championFilter");

if(championFilter){

const champions =
[...new Set(worldCups.map(c=>c.champion))]
.sort();

champions.forEach(champion=>{

const option =
document.createElement("option");

option.value = champion;
option.textContent = champion;

championFilter.appendChild(option);

});

}

/* ==========================================
   PESQUISA
========================================== */

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input", ()=>{

const text =
searchInput.value.toLowerCase();

const filtered =
worldCups.filter(cup=>

cup.year.toString().includes(text) ||
cup.host.toLowerCase().includes(text) ||
cup.champion.toLowerCase().includes(text) ||
cup.runnerUp.toLowerCase().includes(text)

);

renderTable(filtered);

});

}

/* ==========================================
   FILTRO CAMPEÃO
========================================== */

if(championFilter){

championFilter.addEventListener("change", ()=>{

const champion =
championFilter.value;

if(champion===""){
renderTable(worldCups);
return;
}

const filtered =
worldCups.filter(
cup => cup.champion === champion
);

renderTable(filtered);

});

}

/* ==========================================
   ORDENAÇÃO
========================================== */

const sortButton =
document.getElementById("sortYear");

let ascending = true;

if(sortButton){

sortButton.addEventListener("click",()=>{

const ordered =
[...worldCups].sort((a,b)=>{

return ascending
? a.year - b.year
: b.year - a.year;

});

ascending = !ascending;

renderTable(ordered);

});

}

/* ==========================================
   PARTE 2 - FINAIS + CAMPEÕES + TIMELINE
========================================== */

/* ==========================================
   FINAIS DETALHADAS
========================================== */

const finalsData = [
{
year:1930,
city:"Montevidéu",
stadium:"Estádio Centenário",
champion:"Uruguai",
runnerUp:"Argentina",
score:"4 x 2",
extraTime:false,
penalties:false,
goals:6,
yellow:0,
red:0,
fouls:0,
curiosity:"Primeira final da história da Copa"
},
{
year:1950,
city:"Rio de Janeiro",
stadium:"Maracanã",
champion:"Uruguai",
runnerUp:"Brasil",
score:"2 x 1",
extraTime:false,
penalties:false,
goals:3,
yellow:0,
red:0,
fouls:0,
curiosity:"Maracanazo"
},
{
year:1966,
city:"Londres",
stadium:"Wembley",
champion:"Inglaterra",
runnerUp:"Alemanha",
score:"4 x 2",
extraTime:true,
penalties:false,
goals:6,
yellow:0,
red:0,
fouls:0,
curiosity:"Gol polêmico de Geoff Hurst"
},
{
year:1970,
city:"Cidade do México",
stadium:"Azteca",
champion:"Brasil",
runnerUp:"Itália",
score:"4 x 1",
extraTime:false,
penalties:false,
goals:5,
yellow:0,
red:0,
fouls:0,
curiosity:"Seleção de Pelé considerada a melhor da história"
},
{
year:1986,
city:"Cidade do México",
stadium:"Azteca",
champion:"Argentina",
runnerUp:"Alemanha",
score:"3 x 2",
extraTime:false,
penalties:false,
goals:5,
yellow:0,
red:0,
fouls:0,
curiosity:"Maradona campeão"
},
{
year:1994,
city:"Pasadena",
stadium:"Rose Bowl",
champion:"Brasil",
runnerUp:"Itália",
score:"0 x 0 (3x2 p)",
extraTime:true,
penalties:true,
goals:0,
yellow:6,
red:0,
fouls:39,
curiosity:"Primeira final decidida nos pênaltis"
},
{
year:1998,
city:"Paris",
stadium:"Stade de France",
champion:"França",
runnerUp:"Brasil",
score:"3 x 0",
extraTime:false,
penalties:false,
goals:3,
yellow:5,
red:0,
fouls:28,
curiosity:"Zidane brilhou na final"
},
{
year:2006,
city:"Berlim",
stadium:"Olympiastadion",
champion:"Itália",
runnerUp:"França",
score:"1 x 1 (5x3 p)",
extraTime:true,
penalties:true,
goals:2,
yellow:12,
red:1,
fouls:47,
curiosity:"Cabeçada de Zidane em Materazzi"
},
{
year:2010,
city:"Joanesburgo",
stadium:"Soccer City",
champion:"Espanha",
runnerUp:"Holanda",
score:"1 x 0",
extraTime:true,
penalties:false,
goals:1,
yellow:14,
red:1,
fouls:47,
curiosity:"Gol de Iniesta na prorrogação"
},
{
year:2014,
city:"Rio de Janeiro",
stadium:"Maracanã",
champion:"Alemanha",
runnerUp:"Argentina",
score:"1 x 0",
extraTime:true,
penalties:false,
goals:1,
yellow:5,
red:0,
fouls:28,
curiosity:"Gol de Götze na prorrogação"
},
{
year:2018,
city:"Moscou",
stadium:"Luzhniki",
champion:"França",
runnerUp:"Croácia",
score:"4 x 2",
extraTime:false,
penalties:false,
goals:6,
yellow:14,
red:0,
fouls:20,
curiosity:"Final com muitos gols"
},
{
year:2022,
city:"Lusail",
stadium:"Lusail Stadium",
champion:"Argentina",
runnerUp:"França",
score:"3 x 3 (4x2 p)",
extraTime:true,
penalties:true,
goals:6,
yellow:8,
red:0,
fouls:40,
curiosity:"Final considerada uma das maiores da história"
}
];

/* ==========================================
   RENDER FINAIS
========================================== */

const finalsContainer =
document.getElementById("finalsContainer");

function renderFinals(){

if(!finalsContainer) return;

finalsContainer.innerHTML = "";

finalsData.forEach(final=>{

finalsContainer.innerHTML += `
<div class="final-card fade">

<h3>${final.year}</h3>

<p><strong>${final.champion}</strong> ${final.score} ${final.runnerUp}</p>

<p><strong>Cidade:</strong> ${final.city}</p>
<p><strong>Estádio:</strong> ${final.stadium}</p>

<p>Prorrogação: ${final.extraTime ? "Sim" : "Não"}</p>
<p>Pênaltis: ${final.penalties ? "Sim" : "Não"}</p>

<p>Gols: ${final.goals}</p>
<p>Cartões amarelos: ${final.yellow}</p>
<p>Cartões vermelhos: ${final.red}</p>
<p>Faltas: ${final.fouls}</p>

<p class="curiosity">${final.curiosity}</p>

</div>
`;

});

}

renderFinals();

/* ==========================================
   MAIORES CAMPEÕES
========================================== */

const championsData = [
{team:"Brasil",titles:5},
{team:"Alemanha",titles:4},
{team:"Itália",titles:4},
{team:"Argentina",titles:3},
{team:"França",titles:2},
{team:"Uruguai",titles:2},
{team:"Inglaterra",titles:1},
{team:"Espanha",titles:1}
];

const championsCards =
document.getElementById("championsCards");

function renderChampions(){

if(!championsCards) return;

championsCards.innerHTML = "";

championsData.forEach(team=>{

championsCards.innerHTML += `
<div class="champion-card fade">

<h3>${team.team}</h3>

<div class="titles">${team.titles}</div>

<p>Títulos da Copa do Mundo</p>

</div>
`;

});

}

renderChampions();

/* ==========================================
   TIMELINE HORIZONTAL
========================================== */

const timelineYears =
document.getElementById("timelineYears");

function renderTimeline(){

if(!timelineYears) return;

timelineYears.innerHTML = "";

worldCups.forEach(cup=>{

const el =
document.createElement("div");

el.className = "timeline-year fade";
el.textContent = cup.year;

el.addEventListener("click",()=>{

openModal(cup);

});

timelineYears.appendChild(el);

});

}

renderTimeline();

/* ==========================================
   MODAL
========================================== */

const modal =
document.getElementById("timelineModal");

const modalBody =
document.getElementById("modalBody");

const closeModalBtn =
document.getElementById("closeModal");

function openModal(cup){

if(!modal) return;

modal.style.display = "flex";

modalBody.innerHTML = `
<h2>${cup.year}</h2>
<p><strong>Sede:</strong> ${cup.host}</p>
<p><strong>Campeão:</strong> ${cup.champion}</p>
<p><strong>Vice:</strong> ${cup.runnerUp}</p>
<p><strong>Final:</strong> ${cup.result}</p>
`;

}

if(closeModalBtn){

closeModalBtn.addEventListener("click",()=>{

modal.style.display = "none";

});

}

window.addEventListener("click",(e)=>{

if(e.target === modal){
modal.style.display = "none";
}

});

/* ==========================================
   PARTE 3 - GRÁFICOS CANVAS (INTERATIVOS)
========================================== */

/* Dados base para gráficos */
const statsData = {
labels: worldCups.map(c => c.year),

goals: [70,70,84,88,140,126,89,89,95,97,102,146,132,115,141,171,161,147,145,171,169,172],

yellowCards: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,228,257,307,219,201],

redCards: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,4,2,4,0],

teams: [13,16,15,13,16,16,16,16,16,16,16,24,24,24,24,24,32,32,32,32,32,32]
};

/* ==========================================
   FUNÇÃO BASE DE GRÁFICO
========================================== */

function drawBarChart(canvasId, data, color, label){

const canvas = document.getElementById(canvasId);
if(!canvas) return;

const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = 320;

const width = canvas.width;
const height = canvas.height;

const max = Math.max(...data);

const barWidth = width / data.length;

ctx.clearRect(0,0,width,height);

/* título */
ctx.fillStyle = "#fff";
ctx.font = "14px Arial";
ctx.fillText(label, 10, 20);

/* barras */
data.forEach((value, index)=>{

const barHeight = (value / max) * (height - 60);

const x = index * barWidth;
const y = height - barHeight;

ctx.fillStyle = color;

ctx.fillRect(x, y, barWidth - 2, barHeight);

/* hover simples (tooltip visual fake) */
canvas.addEventListener("mousemove", (e)=>{

const rect = canvas.getBoundingClientRect();
const mouseX = e.clientX - rect.left;

if(mouseX >= x && mouseX <= x + barWidth){

ctx.fillStyle = "rgba(0,0,0,0.7)";
ctx.fillRect(x, y - 20, 60, 20);

ctx.fillStyle = "#fff";
ctx.fillText(value, x + 5, y - 5);
}

});

});

}

/* ==========================================
   RENDER GRÁFICOS
========================================== */

function renderCharts(){

drawBarChart(
"goalsChart",
statsData.goals,
"#f7b500",
"Gols por Copa"
);

drawBarChart(
"yellowChart",
statsData.yellowCards,
"#facc15",
"Cartões Amarelos"
);

drawBarChart(
"redChart",
statsData.redCards,
"#ef4444",
"Cartões Vermelhos"
);

drawBarChart(
"teamsChart",
statsData.teams,
"#3b82f6",
"Seleções Participantes"
);

}

renderCharts();

/* ==========================================
   RESPONSIVIDADE CANVAS
========================================== */

window.addEventListener("resize", ()=>{

renderCharts();

});

/* ==========================================
   PARTE 4 - ANIMAÇÕES E UX FINAL
========================================== */

/* ==========================================
   MENU MOBILE
========================================== */

const menuBtn = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click", ()=>{

navLinks.classList.toggle("active");

});

}

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{

if(window.scrollY > 400){
backToTop.style.display = "block";
}else{
backToTop.style.display = "none";
}

});

if(backToTop){

backToTop.addEventListener("click", ()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

/* ==========================================
   FADE IN AO SCROLL
========================================== */

const fadeElements = document.querySelectorAll(".fade");

function handleFade(){

fadeElements.forEach(el=>{

const rect = el.getBoundingClientRect();

if(rect.top < window.innerHeight - 100){
el.classList.add("show");
}

});

}

window.addEventListener("scroll", handleFade);
window.addEventListener("load", handleFade);

/* ==========================================
   CONTADORES ANIMADOS (HERO)
========================================== */

const counters = document.querySelectorAll(".counter");

function animateCounters(){

counters.forEach(counter=>{

const update = ()=>{

const target = +counter.getAttribute("data-target");
const value = +counter.innerText;

const increment = target / 100;

if(value < target){

counter.innerText = Math.ceil(value + increment);

setTimeout(update, 20);

}else{
counter.innerText = target;
}

};

update();

});

}

/* ativar quando carregar */
window.addEventListener("load", animateCounters);

/* ==========================================
   SCROLL SUAVE EM LINKS
========================================== */

document.querySelectorAll("a[href^='#']")
.forEach(anchor=>{

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({
top:target.offsetTop - 80,
behavior:"smooth"
});

navLinks.classList.remove("active");
}

});

});

/* ==========================================
   ANIMAÇÃO DE ENTRADA DE CARDS
========================================== */

function revealCards(){

const cards =
document.querySelectorAll(".final-card, .champion-card");

cards.forEach((card, i)=>{

setTimeout(()=>{

card.classList.add("show");

}, i * 80);

});

}

window.addEventListener("load", revealCards);

/* ==========================================
   MELHORIA: MODAL ESC (TECLADO)
========================================== */

document.addEventListener("keydown", (e)=>{

if(e.key === "Escape"){

const modal =
document.getElementById("timelineModal");

if(modal){
modal.style.display = "none";
}

}

});

/* ==========================================
   ACTIVE LINK SCROLL (MENU)
========================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(window.scrollY >= sectionTop - 100){
current = section.getAttribute("id");
}

});

document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.classList.remove("active-link");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active-link");
}

});

});