let compteur = 0
let totalCards = 0
const cardsData = JSON.parse(localStorage.getItem("cards"))
cardsData.forEach((card) => {
  totalCards++
  if(!card.isLocked) {
    compteur++
  }
})

document.querySelector("#nb_compteur p").textContent = `${compteur}/${totalCards}`

const url = new URL(window.location.href)
const id = url.searchParams.get("id")

const index = cardsData.findIndex((card) => card.id === id) // un fichier pour chaque page

cardsData[index].isLocked = false

localStorage.setItem("cards", JSON.stringify(cardsData))