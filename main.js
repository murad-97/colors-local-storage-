let lis = document.querySelectorAll("li");
let background = document.querySelector(".background");
//  defult background color
lis.forEach((li) => {
  if (window.localStorage.getItem("color") === li.getAttribute("data-type")) {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    background.style.backgroundColor = `rgb(${window.localStorage.getItem(
      "color"
    )})`;
    document.body.style.backgroundColor = `rgb(${window.localStorage.getItem(
      "color"
    )},0.3)`;
  }
});
//hover
lis.forEach((li) => {
  li.addEventListener("mouseover", () => {
    background.style.backgroundColor = `rgb(${li.getAttribute("data-type")})`;
  });
  li.addEventListener("mouseout", () => {
    lis.forEach((li) => {
      if (li.getAttribute("class") === "active") {
        background.style.backgroundColor = `rgb(${li.getAttribute(
          "data-type"
        )})`;
      }
    });
  });
});

//change background color
lis.forEach((li) => {
  li.addEventListener("click", () => {
    window.localStorage.setItem("color", li.getAttribute("data-type"));
    window.localStorage.getItem("color");
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    background.style.backgroundColor = `rgb(${window.localStorage.getItem(
      "color"
    )})`;
    document.body.style.backgroundColor = `rgb(${window.localStorage.getItem(
      "color"
    )},0.3)`;
  });
});
