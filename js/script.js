const perroActualElement = document.getElementById("Perro");
const API = "https://dog.ceo/api/breeds/image/random";

document.getElementById("siguiente").addEventListener("click", nuevo)
async function nuevo() {
    perroActualElement.classList.toggle("escondido", true);
    const res = await fetch(API);
    const resJson = await res.json();
    perroActualElement.src = resJson.message;
    perroActualElement.classList.toggle("escondido", false);
}

nuevoPerro();