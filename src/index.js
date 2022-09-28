import './style.css';
import { homeLoad } from './home';
import { menuLoad } from './menu';
import { contactLoad } from './contact'

const clearPage = () => {
    let container = document.querySelector(".content")
    container.textContent = ""
}


const addEvents = () => {
    let menuButton = document.querySelector(".menu")
    menuButton.addEventListener("click", () =>{
        clearPage()
        menuLoad()
    })

    let homeButton = document.querySelector(".home")
    homeButton.addEventListener("click", () =>{
        clearPage()
        homeLoad()
    })

    let contactButton = document.querySelector(".contact")
    contactButton.addEventListener("click", () =>{
        clearPage()
        contactLoad()
    })
}

const pageOpen = (() => {
    homeLoad()
    addEvents()

    let menuButton = document.querySelector(".menu")
    menuButton.addEventListener("click", () =>{
        clearPage()
        menuLoad()
    })

    let homeButton = document.querySelector(".home")
    homeButton.addEventListener("click", () =>{
        clearPage()
        homeLoad()
    })

    let contactButton = document.querySelector(".contact")
    contactButton.addEventListener("click", () =>{
        clearPage()
        contactLoad()
    })
})();

export {addEvents}