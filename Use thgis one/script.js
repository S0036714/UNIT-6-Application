let userNameBox, passwordBox, button, greeting, logo;

function setup() {
  let size = windowWidth - windowWidth / 10;
  createCanvas(size, windowHeight);

  
  logo = createImg('iconmonstr-language-11-240.png');
  logo.class('logoClass');
  logo.position(size / 8 - logo.width / 8 , 8)


  greeting = createElement('h2', 'Login');
  greeting.position(size / 2 - greeting.width / 2, logo.y + logo.height + 10);

  
  userNameBox = createInput();
  userNameBox.attribute('placeholder', 'Enter username');
  userNameBox.position(size / 3, greeting.y + 70);

  
  passwordBox = createInput();
  passwordBox.attribute('placeholder', 'Enter password');
  passwordBox.position(size / 3, userNameBox.y + 65);

  
  button = createButton('Submit');
  button.class("buttonClass");
  button.position(size / 3, passwordBox.y + 40);
  button.mousePressed(login);
}

function login() {
  let userName = userNameBox.value();
  let password = passwordBox.value();

  if (userName == "user" && password == "pass") {
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    window.open("homepage.html", "_self");
  }
}

function draw() {}