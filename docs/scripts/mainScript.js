function addEventos() {

    //document.cookie = "Set-Cookie: promo_shown=1; SameSite=Strict"
    changeLanguage()

    /*------------- Mudar Cores ----------------*/
    elementsColor()

    /* ------------ Menu Lateral ----------------*/
    makeBarLinks("sidebar") //first run //cria os links do menu
    makeContactsLinks()
    document.getElementById("expBtn").addEventListener("click", menuControl) // verifica click em expBtn ou mouseout e executa menuControl()
    
    /* ------------ Conteudo ----------------*/
    onResize() // Quando houver modificação no tamanho da janela
    animaContent() //Animação dos conteudos 
    barcodeSubTitle () //barcode abaixo do titulo em cada DIV

    // HOME DIV
    efeitoBarcode() // links on bar code
    
    // CONTATOS DIV
    efeitoContatos() //Animação hover na div de contatos

    // CV DIV
    efeitosboxesCV()  //Animação das caixas do CV

    // PJ DIV
    controlProjetos()
    efeitoBoxesPJ()
    document.getElementById("vantBox").addEventListener("click", function () { //link VANT
        document.getElementById("vantBox").target = "_blank"
        document.getElementById("vantBox").href = "#projects"        
    })

}



