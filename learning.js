const togglebtn = document.getElementById('toggle');
const navlinks = document.getElementById('nav-link');

   togglebtn.addEventListener("click",() =>{
      navlinks.classList.toggle('active');
   })
const loader = document.getElementById(`loader`);
   window.addEventListener("load", () =>{
      loader.style.display = "none";   
   })