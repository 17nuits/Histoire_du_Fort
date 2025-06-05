const map = L.map('map', {
  zoomControl: false // pas de boutons zoom
}).setView([43.09426508666567, 5.893304735524395], 18)

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
}).addTo(map)

const customIcon = L.icon({
    iconUrl: './images/marqueur_before.png',
    iconSize: [32, 41],
    iconAnchor: [16, 45], // point d'attache sur l'image
    popupAnchor: [0, 200],
})

const contentRade = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi2.html?id=carte2"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte2.png" alt="">
                        </div>
                      </div>`

const contentGlacis_chemins = `<div class="fermer">
                                <a class="close_link" href="index.html">
                                  <img src="./images/fleche_retour.png" alt="Flèche retour">
                                  <p>retour</p>
                                </a>
                              </div>
                              <div class="cartes-container">
                                <div class="stroke">
                                    <a href="poi3.html?id=carte3"><img src="./images/carte_stroke.png" alt=""></a>
                                </div>
                                <div class="img_carte">
                                    <img src="./images/img_carte3.png" alt="">
                                </div>
                              </div>`

const contentDouves = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi4.html?id=carte4"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte4.png" alt="">
                        </div>
                      </div>`

const contentSixFours = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi5.html?id=carte5"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte5.png" alt="">
                        </div>
                      </div>`

const contentSablettes = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi6.html?id=carte6"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte6.png" alt="">
                        </div>
                      </div>`
                        
const contentFin = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi7.html?id=carte7"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte7.png" alt="">
                        </div>
                      </div>`  

const contentDebut = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi1.html?id=carte1"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte1.png" alt="">
                        </div>
                      </div>` 

function addCenteredMarker(lat, lng, icon, popupContent) {
  const marker = L.marker([lat, lng], { icon }).addTo(map)
  marker.bindPopup(popupContent)

  marker.on("click", () => {
    marker.openPopup()
  })
  return marker
}

const debut = addCenteredMarker(43.093891436432344, 5.894060887361602, customIcon, contentDebut)
const rade = addCenteredMarker(43.094541, 5.894143, customIcon, contentRade)
const glacisChemins = addCenteredMarker(43.094706, 5.893048, customIcon, contentGlacis_chemins)
const douves = addCenteredMarker(43.09428786752031, 5.892970139717544, customIcon, contentDouves)
const sixFours = addCenteredMarker(43.09439533756529, 5.892834939964796, customIcon, contentSixFours)
const sablettes = addCenteredMarker(43.09354748975822, 5.8930319617373605, customIcon, contentSablettes)
const fin = addCenteredMarker(43.09360606207853, 5.893696466445446, customIcon, contentFin)

// calculer la distance entre deux points
function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

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
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  let userMarker = null
  if (!userMarker) {
    userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
  } else {
    userMarker.setLatLng([lat, lng]);
  }
}

const cards = [
  {
    id: "carte1",
    isLocked: true,
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

if(!localStorage.getItem("cards")) {
  localStorage.setItem("cards", JSON.stringify(cards))
}

const cardsData = JSON.parse(localStorage.getItem("cards"))

const seuil = 25
  pois.forEach(poi => {
    const distance = getDistanceFromLatLonInMeters(lat, lng, poi.lat, poi.lng)
    if (distance < seuil) {
      poi.marker.openPopup()
    }
  })