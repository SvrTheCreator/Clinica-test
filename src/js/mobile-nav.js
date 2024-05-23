function mobileNav() {
  const navBtn = document.querySelector('.mobile-nav-btn')
  const nav = document.querySelector('.mobile-nav')
  const menuIcon = document.querySelector('.nav-icon')
  const menuIconCancel = document.querySelector('.nav-icon-cancel')

  navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open')
    document.body.classList.toggle('no-scroll')
    menuIcon.classList.toggle('nav-active')
    menuIconCancel.classList.toggle('nav-active')
  }
}

export default mobileNav
