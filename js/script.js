var openFormButton = document.querySelector(".open-form-button");
var searchForm = document.querySelector(".search-form");
var dateinInput = searchForm.querySelector(".datein-input");
var dateoutInput = searchForm.querySelector(".dateout-input");
var numberAdultInput = searchForm.querySelector(".number-adult-input");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("number");
} catch (err) {
  isStorageSupport = false;
}

searchForm.classList.remove("search-form-show");
searchForm.classList.add("search-form-close");
openFormButton.addEventListener("click", function () {
  searchForm.classList.toggle("search-form-close");
  searchForm.classList.toggle("search-form-show");
  searchForm.classList.remove("search-form-error");
  if (document.querySelector("p.error-message")) {
    document.querySelector("p.error-message").remove()
  }
  dateinInput.focus();
  if (storage) {
    numberAdultInput.value = storage;
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!dateinInput.value || !dateoutInput.value) {
    evt.preventDefault();
    var errorMessage = document.createElement("p");
    searchForm.append(errorMessage);
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Заполните, пожалуйста, дату";
    searchForm.classList.remove("search-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("number", numberAdultInput.value);
    }
  }
});

