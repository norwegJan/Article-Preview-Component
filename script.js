const shareBtn = document.querySelector(".shareBtn");
const shareBtnActive = document.querySelector(".shareBtnActive");
const footerSocials = document.querySelector(".footerSocials");
const cardFooter = document.querySelector(".cardFooter");

shareBtn.addEventListener("click", (e) => {
  footerSocials.classList.remove("hidden");
  cardFooter.classList.add("hidden");
});

shareBtnActive.addEventListener("click", (e) => {
  cardFooter.classList.remove("hidden");
  footerSocials.classList.add("hidden");
});
