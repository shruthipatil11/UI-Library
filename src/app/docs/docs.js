const modal = document.querySelector(".modal");

const btn = document.getElementById("open-modal-btn");

const modalClose = document.querySelector("#modal .close");

btn.addEventListener("click", () => {
  modal.classList.remove("display-none");
});

modalClose.addEventListener("click", () => {
  modal.classList.add("display-none");
});

let toastMessage = document.getElementById("toastMessage");

const openToast = () => {
  toastMessage.className = "display";
  setTimeout(() => {
    toastMessage.className = toastMessage.className.replace("display", "");
  }, 5000);
};

const closeToast = () => {
  toastMessage.className = toastMessage.className.replace("display", "");
};

let sliderRange = document.getElementById("range");
let showSelectedRange = document.getElementsByClassName("showSelectedRange")[0];
showSelectedRange.innerHTML = `Selected range is ${sliderRange.value} `;

const getRangeValue = (e) => {
  showSelectedRange.innerHTML = `Selected range is ${e.target.value} `;
};