// compteur sur chaque page où il doit s'afficher (fichier différent)
// pour le compteur, sur les pages où je dois l'afficher, il faut :
  // faire une variable de compteur (initialisée à 0)
  // récupérer les données du localStorage pour mettre à jour le compteur si la carte est déverouillée
  // afficher le compteur dans le DOM

let compteur = 0
let totalCards = 0
const cardsData = JSON.parse(localStorage.getItem("cards"))
cardsData.forEach((card) => {
  totalCards++
  if(!card.isLocked) {
    counter++
  }
})

// sélectionner dans la page HTML l'élément qui va contenir l'affichage du compteur 
document.querySelector("#nb_compteur").textContent = `${counter}/${totalCards}`

const url = new URL(window.location.href)
const id = url.searchParams.get("id")

// const cardsData = JSON.parse(localStorage.getItem("cards"))

//trouver l'index de la carte à déverouiller grâce à son id
const index = cardsData.findIndex((card) => card.id === id) // un fichier pour chaque page

cardsData[index].isLocked = false

//mettre à jour dans le localStorage avec les nvles données
localStorage.setItem("cards", JSON.stringify(cardsData))