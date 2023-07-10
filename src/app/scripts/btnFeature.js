//Captura de elementos DOM
//elementos DOM main
const featureBtn = document.querySelector(".header__feature")
const companyBtn = document.querySelector(".header__company")

const featureArrow = document.querySelector(".feature__arrow")
const companyArrow = document.querySelector(".company__arrow")

const featureSection = document.querySelector(".feature__section")
const companySection = document.querySelector(".company__section")

//elementos DOM hamburguesa
const hamburgerOpenBtn = document.querySelector(".hamburger-open")
const hamburgerCloseBtn = document.querySelector(".hamburger-close")

const hamburgerFeatureBtn = document.querySelector(".hamburger__feature")
const hamburgerCompanyBtn = document.querySelector(".hamburger__company")

const hamburgerFeatureArrow = document.querySelector(".hamburger__feature__arrow")
const hamburgerCompanyArrow = document.querySelector(".hamburger__company__arrow")

const hamburgerSection = document.querySelector(".hamburger__section")
const cover = document.querySelector(".cover")

const hamburgerFeatureSection = document.querySelector(".hamburger__feature__section")
const hamburgerCompanySection = document.querySelector(".hamburger__company__section")



//iportaciones assets
import arrowUp from "../../assets/icon-arrow-up.svg"


//funciones a realizar
const featureClick = () => {
  if (featureSection.classList.contains("hidden")) {
    featureArrow.src = "../../assets/icon-arrow-up.svg";
    featureSection.classList.remove("hidden")
  } else {
    featureArrow.src = "../../assets/icon-arrow-down.svg";
    featureSection.classList.add("hidden")
  }
}
const companyClick = () => {
  if (companySection.classList.contains("hidden")) {
    companyArrow.src = "../../assets/icon-arrow-up.svg";
    companySection.classList.remove("hidden")
  } else {
    companyArrow.src = "../../assets/icon-arrow-down.svg";
    companySection.classList.add("hidden")
  }
}

const hamburgerClick = () => {
  hamburgerSection.classList.toggle("hidden")
  cover.classList.toggle("hidden")

}

const HamburgerFeatureClick = () => {
  if (hamburgerFeatureSection.classList.contains("hidden")) {
    hamburgerFeatureArrow.src = "../../assets/icon-arrow-up.svg";
    hamburgerFeatureSection.classList.remove("hidden")
  } else {
    hamburgerFeatureArrow.src = "../../assets/icon-arrow-down.svg";
    hamburgerFeatureSection.classList.add("hidden")
  }
}

const HamburgerCompanyClick = () => {
  if (hamburgerCompanySection.classList.contains("hidden")) {
    hamburgerCompanyArrow.src = "../../assets/icon-arrow-up.svg";
    hamburgerCompanySection.classList.remove("hidden")
  } else {
    hamburgerCompanyArrow.src = "../../assets/icon-arrow-down.svg";
    hamburgerCompanySection.classList.add("hidden")
  }
}


export const deskTopBtnClick = () => {
  featureBtn.addEventListener("click", featureClick)
  companyBtn.addEventListener("click", companyClick)
  hamburgerOpenBtn.addEventListener("click", hamburgerClick)
  hamburgerCloseBtn.addEventListener("click", hamburgerClick)
  hamburgerFeatureBtn.addEventListener("click", HamburgerFeatureClick)
  hamburgerCompanyBtn.addEventListener("click", HamburgerCompanyClick)
}
