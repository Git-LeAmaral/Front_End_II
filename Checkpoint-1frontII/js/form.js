import '../css/form.css';

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".blocoform").classList.add("active");
  });
  document.querySelector(".blocoform .close-btn").addEventListener("click",function(){
    document.querySelector(".blocoform").classList.remove("active");
  });

  /* js*/
  document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".blocoform").classList.add("active");
  });
  document.querySelector(".blocoform .close-btn").addEventListener("click", function () {
    document.querySelector(".blocoform").classList.remove("active");
  });
  document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".header").classList.add("blur");
  });
  document.querySelector(".blocoform .close-btn").addEventListener("click", function () {
    document.querySelector(".header").classList.remove("blur");
  });
  document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".footer-container").classList.add("blur");
  });
  document.querySelector(".blocoform .close-btn").addEventListener("click", function () {
    document.querySelector(".footer-container").classList.remove("blur");
  });
  document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".home").classList.add("blur");
  });
  document.querySelector(".blocoform .close-btn").addEventListener("click", function () {
    document.querySelector(".home").classList.remove("blur");
  });
  document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".blursection").classList.add("blur");
  });
  document.querySelector(".blocoform .close-btn").addEventListener("click", function () {
    document.querySelector(".blursection").classList.remove("blur");
  });
