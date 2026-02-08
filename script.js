const shareBtn = document.querySelector(".shareBtn");
const shareBtnActive = document.querySelector(".shareBtnActive");
const footerSocials = document.querySelector(".footerSocials");
const cardFooter = document.querySelector(".cardFooter");

shareBtn.addEventListener("click", (e) => {
  footerSocials.classList.toggle("hidden");
  cardFooter.classList.toggle("hidden-mobile-only");
});

shareBtnActive.addEventListener("click", (e) => {
  cardFooter.classList.toggle("hidden-mobile-only");
  footerSocials.classList.toggle("hidden");
});
