console.log('Hello World!');
var menuBar = document.getElementById('menuBar');
var menu = document.getElementById('menu');

menuBar.onclick = () => {
   menu.classList.toggle('active');
}


var profileBtn = document.getElementById('profile');
var logMenu = document.getElementById('log');
var closeMenu = document.getElementById('close');

profileBtn.onclick = () => {
   logMenu.classList.add('active')
   menu.classList.remove('active');
}

closeMenu.onclick = () => {
   logMenu.classList.remove('active');
}



var moreBtn = document.getElementById('moreBtn');
var moreContent = document.getElementById('moreContent');

moreBtn.onclick = () => {
   moreContent.classList.toggle('active');
}

