//---------------Cores------------------------//
var cinzaClaro = "rgba(77, 77, 77," 
var cinzaEscuro = "rgba(29, 29, 29, 1)"
var preto = "rgba(0, 0, 0," 
var branco = "rgba(255,255,255,"
var corDestaque = "rgba(0, 255, 106"

function elementsColor() {

    let body = document.getElementById("body")
    let expBtn = document.getElementById("expBtn")
    let sidebarClass = document.getElementsByClassName("sidebar")
    let boxes = document.getElementsByClassName("boxes")
    let rodape = document.getElementById("rodape")
    let scrollMenu1 = document.getElementById("scrollMenu1")
    let scrollMenu2 = document.getElementById("scrollMenu2")
    let barcodeSubTitle = document.getElementsByClassName("barcodeSubTitle")
    let destaque = document.getElementsByClassName("destaque")
    let aboutTitle = document.getElementById("aboutTitle")
    let aboutContent = document.getElementById("aboutContent")
    let destaqueBarCode = document.getElementsByClassName("destaqueBarCode")
    let lineDestaque = document.getElementsByClassName("lineDestaque")
    let comaName = document.getElementById("comaName")


    //------Cinza Escuro--------//
    body.style.backgroundColor = cinzaEscuro
    comaName.style.border = "1px solid " + cinzaEscuro
    
    boxes[0].style.backgroundColor = cinzaEscuro

    //------Cinza Claro--------//
    rodape.style.background = cinzaClaro + "0.2)"

    //------Preto--------//
    sidebarClass[0].style.backgroundColor = preto + " 1)"

    expBtn.style.backgroundColor = preto + " 1)"

    aboutContent.style.backgroundColor = preto + " 1)"//branco + " 0.05)"

    //------Cor Destaque--------//
    expBtn.style.border = "1px solid " + corDestaque + ", 1)"
    expBtn.style.color = corDestaque + ", 1)"
    expBtn.style.boxShadow = "0px 0px 7px " + corDestaque + ", 0.2)"

    rodape.style.color = corDestaque + ", 0.5)"

    sidebarClass[0].style.boxShadow = "0px 0px 6px " + corDestaque + ", 0.2)"

    scrollMenu1.style.backgroundColor = corDestaque + ", 1)"
    scrollMenu2.style.backgroundColor = corDestaque + ", 1)"

    for (let index = 0; index < barcodeSubTitle.length; index++) {
        barcodeSubTitle[index].style.color = corDestaque + ", 1)"
    }

    for (let index = 0; index < destaque.length; index++) {
        destaque[index].style.color = corDestaque + ", 1)"
    }

    for (let index = 0; index < destaqueBarCode.length; index++) {
        destaqueBarCode[index].style.color = branco + " 1)"
    }

    for (let index = 0; index < lineDestaque.length; index++) {
        lineDestaque[index].style.border = "1px solid " + corDestaque + ", 1)"
    }

    aboutTitle.style.backgroundColor = branco + " 0.05)"
    
}
