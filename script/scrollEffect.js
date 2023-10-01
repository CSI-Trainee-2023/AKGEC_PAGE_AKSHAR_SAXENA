try {
    var testimonial = document.querySelector(".testimonalSection")
    var courses = document.querySelector(".coursesSection")
    wrapper = document.querySelector(".wrapper")
    wrapper.style.marginTop = "0px"
    window.addEventListener("scroll", () => {
        var pos = this.scrollY
        if (pos > 300) {
            courses.classList.add('active')
        }
        else {
            courses.classList.remove('active')
        }
        if (pos > 950) {
            testimonial.classList.add('active')
        }
        else {
            testimonial.classList.remove('active')
        }
    })
}
catch (e) {
    console.log(e)
}
