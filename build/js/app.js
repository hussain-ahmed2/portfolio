const navTogglerBtn = document.getElementById('nav-toggler');
const navItemsForMobile = document.getElementById('nav-items-for-mobile');
const navLink = document.getElementsByClassName('nav-link');
const movNavLink = document.getElementsByClassName('mov-nav-link');
const projectContainer = document.getElementById('small-projects');
const year = document.getElementById('date');
const date = new Date();

let mobileNavbarIsActive = false;
const navToggleFunction = () => {
  navItemsForMobile.style.display === 'flex'? navItemsForMobile.style.display = 'none': navItemsForMobile.style.display = 'flex';
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');

  if(!mobileNavbarIsActive){
    line2.style.display = 'none';
    line1.style.transform = 'rotate(45deg)';
    line1.style.position = 'absolute'
    line3.style.transform = 'rotate(-45deg)';
    mobileNavbarIsActive = true;
  }else{
    line2.style.display = 'block';
    line1.style.transform = 'rotate(0deg)';
    line1.style.position = 'relative'
    line3.style.transform = 'rotate(0deg)';
    mobileNavbarIsActive = false;
  }
}

navTogglerBtn.addEventListener('click', navToggleFunction);
navItemsForMobile.addEventListener('click', navToggleFunction);

for(let i=0; i<navLink.length; i++){
  navLink[i].addEventListener('click',function(){
    const current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
    this.classList.add('active');
  })
}

for(let i=0; i<movNavLink.length; i++){
  movNavLink[i].addEventListener('click',function(){
    const current = document.getElementsByClassName('active');
    current[1].classList.remove('active');
    this.classList.add('active');
  })
}

const projectList = [
  {
    title: 'Currency Converter',
    src: './img/currency-converter.png',
  },
  {
    title: 'Basic Calculator',
    src: './img/basic-calculator.png',
  },
  {
    title: 'Roman Numeral Converter',
    src: './img/roman-numeral-converter.png',
  },
  {
    title: 'Palindrome Checker',
    src: './img/palindrome-checker.png',
  },
  {
    title: 'Clock',
    src: './img/clock.png',
  },
  {
    title: 'Tic Tac Toe',
    src: './img/tic-tac-toe.png',
  },
  {
    title: 'Uncover Game',
    src: './img/uncover-small-game.png'
  }
];

projectList.map((e) => {
  const card = `
    <div class="project-card">
      <img class="project-img" src="${e.src}" alt="${e.title}">
      <div class="project-title">${e.title}</div>
    </div>
    `;
  projectContainer.innerHTML += card; 

});

year.innerText = date.getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('skill-item-show', entry.isIntersecting);
  })
}, {
  rootMargin: '100px'
})

const skillCard = document.querySelectorAll('.skill-item');
skillCard.forEach(el => observer.observe(el));

const projectCard = document.querySelectorAll('.project-card');
projectCard.forEach(el => observer.observe(el));