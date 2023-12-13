let output = document.getElementById("output");
let data = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

output.innerHTML = "Testdata:<br>";
output.innerHTML += data;
