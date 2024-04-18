async function createListing() {
  let title = document.querySelector(".title").value;
  let orgnizer = document.querySelector(".orgnizer").value;
  let releaseDate = document.querySelector(".releaseDate").value;
  let startTime = document.querySelector(".startTime").value;
  let descriptionTrip = document.querySelector(".descriptionTrip").value;
  let nbPlaces = document.querySelector(".nbPlaces").value;
  let appointmentaddress = document.querySelector(".appointmentaddress").value;
  let memberId = window.localStorage.getItem("id");

  let listing = {
    title: title,
    orgnizer: orgnizer,
    releaseDate: releaseDate,
    startTime: startTime,
    descriptionTrip: descriptionTrip,
    nbPlaces: nbPlaces,
    appointmentaddress: appointmentaddress,
    memberId: memberId,
  };

  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(listing),
  };

  let apiRequest = await fetch("http://localhost:3023/createListing", request);
  let response = await apiRequest;
  console.log(response);
  if (response.status === 200) {
    console.log(response);

    let toast = document.querySelector(".toast2");
    toast.innerText = "Connexion réussie";
    toast.style.textAlign = "center";
    toast.style.backgroundColor = "lightgreen";
    toast.style.color = "white";

    setTimeout(() => {
      window.location.href = "./login.html";
      toast.classList.add("hidden");
    }, 3000);
  } else {
    console.log("je suis dans la partie ou le status est a 400");
    let toast = document.querySelector(".toast2");
    toast.classList.remove("hidden");
    toast.innerText = "Merci de remplir tous les champs";
    toast.style.textAlign = "center";
    toast.style.backgroundColor = "lightpink";
    toast.style.color = "white";
    console.log("je suis à la fin ");
  }

  // window.location.href = "./allListings.html";
}
