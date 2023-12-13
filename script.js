let output = document.getElementById("output");

getData();

async function getData() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
  let data = await response.json();
  output.innerHTML = "Testdata:<br>";
  output.innerHTML += data["name"];
}
