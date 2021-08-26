const btn = document.querySelector(".chakra-button");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function () {
  if (theme.getAttribute("href") != "css/darkreader.css") {
    console.log("It's currently light mode, changing to dark mode now");
    theme.href = "css/darkreader.css";
    document.querySelector(".chakra-icon").src = "/images/dark.svg";
    btn.classList.remove("css-1h84u6v");
    btn.classList.add("css-xpotm3");
  } else {
    console.log("It's currently dark mode, changing to light mode now");
    theme.href = "css/empty.css";
    document.querySelector(".chakra-icon").src = "/images/light.svg";
    btn.classList.remove("css-xpotm3");
    btn.classList.add("css-1h84u6v");
  }
});