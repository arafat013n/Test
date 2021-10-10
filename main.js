console.log('Hello World!');

// menu start
var menuBar = document.getElementById('menuBar');
var menu = document.getElementById('menu');

menuBar.onclick = () => {
   menu.classList.toggle('active');
}

// menu end

// login section start
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
// login section end


// more content hide & show start

var more1 = document.querySelector('.more-1');
var more2 = document.querySelector('.more-2');
var more3 = document.querySelector('.more-3');
var more4 = document.querySelector('.more-4');
var more5 = document.querySelector('.more-5');
var more6 = document.querySelector('.more-6');
var more7 = document.querySelector('.more-7');
var more8 = document.querySelector('.more-8');
var more9 = document.querySelector('.more-9');
var more10 = document.querySelector('.more-10');


for (var i = 0; i < 10; i++) {
   var moreBtn = document.querySelectorAll('.moreBtn')[i];
   moreBtn.addEventListener('click', function() {

      var btn = this.value;
      console.log(btn);

      switch (btn) {
         case "btn1":
            more1.classList.toggle('active');
            break;
         case "btn2":
            more2.classList.toggle('active');
            break;
         case "btn3":
            more3.classList.toggle('active');
            break;
         case "btn4":
            more4.classList.toggle('active');
            break;
         case "btn5":
            more5.classList.toggle('active');
            break;
         case "btn6":
            more6.classList.toggle('active');
            break;
         case "btn7":
            more7.classList.toggle('active');
            break;
         case "btn8":
            more8.classList.toggle('active');
            break;
         case "btn9":
            more9.classList.toggle('active');
            break;
         case "btn10":
            more10.classList.toggle('active');
            break;
      }
   });
}

// more content hide & show end