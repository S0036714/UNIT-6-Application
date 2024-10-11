let userNameBox,passwordBox,button,greeting;

function setup() {
  let size = windowWidth - windowWidth/10;
  createCanvas(size, windowHeight);
  background(208,204,204);
  userNameBox = createInput();
  userNameBox.attribute('placeholder','Enter username');
  userNameBox.position(size/4,65)

  passwordBox = createInput();
  passwordBox.attribute('placeholder','Enter password');
  passwordBox.position(size/4,100)

  button = createButton('Submit')
  button.class("buttonClass")
  button.position(size/3,passwordBox.y + 40)
  button.mousePressed(login)

  greeting = createElement('h2', 'Login')
  greeting.position(20,5)

}
function login (){
 let userName = userNameBox.value()
 let password = passwordBox.value()

if (userName == "user" && password == "pass"){
  localStorage.setItem("userName",userName)
  localStorage.setItem("password",password)
  window.open("homepage.html","_self")

}

}
function draw() {

}