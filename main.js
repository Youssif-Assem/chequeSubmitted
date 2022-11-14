window.addEventListener("load", () => {
    let commentCol = document.querySelectorAll(".page .body #document tr td:last-child")
    let commentColDiv = document.querySelectorAll(".page .body #document tr td:last-child div")
    commentCol.forEach((comment, i) => {
        comment.addEventListener("click", (e) => {
            commentColDiv[i].focus()
        })
    })
    
  //DH ALGOZ2 BTA3 AL LOOPING BTA3 AL ACCEPT ALY FE AWL PAGE BY4OF MEN M3MOLO CHECK MEN L2
    let acceptCol = document.querySelectorAll(".page .body #document tr td:nth-child(4)")
    let acceptColBtn = document.querySelectorAll(".page .body #document tr button")
    acceptColBtn.forEach((acceptBtn) => {
        console.log(acceptBtn.children[0])
        acceptBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            acceptBtn.classList.toggle("checked")
            if(acceptBtn.children[0].classList.contains("fa-x")){
                acceptBtn.children[0].classList.replace("fa-x","fa-check")
            }
            else{
                acceptBtn.children[0].classList.replace("fa-check","fa-x")
            }

        })
    })
    //DH ALGOZ2 ALTANY BTA3 BY4OF MEN AT3MLO CLICK W MEN L2
    acceptCol.forEach((acceptBtn, i) => {
        acceptBtn.addEventListener("click", (e) => {
            acceptColBtn[i].click()
        })
    })
    

    let commentCol2 = document.querySelectorAll(".page #supporting-documen table tr:last-child td:first-child")
    let commentColDiv2 = document.querySelectorAll(".page #supporting-documen table td:first-child div[contenteditable='true']")
    commentCol2.forEach((comment, i) => {
        comment.addEventListener("click", (e) => {
            commentColDiv2[i].focus()
        })
    })


    //DE ALSAF7AT hena b3d kol class de page rkm kam
    let pages = document.getElementsByClassName("page")
    //DE BT3ML CALL LL SAF7AT ALY 2BLHA
    let previousBtn = document.getElementById("previousBtn")
    //DE ALMFROD T3ML CALL LL NEXT PAGE
    let nextBtn = document.getElementById("nextBtn")
    //DH AL ITEMS ALY 3ALA AL4MAL B4OF MEN FEHOM FEN W HNNDH 3ALA MEN LAMA Y3ML NEXT AW PREVIOUS
    let navItems = document.getElementsByClassName("process-item")
    let pageNo = 1
    console.log(pages[0])
    previousBtn.addEventListener("click",(e)=>{
        console.log("fuck")
        if(pageNo != 1){
            pages[pageNo-1].classList.add("hidden")
            navItems[pageNo-1].classList.remove("active")
            pageNo--;
            navItems[pageNo-1].classList.add("active")
            pages[pageNo-1].classList.remove("hidden")
            if (nextBtn.classList.contains("disabled")) {
                nextBtn.classList.remove("disabled")
            }
            if(pageNo == 1){
                previousBtn.classList.add("disabled")
            }
          
            else if (previousBtn.classList.contains("disabled")) {
                previousBtn.classList.remove("disabled")
            }
            
        }
    })
    //DE ALY BT3ML MOVING BEN AL SCREENS
    nextBtn.addEventListener("click",(e)=>{
        if(pageNo < pages.length){
            
            pages[pageNo-1].classList.add("hidden")
            navItems[pageNo-1].classList.remove("active")
            pageNo++;
            navItems[pageNo-1].classList.add("active")
            pages[pageNo-1].classList.remove("hidden")
            if (previousBtn.classList.contains("disabled")) {
                previousBtn.classList.remove("disabled")
            }
            if(pageNo == pages.length){
                nextBtn.classList.add("disabled")
            }
            else if (nextBtn.classList.contains("disabled")) {
                nextBtn.classList.remove("disabled")
            }
        }
        
    })
  

    let UVCheck = document.getElementById("UVCheck")
    let UVList = document.getElementById("UVList")
    UVCheck.addEventListener("click",()=>{
        UVList.disabled = !UVList.disabled 
    })
})