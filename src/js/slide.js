function slide() {
  const slides = document.querySelectorAll('.slide')
  const arrowLeft = document.querySelector('.prev')
  const arrowRight = document.querySelector('.next')
  let sliderCount = document.getElementById('slider-count')
  let currentIndex = 0
  sliderCount.innerHTML = 1

  arrowLeft.onclick = function () {
    slides[currentIndex].style.opacity = 0
    currentIndex = currentIndex - 1
    if (currentIndex < 0) {
      currentIndex = currentIndex + slides.length
    }
    slides[currentIndex].style.opacity = 1
    sliderCount.innerHTML = currentIndex + 1
    console.log('левая', currentIndex)
  }
  arrowRight.onclick = function () {
    slides[currentIndex].style.opacity = 0
    currentIndex = (currentIndex + 1) % slides.length
    slides[currentIndex].style.opacity = 1
    sliderCount.innerHTML = currentIndex + 1
    console.log('правая', currentIndex)
  }
}

export default slide
