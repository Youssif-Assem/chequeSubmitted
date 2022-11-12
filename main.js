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
    

    //
})