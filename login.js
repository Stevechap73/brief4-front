// login

async function handleLogin() {
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  let member = {
    email: email,
    password: password,
  };
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(member),
  };

  let apiRequest = await fetch("http://localhost:3023/login", request);
  let reponse = await apiRequest;

  console.log("myresponse ", reponse.status);
  console.log(reponse.status);
  if (reponse.status === 200) {
    const data = await reponse.json();
    window.localStorage.setItem("jwt", data.jwt);

    let toast = document.querySelector(".toast2");
    toast.innerText = "Connexion réussie";
    toast.style.textalign = "center";
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
}
