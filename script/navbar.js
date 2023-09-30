var upper = document.querySelector(".upper")
try{
wrapper = document.querySelector(".wrapper")
wrapper.style.marginTop = "0px"
}
catch(e) {
    console.log(e)
}
window.addEventListener("scroll", ()=>{
    var pos = this.scrollY
    if(pos > 0){
        upper.style.display = "none"
    }
    else{
        upper.style.display = "flex"
    }
})