const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav__li a");

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 600;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("#a-" + id).classList.add("active");
            })
        }
    })

    const newWidth = (top / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector(".progress").style.width = `${newWidth}%`;
}

navLinks.forEach(link => {
    link.addEventListener("click",()=>{
        let id = link.getAttribute('id');
        document.querySelector("#"+id.slice(2,id.length)).scrollIntoView();
    })
})

const homeArrow = document.querySelector(".home__arrow");
homeArrow.addEventListener("click",()=>{
    document.querySelector("#services").scrollIntoView();
});