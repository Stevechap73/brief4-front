let cards = document.querySelector(".cards");

async function getAllListings() {
  let apiCall = await fetch("http://localhost:3023/all");
  let response = await apiCall.json();
  console.log(response);

  response.forEach((listing) => {
    cards.innerHTML += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">'${listing.title}'</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">'${listing.orgnizer}'</h6>
                        <p class="card-text">
                        '${listing.descriptionTrip}'
                        </p>
                        <a href="#" class="card-link">
                        '${listing.releaseDate}'
                        </a>
                        <a href="#" class="card-link">
                        '${listing.startTime}'
                        </a>
                        </div>
                        </div>;`;
  });
}
