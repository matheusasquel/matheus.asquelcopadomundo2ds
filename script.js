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