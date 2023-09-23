const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');

let path = window.location.pathname

console.log(path)

switch(path) {
  case '/':
    one.classList.add('header_nav_item_active');
    two.classList.remove('header_nav_item_active');
    three.classList.remove('header_nav_item_active');
    four.classList.remove('header_nav_item_active');
    five.classList.remove('header_nav_item_active');
    break;
  case '/pages/about.html':
    two.classList.add('header_nav_item_active');
    one.classList.remove('header_nav_item_active');
    three.classList.remove('header_nav_item_active');
    four.classList.remove('header_nav_item_active');
    five.classList.remove('header_nav_item_active');
    break;
  case '/pages/services.html':
    three.classList.add('header_nav_item_active');
    two.classList.remove('header_nav_item_active');
    one.classList.remove('header_nav_item_active');
    four.classList.remove('header_nav_item_active');
    five.classList.remove('header_nav_item_active');
    break;
  case '/pages/donates.html':
    four.classList.add('header_nav_item_active');
    two.classList.remove('header_nav_item_active');
    three.classList.remove('header_nav_item_active');
    one.classList.remove('header_nav_item_active');
    five.classList.remove('header_nav_item_active');
    break;
  case '/pages/contact.html':
    five.classList.add('header_nav_item_active');
    two.classList.remove('header_nav_item_active');
    three.classList.remove('header_nav_item_active');
    four.classList.remove('header_nav_item_active');
    one.classList.remove('header_nav_item_active');
    break;
}