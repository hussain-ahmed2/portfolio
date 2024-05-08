const navTogglerBtn = document.getElementById('nav-toggler');
const navItemsForMobile = document.getElementById('nav-items-for-mobile');

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
