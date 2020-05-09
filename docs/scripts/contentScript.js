//-------------- Path Imgs ---------------------//
var imgsOver=["imgs/github-icon-white.png","imgs/linkedin-icon-white.png","imgs/instagram-icon-white.png","imgs/email-icon-white.png"]
var imgsOut=["imgs/github-icon-green.png","imgs/linkedin-icon-green.png","imgs/instagram-icon-green.png","imgs/email-icon-green.png"]


//-------------- Variable ---------------------//
var tamanhoJanelaWidth = window.innerWidth
var tamanhoJanelaHeight = window.innerHeight
var activePage = [-1,0]
var lastOpened = "vazio"
var lang = "ptbr"
var listFull
var listAbrev
var listHover

function changeLanguage() {
    if(lang == "ptbr") {
        //---------------Texto Links PT-----------------//
        listFull=["início","projetos","sobre","curriculum","contatos"] //divs
        listAbrev=["I","PJ","SB","CV","CT"] //abreviação para o menu
        listHover=["início","proj","sobre","cv","cont"] //texto para efeito hover
    }
    
    if(lang == "eng") {
    //---------------Texto Links ENG-----------------//
        listFull=["home","projects","about","curriculum","contacts"] //divs
        listAbrev=["H","PJ","AB","CV", "CT"] //abreviação para o menu
        listHover=["home","proj","about","cv","cont"] //texto para efeito hover
    }
}

function menuStatus(menuId) { // verifica se menu esta aberto ou fechado - ativo ou nao-ativo 

    let obj = document.getElementById(menuId)

    if (obj.getAttribute("class") == menuId) return "no-active"
    else return "active"

}

function openMenu() { //Muda priedades do menu ao abrir

    let sidebar = document.getElementById("sidebar")
    let expBtn = document.getElementById("expBtn")

    sidebar.classList.remove("sidebar")
    sidebar.classList.add("expSidebar")

    expBtn.innerHTML = "&nbsp;&lt;&nbsp;"
    expBtn.style.width = "85%"
    expBtn.style.backgroundColor = preto + " 1)"

    makeBarLinks() //Cria os links do menu
    
}

function closeMenu() { //Muda priedades do menu ao fechar

    let sidebar = document.getElementById("sidebar")
    let expBtn = document.getElementById("expBtn")

    sidebar.classList.add("sidebar")
    sidebar.classList.remove("expSidebar")

    expBtn.innerHTML = "&nbsp;&gt;&nbsp;"
    expBtn.style.width = "40px"
    expBtn.style.backgroundColor = preto + " 1)"

    makeBarLinks() //Cria os links do menu
}

function menuControl() { // Controla abertura e fechamento do menu ao clicar em expBtn ou mouseout

    if (menuStatus("sidebar") == "no-active") openMenu() //ao clicar em expBtn
    else if (menuStatus("sidebar") == "active") closeMenu() //ao clicar em expBtn

    document.getElementById("conteudo").addEventListener("mouseover", closeMenu) //ao clicar em expBtn

}

function makeBarLinks() { //Cria os links do menu

    if (menuStatus("sidebar") == "no-active") { //se a barra lateral estiver fechada

        for (let index = 0; index < listFull.length; index++) { //criar os links com os textos da lista "listAbrev"

            let link = document.getElementById("link" + (index))
            
            //estilo dos links
            link.innerHTML = listAbrev[index]
            link.style.color = cinzaClaro + "1)"
            link.style.textAlign="center" 
            link.style.marginRight= "0px"
            link.style.fontSize = "15px"   
            link.style.transition = "none"

            if(index == activePage[1]) link.style.color = corDestaque  + ",1)" //estilo do link ativo
        }

    } 
    else if (menuStatus("sidebar") == "active") { //se a barra lateral estiver aberta

        setTimeout(() => {

            for (let index = 0; index < listFull.length; index++) {

                let link = document.getElementById("link" + (index))
    
                //criar os links com os textos da lista "listFull"
                link.innerHTML = listFull[index]
                link.style.color = cinzaClaro + "1)"
                link.style.textAlign="right"
                link.style.marginRight= "15px"
                link.style.fontSize = "15px"
                
                if(index == activePage[1]) link.style.color = corDestaque  + ", 1)" //estilo do link ativo
                
            }
            
        }, 175);
        
    }
    
    function efeitosBarLinsk(){ //Realiza os efeitos de link ativo e mouse nos links do menu

        for (let index = 0; index < listFull.length; index++) { //para todos os links do menu
    
            let link = document.getElementById("link" + index)
            let barCodeDestaque = document.getElementsByClassName("destaqueBarCode")

            window.addEventListener("scroll", function () { //efeito rolagem no menu

                let alturaJanela = tamanhoJanelaHeight; if(tamanhoJanelaHeight < 722) alturaJanela = 722
                let scrollValueNormalized = window.pageYOffset/(alturaJanela*(listFull.length-1)); if (scrollValueNormalized >= 1) scrollValueNormalized = 1
                let minValue = 0
                let maxValue = 160
                let scrollValue = scrollValueNormalized*(maxValue-minValue)

                document.getElementById("scrollMenu1").style.marginTop = scrollValue + "px"
                document.getElementById("scrollMenu2").style.marginTop = scrollValue + "px"

            })
    
            link.addEventListener("click", function () { //Efeito pagina ativa


                if (activePage[1] != index) { 
                    activePage[0] = activePage[1] //guarda a pagina anterior seleciona para remover efeito do click
                    activePage[1] = index //ao clicar no link retorna para activePage[1] qual a pagina seleciona                    
                }

                let link0 = document.getElementById("link" + activePage[0]) //remove o efeito da ultima pagina selecionada
    
                if (menuStatus("sidebar") == "no-active") { //Efeito pagina ativa se menu fechado
                    link0.style.color = cinzaClaro + "1)"
                    link0.style.fontSize = "15px"
                }
                else if (menuStatus("sidebar") == "active"){//Efeito pagina ativa se menu aberto
                    link0.style.color = cinzaClaro + "1)"
                } 

            })
                
            link.addEventListener("mouseover", function () { //Efeito mouseover
    
                if (menuStatus("sidebar") == "no-active"){ //Efeito se menu fechado
                    link.style.color = corDestaque  + ", 1)"
                    link.innerHTML = listHover[index]  
                    link.style.fontSize = "10px"
                } 
                else if (menuStatus("sidebar") == "active"){ //Efeito se menu aberto
                    link.style.color = corDestaque  + ", 1)"
                }
    
                barCodeDestaque[index].style.color = corDestaque + ", 1)"
                if (tamanhoJanelaWidth >= 1025) barCodeDestaque[index].style.fontSize = "65px"
                else barCodeDestaque[index].style.fontSize = "50px"
    
            })
    
            link.addEventListener("mouseout", function () { //Efeito mouseout
    
                if (menuStatus("sidebar") == "no-active"){ //Efeito se menu fechado
                    
                    if (index != activePage[1]) { //Efeito se não for a pagina selecionada
                        link.innerHTML = listAbrev[index]
                        link.style.color = cinzaClaro + "1)"
                        link.style.fontSize = "15px"                    
                    } 
                    else { //Efeito se for a pagina selecionada
                        link.innerHTML = listAbrev[index]
                        link.style.fontSize = "15px"  
                    }
                 
                } 
                else if (menuStatus("sidebar") == "active") { //Efeito se menu aberto
    
                    if (index != activePage[1]) { //Efeito se não for a pagina selecionada
                        link.style.color = cinzaClaro + "1)"       
                    } 
                    else { //Efeito se for a pagina selecionada
                        link.innerHTML = listFull[index]
                    }
    
                }
    
                barCodeDestaque[index].style.color = branco + " 1)"
                if (tamanhoJanelaWidth >= 1025) barCodeDestaque[index].style.fontSize = "50px"
                else barCodeDestaque[index].style.fontSize = "35px"
    
            })  
    
        }
    
    }

    efeitosBarLinsk() //Realiza os efeitos de link ativo e mouse

}

function makeContactsLinks() { //Efeito para mousehover no contatos da barra lateral

    function imgHoverEfect(imgId, address1, address2) {
    
        let obj = document.getElementById(imgId)
    
        obj.addEventListener("mouseover", function () {
            obj.classList.remove("icoContGray")
            obj.classList.add("icoContGreen")
            obj.src = address2
        })
    
        obj.addEventListener("mouseout", function () {
            obj.classList.add("icoContGray")
            obj.classList.remove("icoContGreen")
            obj.src = address1
        })

    }

    function positionIcon() {

        if (window.innerHeight>460 && window.innerHeight<=1080) {
            document.getElementById("contatos-icon").style.marginTop = (window.innerHeight-430) + "px"
            document.getElementById("contatos-icon").style.display = "block"
        }
        else if (window.innerHeight<=460) {
            document.getElementById("contatos-icon").style.display = "none"
        }
        else {
            document.getElementById("contatos-icon").style.marginTop = 10 + "px"
            document.getElementById("contatos-icon").style.display = "block"
        }

        if (window.innerHeight > 1080){
            document.getElementById("contatos-icon").style.display = "none"
        }

    }


    imgHoverEfect("linkedin-bar1","imgs/linkedin-gray.png","imgs/linkedin-green.png")
    imgHoverEfect("github-bar1","imgs/github-gray.png","imgs/github-green.png")
    imgHoverEfect("linkedin-bar2","imgs/linkedin-gray.png","imgs/linkedin-green.png")
    imgHoverEfect("github-bar2","imgs/github-gray.png","imgs/github-green.png")
    
    window.addEventListener("resize", positionIcon)
    positionIcon() //First Run

}

function animaScroll() { //Show divs durante rolagem

    let element = document.querySelectorAll('[data-anima]')
    let topPage = window.pageYOffset + (window.innerHeight*0.85);
    let bottomPage = window.pageYOffset - (window.innerHeight*0.85);

    element.forEach(function(element) {
        if (topPage > element.offsetTop && bottomPage < element.offsetTop) { //se a tive estive dentro de um espaço na janela
            element.classList.add("anima")
        }
        else {
            element.classList.remove("anima")
        }
    });
}

function animaContent() { //Animação dos conteudos
    
    /*Show Contente all divs*/
    animaScroll() //first run
    let element = document.querySelectorAll('[data-anima]')    
    if(element.length > 0) window.addEventListener("scroll", animaScroll)

    /*Coma Animation*/
    let i=[]
    let flashComa = document.getElementsByClassName("flashComa")
    for (let index = 0; index < flashComa.length; index++) {
        setTimeout(() => {
            setInterval(() => {
                if (i[index]/2 == 0) {
                    flashComa[index].innerHTML = "&#95"
                    i[index]++
                }
                else {
                    flashComa[index].innerHTML = "&nbsp"
                    i[index]=0 
                }
            }, 500);
        }, 2000);
    }


}

function onResize() { // Quando houver modificação no tamanho da janela

    window.addEventListener("resize",function () {

        tamanhoJanelaWidth = window.innerWidth
        tamanhoJanelaHeight = window.innerHeight
    
        let destaque = document.getElementsByClassName("destaqueBarCode")  
    
        tamanhoJanelaWidth = window.innerWidth
    
        for (let index = 0; index < destaque.length; index++) {
            if (tamanhoJanelaWidth >= 1025) destaque[index].style.fontSize = "50px"
            else destaque[index].style.fontSize = "35px" 
        }
    
    })

}

function barcodeSubTitle () {

    let subTitleBarcode = document.getElementsByClassName("barcodeSubTitle")
    for (let index = 0; index < subTitleBarcode.length; index++) {
        subTitleBarcode[index].addEventListener("mouseover", function () {
            subTitleBarcode [index].style.letterSpacing = "10px"
        })
        subTitleBarcode[index].addEventListener("mouseout", function () {
            subTitleBarcode[index].style.letterSpacing = "7px"
        }) 
    }

}

function efeitoContatos() { //Animação hover na div de contatos

    let link=[]
    let linkSrc=[]

    for (let index = 0; index < 4; index++) {
        link = document.getElementsByClassName("contLink")[index]

        let mouseOver = index
        
        link.addEventListener("mouseover", function () {
           for (let index = 0; index < 4; index++) {
                if (index != mouseOver) {
                    linkSrc[index] = document.getElementsByClassName("contIcon" + ((index+2)%2+1))[(Math.floor((index)/2))]  
                    linkSrc[index].src = imgsOver[index]
                }
                else {
                    document.getElementsByClassName("contText" + ((index+2)%2+1))[(Math.floor((index)/2))].style.letterSpacing = "2px"
                    document.getElementsByClassName("barcodeSub")[index].style.color = corDestaque + ", 1)"
                    document.getElementsByClassName("barcodeSub")[index].style.letterSpacing = "5px"
                }
            }
        })

        link.addEventListener("mouseout", function () {
            for (let index = 0; index < 4; index++) {
                if (index != mouseOver) {
                    linkSrc[index] = document.getElementsByClassName("contIcon" + ((index+2)%2+1))[(Math.floor((index)/2))]  
                    linkSrc[index].src = imgsOut[index]
                }
                else {
                    document.getElementsByClassName("contText" + ((index+2)%2+1))[(Math.floor((index)/2))].style.letterSpacing = "0px"
                    document.getElementsByClassName("barcodeSub")[index].style.color = branco + " 1)"
                    document.getElementsByClassName("barcodeSub")[index].style.letterSpacing = "3px"
                }
             }
         })

    }

}

function efeitoBarcode() { // links on bar code
    
    let destaqueBarCode = document.getElementsByClassName("destaqueBarCode")
    let namaBarCode = document.getElementById("nameCodeBar")

    for (let index = 0; index < listFull.length ; index++) {
        destaqueBarCode[index].addEventListener("mouseover", function () {

            destaqueBarCode[index].style.color = corDestaque + ", 1)"
            if (tamanhoJanelaWidth >= 1025) destaqueBarCode[index].style.fontSize = "65px"
            else destaqueBarCode[index].style.fontSize = "50px" 

        })
        destaqueBarCode[index].addEventListener("mouseout", function () {

            destaqueBarCode[index].style.color = branco + " 1)"
            if (tamanhoJanelaWidth >= 1025) destaqueBarCode[index].style.fontSize = "50px"
            else destaqueBarCode[index].style.fontSize = "35px" 

        })

    }
}

function efeitosboxesCV() {

    let index1
    let index2

    for (index1 = 1; index1 <= 5; index1++) {

            let boxCV
            
            if (index1 <= 4) {
                
                boxCV = document.getElementById("CV" + index1) 
                efeitosBoxCV(boxCV, index1) 
                
            }
            if (index1 == 5) {

                for (index2 = 1; index2 <=5; index2++) {
               
                    boxCV = document.getElementById("CV5" + index2)

                    efeitosBoxCV(boxCV, index2) 
                    
                    let boxCV5 = document.getElementById("CV5")
                    boxCV5.addEventListener("mouseover", function() {
                        barcodeExp("expCV5", "mouseover")
                    })
                    boxCV5.addEventListener("mouseout", function() {
                        barcodeExp("expCV5", "mouseout")
                    })

                }

            }

    }

    function efeitosBoxCV(obj, num) {

        obj.addEventListener("click", function () {

            if (window.innerWidth > 1024) controlJanelaModal(obj.id)
            else {
                if(lang == "eng") window.open("./pdfs/cv-eng.pdf")
                else window.open("./pdfs/cv-ptbr.pdf")
            }
                  
        })

        obj.addEventListener("mouseover", function () {

            barcodeExp("exp" + obj.id, "mouseover")

        })

        obj.addEventListener("mouseout", function () {

            barcodeExp("exp" + obj.id, "mouseout")

        })
        
    }

    function barcodeExp(num, mouse) {

        if (mouse == "mouseover") {

            let barcodeSubCV = document.getElementById(num)
            barcodeSubCV.style.letterSpacing = "5px"
            barcodeSubCV.style.color = corDestaque  + ", 1)"

        }

        if (mouse == "mouseout") {

            let barcodeSubCV = document.getElementById(num)
            barcodeSubCV.style.letterSpacing = "3px"
            barcodeSubCV.style.color = "white"

        }
    
    }
    
}

function controlJanelaModal(content) {

    let mywindow = document.getElementById("MyWindows")
    let fileOpenBtn = document.getElementById("fileOpenBtn")
    let pvPage = document.getElementById("pvPage")
    let ntPage = document.getElementById("ntPage")

    let pgControl = 0
    let fileDowload = 0
    let navegation = false

    /*-------------- ON OPEN------------------------------*/

    //cleanMyWindow(lastOpened)
    //lastOpened = content

    if (selectContentClicked(content) != "vazio") {
        mywindow.style.display = "block"


        downloadBtn()

        if (navegation == true) {
            pvPage.style.display = "block"
            ntPage.style.display = "block"
        }
        
    }

    document.getElementById(selectContentClicked(content)).style.display = typeToShow() 
    


    /*-------------- ON CLOSE ---------------------------*/
    document.getElementById("closeWindow").addEventListener("click",function () {

        cleanMyWindow(content)
        
    })

    /*-------------- PG CONTROL ---------------------------*/
    var min=0
    var max=0

    // Botão avança
    ntPage.addEventListener("click", function () {


        document.getElementById(contentToShow(content)).style.display = "none"
        //lastOpened = content

        controlPage("nt")

        document.getElementById(contentToShow(content)).style.display = typeToShow() 

        downloadBtn()


    })

    // Botão recua
    pvPage.addEventListener("click", function () {

        document.getElementById(contentToShow(content)).style.display = "none"
        //lastOpened = content

        controlPage("pv")
        
        document.getElementById(contentToShow(content)).style.display = typeToShow()  

        downloadBtn()

    })

    /*funções*/ 
        function controlPage(mode) {
            if (mode == "pv") pgControl -= 1
            if (mode == "nt") pgControl += 1 

            if (pgControl > max) pgControl = min
            if (pgControl < min) pgControl = max
        }

        function selectContentClicked(content) {

            /*DIV CV1 CV2 CV3*/{

                if (content[0]+content[1] == "CV") {

                    navegation = true
                    if(lang == "eng") fileDowload = "./pdfs/cv-eng.pdf"
                    else  fileDowload = "./pdfs/cv-ptbr.pdf"

                } 

                if (content == "CV1" || content == "CV2" || content == "CV3") {
                    pgControl = 1
                    return "gridCV123"
                }
                
                if (content == "CV4" || content == "CV51" || content == "CV52" || content == "CV53" || content == "CV54" || content == "CV55") {
                    pgControl = 2
                    return "gridCV45"
                }
                

            }

            /* Projetos*/ {

                if (content[0]+content[1] == "PJ") {

                    navegation = false

                } 

                if (content == "PJ1") {
                    pgControl = 1
                    fileDowload = "https://github.com/SalvadorBrunoo/portifolio.git"
                    return content
                }

                if (content == "PJ2") {
                    pgControl = 2
                    fileDowload = 0
                    return content
                }


            }

            return "vazio" // apenas para não retornar void caso nenhum if acima seja TRUE

        }

        function contentToShow(content) {

            /*DIV CV1 CV2 CV3*/ {
                if(content[0]+content[1] == "CV") {
                    if (pgControl == 1) {min = 1; max = 2; return "gridCV123"}
                    else if (pgControl == 2) {min = 1; max = 2; return "gridCV45"}
                }
            }

            /* Pojetos */ {
                /*if(content[0]+content[1] == "PJ") {
                    if (pgControl == 1) {min = 1; max = 2; fileDowload = "https://github.com/SalvadorBrunoo/portifolio.git"; return "PJ1"}
                    else if (pgControl == 2) {min = 1; max = 2; fileDowload = 0; return "PJ2"}
                }*/
            }   

            return "vazio" // apenas para não retornar void caso nenhum if acima seja TRUE
            
        }

        function typeToShow() {

            /*DIV CV1 CV2 CV3*/ {
                if (content == "CV1" || content == "CV2" || content == "CV3" || pgControl == 1) return "grid"
                else if (content == "CV4" || content == "CV51" || content == "CV52" || content == "CV53" || content == "CV54" || content == "CV55" || pgControl == 2) return "grid"
            }

            
            /* Projetos*/ {

                if (content[0]+content[1] == "PJ") return "block"

            }

            return "vazio" // apenas para não retornar void caso nenhum if acima seja TRUE

        }

        function downloadBtn() {
            if (fileDowload != 0) {
                fileOpenBtn.style.display = "block"
                fileOpenBtn.href = fileDowload
            }

            if (fileDowload == 0) {
                fileOpenBtn.style.display = "none"
                fileOpenBtn.href = fileDowload
            }
        }   
        
        function cleanMyWindow(content) {
            document.getElementById(contentToShow(content)).style.display = "none"
            document.getElementById(selectContentClicked(content)).style.display = "none"

            navegation = false
            mywindow.style.display = "none"
            fileOpenBtn.style.display = "none" 
            pvPage.style.display = "none"
            ntPage.style.display =  "none"
            content = "vazio"
        }
    
}

function controlProjetos() {

    let min = 1
    let max = document.getElementsByClassName("count").length
    let pgControl = min

    //------------ON LOAD show firs page-----//
    document.getElementById("displayPJ" + pgControl).style.display = "block"
    for (let index = min+1; index <= max; index++) document.getElementById("displayPJ" + index).style.display = "none"

    let pvBtn = document.getElementById("pvBtnPJ")
    let ntBtn = document.getElementById("ntBtnPJ")


    //------------NEXT BUTTON---------------//
    ntBtn.addEventListener("click", function () {
        controlPageBtn("nt")
    })

    //------------NEXT BUTTON---------------//
    pvBtn.addEventListener("click", function () {
        controlPageBtn("pv")
    })

    if (max == 1) {
        pvBtn.style.display = "none"
        ntBtn.style.display = "none"
    }

    function controlPageBtn(mode) {

        if (mode == "pv") pgControl -= 1
        if (mode == "nt") pgControl += 1 

        if (pgControl > max) pgControl = min
        if (pgControl < min) pgControl = max

        for (let index = min; index <= max; index++) document.getElementById("displayPJ" + index).style.display = "none"
        document.getElementById("displayPJ" + pgControl).style.display = "block"

    }
}

function efeitoBoxesPJ() {

    let boxPJ = document.getElementsByClassName("center")

    for (let index = 0; index < boxPJ.length; index++) {

        let PJ = document.getElementById("boxPJ" + (index+1))

        PJ.addEventListener("click", function () {
            if ((index + 1) == PJ.id[5]) controlJanelaModal("PJ" + (index+1))
        })

        
    }
    
}