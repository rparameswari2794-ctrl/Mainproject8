function searchList(){
     const searchmodal=document.getElementById("searchModal");
    if(searchmodal.style.display==="none" || searchmodal.style.display===""){ 
        searchmodal.style.display="flex";
    } else{
        searchmodal.style.display="none";
    }
}

document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "images/home-img.png",
    "images/home-img1.png",
    "images/home-img2.png"
  ];

  let index = 0;
  const imgEl = document.getElementById("containerImg");

  if (imgEl) {
    setInterval(() => {
      index = (index + 1) % images.length;
      imgEl.src = images[index];
    }, 2000);
  }

});
let currentIndex = 0;

function startTestimonialSlider() {
  const slides = document.querySelectorAll(".test-card > div");

  if (!slides.length) return; // important safety check

  slides.forEach(slide => slide.classList.remove("active"));

  slides[currentIndex].classList.add("active");

  currentIndex = (currentIndex + 1) % slides.length;
}

document.addEventListener("DOMContentLoaded", () => {
  startTestimonialSlider();
  setInterval(startTestimonialSlider, 3000);
});

function openLogpop(){
    const logpop=document.getElementById("logPop");
    if(logpop.style.display==="none" || logpop.style.display===""){
        document.getElementById("logPop").style.display="flex";
        document.getElementById("logPop1").style.display="none";
    } else{
        document.getElementById("logPop").style.display="none";
    }
}
function openLogpop1(){
    const logpop1=document.getElementById("logPop1");
    if(logpop1.style.display==="none" || logpop1.style.display===""){
        document.getElementById("logPop1").style.display="flex";
        document.getElementById("logPop").style.display="none"; 
    } else{
        document.getElementById("logPop1").style.display="none";
    }
}
function openLogpop2(){
    openLogpop();
}

function closeLog(){
    document.getElementById("logPop").style.display="none";
}
function closeLog1(){
    document.getElementById("logPop1").style.display="none";
}
function openAlert() {
  const alertBox = document.getElementById("logalertEmail");
  alertBox.style.display = "flex";

  setTimeout(() => {
    alertBox.style.display = "none";
    document.getElementById("logPop").style.display = "none";
  }, 2000);
}

function openAlert1() {
  const alertBox = document.getElementById("logalertMobile");

  alertBox.style.display = "flex";

  setTimeout(() => {
    alertBox.style.display = "none";
    document.getElementById("logPop1").style.display = "none";
  }, 2000);
}

function openContact() {
 
    const alertBox1 = document.getElementById("contactAlert");
    if (alertBox1) {
      alertBox1.style.display = "flex";
    }   
  
   setTimeout(() => {
  window.location.href="home.html";
  }, 2000);
}

function opendessert() {
  const dessertBox = document.getElementById("dessertList");
  const link = document.getElementById("pa-link");

  if (!dessertBox || !link) return; // safety for other pages

  if (dessertBox.style.display === "none" || dessertBox.style.display === "") {
    dessertBox.style.display = "flex";
    link.classList.add("active");   // better than inline color
  } else {
    dessertBox.style.display = "none";
    link.classList.remove("active");    
  }
}
function openDessert(){
    window.location.href="dessert.html";
}
function openPastry(){
    window.location.href="pastry.html";
}
function openBrown(){
    window.location.href="brownie.html";
}
function openTart(){
    window.location.href="tart.html";
}
function openTea(){
    window.location.href="tea.html";
}
function openCup(){
    window.location.href="cupcake.html";
}
function openJar(){
    window.location.href="jar.html";
}
function openCombo(){
    window.location.href="combo.html";
}
function openOrder(){
  window.location.href="order.html";
}
function openDelivery() {
  const deliveryBox = document.getElementById("orderDelivery");
  const pickBox = document.getElementById("orderPick");
  const deliveryBtn = document.getElementById("deliveryBtn");
  const pickBtn = document.getElementById("pickBtn");

  if (!deliveryBox || !pickBox || !deliveryBtn || !pickBtn) return;

  deliveryBox.style.display = "flex";
  pickBox.style.display = "none";

  deliveryBtn.style.backgroundColor = "rgb(252, 226, 226)";
  pickBtn.style.backgroundColor = "white";
}

function openPick() {
  const deliveryBox = document.getElementById("orderDelivery");
  const pickBox = document.getElementById("orderPick");
  const deliveryBtn = document.getElementById("deliveryBtn");
  const pickBtn = document.getElementById("pickBtn");

  if (!deliveryBox || !pickBox || !deliveryBtn || !pickBtn) return;

  pickBox.style.display = "flex";
  deliveryBox.style.display = "none";

  pickBtn.style.backgroundColor = "rgb(252, 226, 226)";
  deliveryBtn.style.backgroundColor = "white";
}

document.addEventListener("DOMContentLoaded", openPick);



function openorderAlert() {
  document.getElementById("orderAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("orderAlert").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  openPick();
});



