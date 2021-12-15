window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 1000);
};

document.querySelector(".moon").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
