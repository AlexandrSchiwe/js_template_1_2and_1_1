// console.log("it works");

// level 1.1 =================================================================

let firstName = "Alex";
let lastName = "Schiwe";
let age = "28";
let birthplace = "Deutschland";
let height = "1,79m";
let weight = "75kg";
let hobby = "javascript";
let food = "javascript";
let sports = "javascript";
let fashion = "javascript";
let season = "javascript";
let vacation = "Javascript Island";

console.log(`Hallo mein Name ist ${firstName} ${lastName} und ich bin ${age} Jahre alt. Ich bin in ${birthplace} geboren und bin ${height} groß und wiege ${weight}. Meine Hobbys sind ${hobby} und am liebesten esse ich ${food}. In meiner freizeit mache ich gerne ${sports} und meine liebslings Modemarken sind ${fashion}. Meine Lieblings Jahreszeit ist ${season} und am liebsten mache ich Urlaub auf ${vacation}.`);

// level 1.2 =================================================

let lunatic = "The lunatic ";

let paper = "The paper holds their folded faces to the floor";

let lunatics = "The lunatics"

let grass = "is on the grass";

let hall = "are in my hall";

let and = "And";

let paperboy = "every day the paperboy brings more";

let text = document.getElementById("songtext");

text.innerHTML = (`${lunatic.concat(grass)} <br> ${lunatic.concat(grass)} <br> Remembering games and daisy chains and laughs <br> Got to keep the loonies on the path <br> <br> ${lunatic} is in the hall <br> ${lunatics} ${hall} <br> ${paper} <br> ${and} ${paperboy}`);