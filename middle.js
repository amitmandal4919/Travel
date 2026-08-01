// Search Function
const searchBox = document.getElementById("searchbox");

searchBox.addEventListener("keyup", function () {

    let value = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(".photo");

    cards.forEach(card => {

        let place = card.querySelector("h3").textContent.toLowerCase();

        if (place.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Book Now Button
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

    this.style.backgroundColor = "yellow";

        this.style.color ="black"
        setTimeout(() =>{
            this.style.backgroundColor="";
            this.style.color="";

        },2000);

    });

});


// Menu Toggle
function toggleMenu() {

    const menu = document.querySelector(".hero");

    menu.classList.toggle("show");

}