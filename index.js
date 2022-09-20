const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  // button lick active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function() {
      let curBtn = document.querySelectorAll(".active-btn");
      curBtn[0].className = curBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }
  // section active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id; // targeting data-id in each btn
    if (id) {
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other section
      sections.forEach((sec) => {
        sec.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  const themeBtn = document.querySelector('.theme-btn')
  themeBtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
  })
}
pageTransitions();
