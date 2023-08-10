const list = document.querySelector("#List");
const addNew = document.querySelector("#AddNew");
const contact = document.querySelector("#Contact");
const listSection = document.querySelector("#listSection");
const addSection = document.querySelector("#addSection");
const contactSection = document.querySelector("#contactSection");
list.addEventListener("click", () => {
  listSection.classList.replace("listSectionHide", "listSection");
  addSection.classList.replace("addSection", "addSectionHide");
  contactSection.classList.replace("contactSection", "contactSectionHide");
});
addNew.addEventListener("click", () => {
  listSection.classList.replace("listSection", "listSectionHide");
  addSection.classList.replace("addSectionHide", "addSection");
  contactSection.classList.replace("contactSection", "contactSectionHide");
});
contact.addEventListener("click", () => {
  listSection.classList.replace("listSection", "listSectionHide");
  addSection.classList.replace("addSection", "addSectionHide");
  contactSection.classList.replace("contactSectionHide", "contactSection");
});

const date = document.querySelector("#date");
function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const hours = currentDate.getHours();
  const minutes = formatTime(currentDate.getMinutes());
  const seconds = formatTime(currentDate.getSeconds());
  const formatHours = formatTime(((hours + 11) % 12) + 1);
  const format = hours < 12 || hours === 24 ? "AM" : "PM";
  date.innerHTML = `${currentDate.toLocaleDateString(
    "en",
    options
  )} ${formatHours}:${minutes}:${seconds} <small>${format}</small>`;
}
function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}
getCurrentDate();
setInterval(getCurrentDate, 1000);
