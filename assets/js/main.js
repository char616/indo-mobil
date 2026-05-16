import { cars }
from './data/cars.js'

const carGrid =
document.getElementById('carGrid')

const searchInput =
document.getElementById('searchInput')

const brandFilter =
document.getElementById('brandFilter')

function displayCars(data){

  carGrid.innerHTML = ''

  data.forEach(car => {

    const card =
    document.createElement('div')

    card.classList.add('car-card')

    card.innerHTML = `

      <div class="car-image">

        <img src="${car.image}">

      </div>

      <div class="car-content">

        <h3>${car.name}</h3>

        <p>${car.description}</p>

        <div class="car-price">
          ${car.price}
        </div>

      </div>

    `

    card.addEventListener(
      'click',
      () => openModal(car)
    )

    carGrid.appendChild(card)

  })

}

function openModal(car){

  const modal =
  document.getElementById('carModal')

  modal.innerHTML = `

    <div class="modal-box">

      <span class="close-modal">
        &times;
      </span>

      <div class="modal-image">

        <img src="${car.image}">

      </div>

      <div class="modal-content">

        <h2>${car.name}</h2>

        <p class="modal-price">
          ${car.price}
        </p>

        <p class="modal-desc">

          ${car.description}

          Mobil premium modern dengan
          desain elegan dan performa terbaik.
          Cocok untuk kebutuhan harian maupun
          gaya hidup luxury modern.

        </p>

        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20${car.name}"
           target="_blank"
           class="wa-button"
        >

  <i class="fab fa-whatsapp"></i>

  Hubungi WhatsApp

</a>

      </div>

    </div>

  `

  modal.classList.add('active')

  const closeBtn =
  document.querySelector('.close-modal')

  closeBtn.addEventListener(
    'click',
    () => {
      modal.classList.remove('active')
    }
  )

}

function filterCars(){

  const keyword =
  searchInput.value.toLowerCase()

  const brand =
  brandFilter.value

  const filtered =
  cars.filter(car => {

    const matchName =
    car.name
    .toLowerCase()
    .includes(keyword)

    const matchBrand =
    brand === 'all' ||
    car.brand === brand

    return matchName && matchBrand

  })

  displayCars(filtered)

}

searchInput.addEventListener(
  'input',
  filterCars
)

brandFilter.addEventListener(
  'change',
  filterCars
)

displayCars(cars)

const revealItems = document.querySelectorAll(
  '.car-card, .section-title, .hero-text, .tentang-text'
)

function revealOnScroll(){

  revealItems.forEach(item => {

    const top =
    item.getBoundingClientRect().top

    const windowHeight =
    window.innerHeight

    if(top < windowHeight - 100){

      item.classList.add('show')

    }

  })

}

window.addEventListener(
  'scroll',
  revealOnScroll
)

revealOnScroll()

window.addEventListener('click', e => {

  const modal =
  document.getElementById('carModal')

  if(e.target === modal){

    modal.classList.remove('active')

  }

})