var handleCredentialResponse = response => {
  const data = jwt_decode(response.credential);

  document.getElementById("fullName").innerHTML = data.name;
  document.getElementById("given_name").innerHTML = data.given_name;
  document.getElementById("familyName").innerHTML = data.family_name;
  document.getElementById("email").innerHTML = data.email;
  document.getElementById("picture").setAttribute("src", data.picture);
}

var initGoogleAccounts = () => {
  const clientId = "299043385575-vhfmdi7p0gi1ejuiat439mipqs9mi6jb.apps.googleusercontent.com";

  google.accounts.id.initialize({
    client_id: clientId,
    callback: handleCredentialResponse,
  });

  const buttonEl = document.querySelector(".button-google");
  google.accounts.id.renderButton(buttonEl, {
    theme: "outline",
    size: "large",
    type: "standard",
    locale: "pt-BR",
    logo_alignment: "left",
  });

  google.accounts.id.prompt();
};

var validateInput = input => {
  if (!input.value) {
    input.classList.add("error");
    input.placeholder = `${input.id} is invalid!`;
  }
};

var loginUser = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const rememberCheckbox = document.querySelector('#remember');
  const error = document.querySelector('#error-login');

  if (!username || !password) {
    validateInput(document.querySelector('#username'));
    validateInput(document.querySelector('#password'));
    return;
  }

  const user = users.find(user => user.login === username && user.password === password);

  if (user) {
    if (user.role === 'admin') {

      window.location.href = "http://localhost:5500/index.html";

    } else if (user.role === 'user') {
      error.innerHTML = 'Usuário não tem permissão para acessar o sistema!';
    }
    if (rememberCheckbox.checked) {
      localStorage.setItem('user', JSON.stringify(user.login));
      localStorage.setItem('password', JSON.stringify(password));
    }
  } else {
    error.innerHTML = 'Usuário ou senha inválidos!';

  }
}

var loginButton = document.querySelector('.btn-login');

window.addEventListener("load", () => {
  initGoogleAccounts();
  loginButton.addEventListener('click', loginUser);
});