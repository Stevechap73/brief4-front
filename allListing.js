let cards = document.querySelector(".cards");

async function getAllListings() {
  let apiCall = await fetch("http://localhost:3023/all");
  let response = await apiCall.json();
  console.log(response);

  response.forEach((listing) => {
    cards.innerHTML += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${listing.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${listing.orgnizer}</h6>
                        <p class="card-text">
                        ${listing.descriptionTrip}
                        </p>
                        <p class="card-text">Nombre de places : 
                        ${listing.nbPlaces}
                        </p>
                        <p class="card-text">Adresse de rendez-vous : 
                        ${listing.appointmentAddress}
                        </p>
                        <p class="card-text">Date de départ : 
                        ${listing.releaseDate}
                        </p>
                        <p class="card-text">Heure de départ :
                        ${listing.startTime}
                        </p>
                        </div>
                        </div>;`;
  });
}
getAllListings();
