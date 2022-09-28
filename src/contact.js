import { addEvents } from "./index.js"

const contactLoad = () => {
    let container = document.querySelector(".content")

    //create div for title
    let title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "BorgorTown"

    //create divs for site menu navigation bar
    let topbar = document.createElement("div")
    topbar.classList.add("topbar")
    let topbar_home = document.createElement("div")
    topbar_home.classList.add("home")
    topbar_home.textContent = "Home"
    let topbar_menu = document.createElement("div")
    topbar_menu.classList.add("menu")
    topbar_menu.textContent = "Menu"
    let topbar_contact = document.createElement("div")
    topbar_contact.classList.add("contact")
    topbar_contact.textContent = "Contact"

    topbar.append(topbar_home,topbar_menu,topbar_contact)

    //create divs for main content on home tab
    let mainContent = document.createElement("div")
    mainContent.classList.add("mainContent")
    let infobox = document.createElement("div")
    infobox.classList.add("infobox")
    let infobox_div = document.createElement("div")
    infobox_div.textContent = "Contact Info"
    infobox.append(infobox_div)
    mainContent.append(infobox)

    container.append(title,topbar,mainContent)

    addEvents()
}

export {contactLoad}