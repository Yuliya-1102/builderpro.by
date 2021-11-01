

var costet = document.getElementById("costet");
var costPhone = document.getElementById("cost-phone");
var orderPhone = document.getElementById("order_phone");
orderPhone.addEventListener("click", costPhon);
function costPhon(){
orderPhone.classList.add("orderScript");
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  costet.innerHTML = '<span><a href="tel:+375333200891">+375 (33) 32-00-891</a></span>';
  costPhone.innerHTML = '<span><a href="tel:+375296683500">+375 (29) 66-83-500</a></span>'; 
 } else	{
  costet.innerHTML = '<span>+375 (33) 32-00-891</span>';
  costPhone.innerHTML = '<span>+375 (29) 66-83-500</span>';
}
}

// http://tods-blog.com.ua/web-development/tel-link/

// НОМЕР ТЕЛЕФОНА
 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementById("header-phone").innerHTML = '<span><a href="tel:+375333200891">+375 (33) 32-00-891</a></span>';
  document.getElementById("header-phone2").innerHTML = '<span><a href="tel:+375296683500">+375 (29) 66-83-500</a></span>'; 
 } else	{
  document.getElementById("header-phone").innerHTML = '<span>+375 (33) 32-00-891</span>';
  document.getElementById("header-phone2").innerHTML = '<span>+375 (29) 66-83-500</span>';
}


// BURGER

function burgerRotate(event) {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu_aktive');
	const logo = document.querySelector('.header__logo__navigation');
	
	// burger.classList.add('aktive');	
	menu.classList.add('active');
	// console.log()  
}
document.querySelector('.burger').addEventListener('click', burgerRotate);


 function burgerRotateNone(event) {
	const menu = document.querySelector('.menu_aktive');
		
	menu.classList.remove('active');
}
document.querySelector('.burger-active').addEventListener('click', burgerRotateNone);


const menuNavigation = (event) => {
	const menu = document.querySelector('.menu_aktive');
	const navigationNav = document.querySelector('.navigation-nav');
	document.querySelectorAll('li').forEach(li => li.classList.remove('navigation-nav'));
	event.target.closest('li').classList.add('navigation-nav');
	if (event.target) {
		menu.classList.remove('active');
		return;
	}

	
}

document.querySelector('.menu__navigation').addEventListener('click', menuNavigation);
