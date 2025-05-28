const map = L.map('map', {
  zoomControl: false // pas de boutons zoom
}).setView([43.09426508666567, 5.893304735524395], 18); // [latitude, longitude], zoom de base sur la map

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
}).addTo(map); //là on a une map en gros

// Rade.bindPopup("Contenu de la popup") //on peut mettre du html dans la popup

const customIcon = L.icon({
    iconUrl: './images/marqueur_before.png',
    iconSize: [32, 41],
    iconAnchor: [16, 45], // point d'attache sur l'image
})

const contentRade = `<h1>Position stratégique</h1>
                    <p>Ici, on parle des Ennemis de la République.</p>
                    <a href="poi2.html?id=carte2">Voir plus >></a>`

const contentGlacis_chemins = `<h1>Contrôler sans être vu</h1>
                                <p>Ici, on cause architecture.</p>
                                <a href="poi3.html?id=carte3">Voir plus >></a>`

const contentDouves = `<h1>L'ennemi piégé</h1>
                        <p>L'eau glouglou en gros ils se noyaient ces gros neuils.</p>
                        <a href="poi4.html?id=carte4">Voir plus >></a>`

const contentSixFours = `<h1>Défense en réseau</h1>
                        <p>Communication en sémaphores.</p>
                        <a href="poi5.html?id=carte5">Voir plus >></a>`

const contentSablettes = `<h1>Fort de mer</h1>
                        <p>Guette la anse des Sablettes.</p>
                        <a href="poi6.html?id=carte6">Voir plus >></a>`
                        
const contentFin = `<h1>À travers le temps</h1>
                        <p>Seconde Guerre Mondiale tout ça tout ça.</p>
                        <a href="poi7.html?id=carte7">Voir plus >></a>`  

const contentDebut = `<h1>Mise en contexte</h1>
                    <p>Seconde Guerre Mondiale tout ça tout ça.</p>
                    <a href="poi1.html?id=carte1">Voir plus >></a>` 
                
const Rade = L.marker([43.094541, 5.894143], { icon: customIcon }).addTo(map)
Rade.bindPopup(contentRade) // pour ajouter une popup au Rade, on utilise la méthode bindPopup() sur notre marqueur

const Glacis_chemins = L.marker([43.094706, 5.893048], { icon: customIcon }).addTo(map)
Glacis_chemins.bindPopup(contentGlacis_chemins)

const douves = L.marker([43.09428786752031, 5.892970139717544], { icon: customIcon }).addTo(map)
douves.bindPopup(contentDouves)

const SixFours = L.marker([43.09439533756529, 5.892834939964796], { icon: customIcon }).addTo(map)
SixFours.bindPopup(contentSixFours)

const Sablettes = L.marker([43.09354748975822, 5.8930319617373605], { icon: customIcon }).addTo(map)
Sablettes.bindPopup(contentSablettes)

const Fin = L.marker([43.09360606207853, 5.893696466445446], { icon: customIcon }).addTo(map)
Fin.bindPopup(contentFin)

const Debut = L.marker([43.093891436432344, 5.894060887361602], { icon: customIcon }).addTo(map)
Debut.bindPopup(contentDebut)

// on peut ajouter un event sur le marqueur

// Rade.on("click", fonctionClicSurPoi)

// function fonctionClicSurPoi(e) {
//     // on récupère les coordonnées de l'événement
//     const latlng = e.latlng
//     // accéder à la latitude et longitude avec latlng.lat et latlng.lng 
//     console.log(latlng)
//     // au clic sur LargestContentfulPaint, on va ajouter une description sous la map
//     const description = `<article>
//                             <h2>quoicoubeh</h2>
//                             <p>ça c la description en gros</p>
//                         </article>`
//     // ne pas oublier de l'injecter dans le DOM
//     const map= document.querySelector("#map")
//     map.insertAdjacentHTML('afterend', description)
// }

navigator.geolocation.watchPosition(fonctionSucces, fonctionErreur)

function fonctionErreur(error) {
    switch(error.code){
        case error.PERMISSION_DENIED:
            console.log("L'utilisateur a refusé la demande de géolocalisation.")
            break; //fermeture : le code sort de la condition
        case error.POSITION_UNAVAILABLE:
            console.log("Les informations sur la position sont indisponibles.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("Une erreur inconnue s'est produite.")
            break;
    }
}

const userIcon = L.icon({
  iconUrl: './images/user_marker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 45],
})

function fonctionSucces(position) {
    // console.log(position.coords)
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    // map.setView([lat, lng], 18)
    let userMarker = null
    if (!userMarker) {
    userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
  } else {
    userMarker.setLatLng([lat, lng]);
  }
}

const cards = [
  {
    id: "carte1", // doit être unique
    isLocked: true, // (ici le poi est déjà ajouté)
    imageURL: "./images/carte1.png",
    title: "Mise en contexte",
    pageURL: "poi1.html?id=carte1",
  },
  {
    id: "carte2",
    isLocked: true,
    imageURL: "./images/carte2.png",
    title: "Position stratégique",
    pageURL: "poi2.html?id=carte2",
  },
  {
    id: "carte3",
    isLocked: true,
    imageURL: "./images/carte3.png",
    title: "Contrôler sans être vu",
    pageURL: "poi3.html?id=carte3",
  },
  {
    id: "carte4",
    isLocked: true,
    imageURL: "./images/carte4.png",
    title: "L'ennemi piégé",
    pageURL: "poi4.html?id=carte4",
  },
  {
    id: "carte5",
    isLocked: true,
    imageURL: "./images/carte5.png",
    title: "Défense en réseau",
    pageURL: "poi5.html?id=carte5",
  },
  {
    id: "carte6",
    isLocked: true,
    imageURL: "./images/carte6.png",
    title: "Fort de mer",
    pageURL: "poi6.html?id=carte6",
  },
  {
    id: "carte7",
    isLocked: true,
    imageURL: "./images/carte7.png",
    title: "À travers le temps",
    pageURL: "poi7.html?id=carte7",
  },
]

// stocker cards dans le localStorage s'il n'existe pas déjà
if(!localStorage.getItem("cards")) {
  localStorage.setItem("cards", JSON.stringify(cards))
}

//récupérer les données du localStorage
const cardsData = JSON.parse(localStorage.getItem("cards"))
