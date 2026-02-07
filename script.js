const shareBtn = document.querySelector(".shareBtn");
const shareBtnActive = document.querySelector(".shareBtnActive");
const footerSocials = document.querySelector(".footerSocials");
const cardFooter = document.querySelector(".cardFooter");

shareBtn.addEventListener("click", (e) => {
  footerSocials.style.display = "flex";
  cardFooter.style.display = "none";
});

shareBtnActive.addEventListener("click", (e) => {
  cardFooter.style.display = "flex";
  footerSocials.style.display = "none";
});
