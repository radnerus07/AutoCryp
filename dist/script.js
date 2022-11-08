var button = document.querySelector('.ham-button')
var slide = document.querySelector('.mobile-nav')

button.addEventListener('click', () => {
  slide.classList.toggle('display');
  button.children[0].classList.toggle('toggle1')
  button.children[1].classList.toggle('toggle2')
  button.children[2].classList.toggle('toggle3')
})

function changeBg() {
  var navbar = document.getElementById('nav');
  var scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove('nav-bgcolor');
  } else {
    navbar.classList.add('nav-bgcolor');
  }
}

window.addEventListener('scroll', changeBg);


function changeText() {
  document.getElementById("chngeprice1").innerHTML = "$100";
  document.getElementById("chngeprice2").innerHTML = "$290";
  document.getElementById("chngeprice3").innerHTML = "$490";
  document.getElementById("chngetext1").innerHTML = "Per Year";
  document.getElementById("chngetext2").innerHTML = "Per Year";
  document.getElementById("chngetext3").innerHTML = "Per Year";


}

function revertBack() {
  document.getElementById("chngeprice1").innerHTML = "$10";
  document.getElementById("chngeprice2").innerHTML = "$29";
  document.getElementById("chngeprice3").innerHTML = "$49";
  document.getElementById("chngetext1").innerHTML = "Per Month";
  document.getElementById("chngetext2").innerHTML = "Per Month";
  document.getElementById("chngetext3").innerHTML = "Per Month";
}

const slider = document.querySelector('.carousleslide-items');
const cards = document.querySelectorAll('.carousle-cards');
const dots = document.querySelectorAll('.dot');

let slideWidth = cards[0].offsetWidth + 50;
// console.log(cards)
let activeDotNum = 0;

dots.forEach((slideItem) => {
  const slideNumber = slideItem.getAttribute('data-slide');
  slideItem.addEventListener('click', () => {
    cards[0].style.marginLeft = -(slideNumber - 1) * slideWidth + "px";
  })
})
dots.forEach((dot, idx) => {
  dot.setAttribute('data-num', idx);

  dot.addEventListener('click', e => {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) { return; }
    else {
      dots[activeDotNum].classList.remove('active');
      cards[activeDotNum].classList.remove('active-card');
      dots[clickedDotNum].classList.add('active');
      cards[clickedDotNum].classList.add('active-card');
      activeDotNum = clickedDotNum;
    }
  });
});