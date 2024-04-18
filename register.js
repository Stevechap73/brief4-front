// Register

async function handleRegister() {
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let age = document.querySelector(".age").value;
  let ville = document.querySelector(".ville").value;
  let gender = document.querySelector(".gender").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  let member = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    ville: ville,
    gender: gender,
    email: email,
    password: password,
  };

  console.log(member);
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(member),
  };

  let apiRequest = await fetch("http://localhost:3023/register", request);

  let reponse = await apiRequest;

  console.log("myresponse ", reponse.status);
  if (reponse.status === 200) {
    let toast = document.querySelector(".toast1");
    toast.classList.remove("hidden");
    toast.innerText = "Inscription réussie";
    toast.style.backgroundColor = "lightgreen";
    toast.style.textAlign = "center";
    toast.style.color = "white";
    console.log("Inscription réussie");

    setTimeout(() => {
      window.location.href = "./login.html";
      toast.classList.add("hidden");
    }, 3000);
  } else {
    console.log("je suis dans la partie ou le status est a 400");
    let toast = document.querySelector(".toast1");
    toast.classList.remove("hidden");
    toast.innerText = "Merci de remplir tous les champs";
    toast.style.textAlign = "center";
    toast.style.backgroundColor = "lightpink";
    toast.style.color = "white";
    console.log("je suis à la fin ");
  }
}
