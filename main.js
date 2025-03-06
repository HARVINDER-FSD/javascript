let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Problem 1. List of pitches on page load [3}

function fetchdata() {
    fetch('http://localhost:3000/pitches')
        .then((res) => res.json())
        .then((data) => profile(data))
        .catch((err) => console.log(err));
}

fetchdata();
function profile(data) {
    let store = data.map((el) => card(el.id, el.title, el.image, el.description, el.price, el.category));
    document.getElementById('data-list-wrapper').innerHTML = store.join(" ")
}

function card(id, tile, image, description, price, category) {

    let store = `
<div style="border: 1px solid black; height="200px"; width="200px"; text-align: center;">
<h2>${id}</h2>
<h2>${tile}</h2>
<img src="${image}" style="height:200px; width:200px">
<p>${description}</p>
<p>${price}</p>
<p>${category}</p>


</div>

 `
    return store;
}
pitchCreateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let obj = {
      title: pitchTitleInput.value,
      image: pitchImageInput.value,
      category: pitchCategoryInput.value,
      founder: pitchfounderInput.value,
      price: pitchPriceInput.value,
    };
    fetch("http://localhost:3000/pitches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => console.log("POST request successful:", data))
      .catch((error) => console.error("Error:", error));
  });