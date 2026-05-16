export function openModal(car){

  const modal =
  document.getElementById('carModal')

  const body =
  document.getElementById('modalBody')

  body.innerHTML = `
  
    <img src="${car.image}" width="100%">

    <h2>${car.name}</h2>

    <p>${car.description}</p>

    <h3>${car.price}</h3>

    <a href="#" class="btn-primary">
      WhatsApp
    </a>

  `

  modal.style.display = 'flex'
}

export function closeModal(){

  document.getElementById('carModal')
  .style.display = 'none'

}