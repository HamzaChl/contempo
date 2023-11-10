let menu = document.getElementById("mobile-menu");
let hamenu = document.getElementById("hamburger");

hamenu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

const mediaQuerySm = window.matchMedia('(min-width: 950px)');

if(mediaQuerySm.matches){
  document.getElementById("mobile-menu").style.display = "none";
}


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

