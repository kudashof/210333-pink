var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var siteList = document.querySelector('.main-nav__site-list');
var pageHeader = document.querySelector('.page-header');
var toggleBtn = document.querySelector('.main-nav__toggle-btn');


navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--hidden');
siteList.classList.add('main-nav__site-list--hidden');
pageHeader.classList.add('page-header');
pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    siteList.classList.remove('main-nav__site-list--hidden');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--menu-opened');
    toggleBtn.classList.add('main-nav__toggle-btn--hidden');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    siteList.classList.add('main-nav__site-list--hidden');
    pageHeader.classList.remove('page-header--menu-opened');
    toggleBtn.classList.remove('main-nav__toggle-btn--hidden');
  }
});
svg4everybody();
