var nav = document.querySelector('nav');
var navBtns = document.querySelectorAll('.nav-btn');
var allViews = document.querySelectorAll('.view');

nav.addEventListener('click', changeView);

function changeView(event) {
  switchView('allCourses');
  switchView('collections');
  switchView('wishlist');
  switchView('archived');
}

function switchView(viewBtn) {
  if (event.target.id === viewBtn) {
    toggleActiveNav();
    toggleActiveView(viewBtn)
  }
}

function toggleActiveNav() {
  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].classList.remove('active');
  }
  event.target.classList.add('active');
}

function toggleActiveView(viewBtn) {
  for (var i = 0; i < allViews.length; i++) {
    allViews[i].classList.remove('active-view');
  }
  var desiredView = document.querySelector('.' + viewBtn);
  desiredView.classList.add('active-view');
}
