// write your code here
const menu = document.querySelector('#ramen-menu')
const ramenUrl = 'http://localhost:3000/ramens'


document.addEventListener('DOMContentLoaded', () =>{
fetch(ramenUrl)
.then((res) => res.json())
.then((ramens) => renderRamen(ramens))
})

function renderRamen(ramens){
ramens.forEach((ramens) => {
const img = document.createElement('img');
img.src = `${ramens.image}` 
img.alt = `${ramens.name}`
img.title = `${ramens.name}`


// img.addEventListener('click', () => function ramenSelector(){
//     const selectedRamen = document.querySelector('.detail-image');
//     selectedRamen.src = `${ramens.image}`
//     const ramenName = document.querySelector('.name');
//     ramenName.textContent = `${ramens.name}`
//     const restaurant = document.querySelector('.restaurant');
//     restaurant.textContent = `${ramens.restaurant}`

// } );


menu.appendChild(img)})
}
const ramenSubmit = document.querySelector('#new-ramen')
ramenSubmit.addEventListener('submit', submission);

function submission(event) {
    event.preventDefault();
    const ramen1 = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target.Comment.value,
    }
    postRamen(ramen1);
}

function postRamen(ramen1) {
    fetch(ramenUrl,{
        method: 'POST',
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(ramen1)
    }) .then(res => res.json())
    .then(renderRamen)
}


// function ramenSelector(e) {
//     const selectedRamen = document.querySelector('.detail-image');
//     selectedRamen.src = `${ramens.image}`
//     const ramenName = document.querySelector('.name');
//     ramenName.textContent = `${ramens.name}`
//     const restaurant = document.querySelector('.restaurant');
//     restaurant.textContent = `${ramens.restaurant}`

// }