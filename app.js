function askContactInfo() {
  let name = prompt("Wie heißt du?");
  let email = prompt("Wie lautet deine E-Mail-Adresse?");
  newsletterSignup(name);
}
function newsletterSignup(name) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Vielen Dank, ${name} 🤩! <br/> Du bist für den Newsletter angemeldet.`;
}
let button = document.querySelector("button");
button.addEventListener("click", askContactInfo);
