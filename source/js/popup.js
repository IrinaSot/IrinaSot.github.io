var form = document.querySelector(".form");
var successPopup = document.querySelector(".popup-success");
var failurePopup = document.querySelector(".popup-failure");
var email = document.querySelector("[name=email]");
var userName = document.querySelector("[name=family]");
var surname = document.querySelector("[name=name]");
var popupOK = document.querySelector(".popup__button--ok");
var popupClose = document.querySelector(".popup__button--close");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log('sddd');
  if (!userName.value || !surname.value || !email.value) {
    failurePopup.classList.add("popup--show");
  } else {
    successPopup.classList.add("popup--show");
  }
});

popupClose.addEventListener("click", function () {
  successPopup.classList.remove("popup--show");
});

popupOK.addEventListener("click", function () {
  failurePopup.classList.remove("popup--show");
});
