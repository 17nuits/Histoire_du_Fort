// ça on le met dans la frise (dans un autre fichier)
let isLeft = true

cardsData.forEach((card) => {
  //récupérer élément html et l'injecter dans le DOM
  // si carte déverouillée : affiche titre et carte retournée dans le bon sens 
  // si la carte est vérouillée : affiche ??? pour titre et le dos de la carte

  const left = `<div class="triangle-gauche">
                  <img src="./images/triangle-gauche.svg" alt="Triangle">
                </div>`

  const right = `<div class="triangle-droite">
                    <img src="./images/triangle-droite.svg" alt="Triangle">
                </div>`

  const templateUnlocked = `<div class="cartes ${isLeft ? 'bloc-gauche' : 'bloc-droite'}">
                              <a href="${card.pageURL}"><img src="${card.imageURL}" alt="${card.title}"></a>
                              <h3>${card.title}</h3>
                            </div>
                            <div class="rond"></div>`

  const templateLocked = `<div class="cartes ${isLeft ? 'bloc-gauche' : 'bloc-droite'}">
                            <img src="./images/cartedos.png" alt="???">
                            <h3>???</h3>
                          </div>
                          <div class="rond"></div>`

  // sélectionner l'élément html dans lequel on va injecter le template
  const element = document.querySelector(".ligne") 
  
  if(card.isLocked) {
    element.insertAdjacentHTML('beforeend', templateLocked)
  } else {
    element.insertAdjacentHTML('beforeend', templateUnlocked)
  }
  element.insertAdjacentHTML('beforeend', isLeft ? left : right)
  isLeft = !isLeft //inverser la valeur de isLeft pour alterner entre gauche droite
})