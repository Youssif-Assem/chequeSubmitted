window.addEventListener("load", () => {
    let commentCol = document.querySelectorAll(".page .body #document tr td:last-child")
    let commentColDiv = document.querySelectorAll(".page .body #document tr td:last-child div")
    commentCol.forEach((comment, i) => {
        comment.addEventListener("click", (e) => {
            commentColDiv[i].focus()
        })
    })
    

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



    let pages = document.getElementsByClassName("page")
    let previousBtn = document.getElementById("previousBtn")
    let nextBtn = document.getElementById("nextBtn")
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