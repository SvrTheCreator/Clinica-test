function popup() {
  let popup = document.querySelector('.popup-bg')
  let closePopup = document.querySelector('.popup-close')
  let openPopupDesktop = document.querySelector('.open-popup__desktop')
  let openPopupMobile = document.querySelector('.open-popup__mobile')
  openPopupDesktop.onclick = function () {
    console.log('click open')
    popup.style.display = 'block'
  }
  openPopupMobile.onclick = function () {
    console.log('click open')
    popup.style.display = 'block'
  }
  closePopup.onclick = function () {
    console.log('click close')
    popup.style.display = 'none'
  }
}

export default popup
