function popup() {
  let popup = document.querySelector('.popup-bg')
  let closePopup = document.querySelector('.popup-close')
  let openPopupDesktop = document.querySelector('.open-popup__desktop')
  let openPopupMobile = document.querySelector('.open-popup__mobile')
  openPopupDesktop.onclick = function () {
    popup.style.display = 'block'
  }
  openPopupMobile.onclick = function () {
    popup.style.display = 'block'
  }
  closePopup.onclick = function () {
    popup.style.display = 'none'
  }
}

export default popup
