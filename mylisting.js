// MyListing

let cards = document.querySelector(".cards");

async function getMyListings() {
  let jwt = window.localStorage.getItem("jwt");

  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${jwt}`,
    },
  };

  let apiRequest = await fetch("http://localhost:3023/myListing", request);
  let response = await apiRequest.json();

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

    let btn = document.querySelector(`.btnDelete-${listing._id}`);
    btn.addEventListener("click", () => {
      deleteListing(listing._id);
    });

    let btn2 = document.querySelector(`.btnEdit-${listing._id}`);
    btn2.addEventListener("click", () => {
      editListing(listing._id, listing);
    });
  });
}

getMyListings();
