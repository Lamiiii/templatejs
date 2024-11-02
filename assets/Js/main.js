let wrapperText=document.querySelector(".wrapper-text")
let appHeader=document.createElement("div")
appHeader.innerText="<header>"
appHeader.classList.add("app-header","common")

let primaryNav=document.createElement("div")
primaryNav.innerText="<nav>"
primaryNav.classList.add("primary-nav","common")

let primaryElement=document.createElement("div")
primaryElement.classList.add("primary-element")
let mainSection=document.createElement("div")
let mainContent=document.createElement("div")
mainContent.innerText="<main>"
mainContent.classList.add("main-content","content","common")

let contentBlock=document.createElement("div")
contentBlock.innerText="<article>"
contentBlock.classList.add("content-block","content","common")
mainSection.append(mainContent,contentBlock)


let mainAside=document.createElement("div");
let aside=document.createElement("div")
aside.innerText="<aside>"
aside.classList.add("aside","common")
mainAside.append(aside)

let appFooter=document.createElement("div")
appFooter.innerText="<footer>"
appFooter.classList.add("app-footer","common")

primaryElement.append(mainSection,mainAside)

wrapperText.append(appHeader,primaryNav,primaryElement,appFooter)

