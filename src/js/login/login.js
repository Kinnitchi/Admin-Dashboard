function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)

  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  verifiedEmail.textContent = data.email_verified
  picture.setAttribute("src", data.picture)

  console.log(data)

}

window.onload = function () {
  // const clientID = window.prompt("299043385575-vhfmdi7p0gi1ejuiat439mipqs9mi6jb.apps.googleusercontent.com", "");

  const id = '299043385575-vhfmdi7p0gi1ejuiat439mipqs9mi6jb.apps.googleusercontent.com'

  google.accounts.id.initialize({
    client_id: id,
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "pill",
      locale: "pt-BR",
      logo_alignment: "left",
    } // btn customization
  );

  google.accounts.id.prompt();
}