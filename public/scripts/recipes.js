const cards = document.querySelectorAll(".card")
const cardRecipe = document.querySelectorAll(".card-recipe")


for (let index = 0; index < cards.length; index++) {
    cards[index].addEventListener("click", () => {
        window.location.href = `/recipes/${ index }`
    })
}

for (card of cardRecipe) {
    const hide = card.querySelector(".card-hide")
    const element = card.querySelector(".elements")
    hide.addEventListener("click", () => {
        if(hide.innerHTML == "Esconder"){
            hide.innerHTML = "Mostrar"
        } else {
            hide.innerHTML = "Esconder"
        }
        element.classList.toggle("active")
    })
}
