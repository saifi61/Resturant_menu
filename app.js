import { menu } from "./data.js";

let container = document.querySelector(".items-container");
let allBtn = document.querySelector(".all-btn");
let startersBtn = document.querySelector(".starters-btn");
let mainsBtn = document.querySelector(".mains-btn");
let dessertsBtn = document.querySelector(".desserts-btn");
let beveragesBtn = document.querySelector(".beverages-btn");
let search = document.querySelector("#search-input");
let toggleBtn = document.querySelector(".navbar-toggler");
let toggleNavbar = document.querySelector(".toggle-navbar");

renderMenu("all");

function renderMenu(itemCatagory) {
  let menuHTML = "";
  if (itemCatagory === "all") {
    menu.forEach((item) => {
      menuHTML += `<div class="menu-item col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <img src="${item.img}" class="card-img-top menu-item-img" alt="${item.title}">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
                      <p class="card-text card-description">${item.description}</p>
                      <p class="card-text card-catagory"><small class="text-muted">Category: ${item.category}</small></p>
                    </div>
                  </div>
                </div>`;
    });
  } else {
    menu.forEach((item) => {
      if (item.category === itemCatagory) {
        menuHTML += `<div class="menu-item col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <img src="${item.img}" class="card-img-top menu-item-img" alt="${item.title}">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
                      <p class="card-text card-description">${item.description}</p>
                      <p class="card-text card-catagory"><small class="text-muted">Category: ${item.category}</small></p>
                    </div>
                  </div>
                </div>`;
      }
    });
  }

  container.innerHTML = menuHTML;
}

function renderSearch() {
  let menuHTML = "";
  menu.forEach((item) => {
    if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
      menuHTML += `<div class="menu-item col-12 col-md-6 col-lg-4">
                <div class="card">
                  <img src="${item.img}" class="card-img-top menu-item-img" alt="${item.title}">
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
                    <p class="card-text card-description">${item.description}</p>
                    <p class="card-text card-catagory"><small class="text-muted">Category: ${item.category}</small></p>
                  </div>
                </div>
              </div>`;
    }
  });

  container.innerHTML = menuHTML;
}

function navbarToggle() {
  if (toggleNavbar.style.display === "") {
    toggleNavbar.style.display = "flex";
    toggleNavbar.style.flexDirection = "column";
  }
  else if(toggleNavbar.style.display === "flex"){
    toggleNavbar.style.display = "";
    toggleNavbar.style.flexDirection = "";
  }
  // console.log(toggleNavbar.style);
}

allBtn.addEventListener("click", () => renderMenu("all"));
startersBtn.addEventListener("click", () => renderMenu("starters"));
mainsBtn.addEventListener("click", () => renderMenu("mains"));
dessertsBtn.addEventListener("click", () => renderMenu("desserts"));
beveragesBtn.addEventListener("click", () => renderMenu("beverages"));

search.addEventListener("change", renderSearch);

toggleBtn.addEventListener("click", navbarToggle);

window.addEventListener("resize", () => {
  if(toggleNavbar.style.display === "flex"){
    toggleNavbar.style.display = "";
    toggleNavbar.style.flexDirection = "";
  }
});
