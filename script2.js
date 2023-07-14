let input = document.querySelector("input");
let btnShow = document.querySelector("button");

input.addEventListener("keyup", () => {
  if(input.value.length > 1) btnShow.disabled = true
  else btnShow.disabled =false;
});


const btn = document.querySelector("button");
const img = document.querySelector("img");
const mealContainer = document.querySelector(".meal-container");
const mealName = document.querySelector(".meal-container h2");
const mealInstructions = document.querySelector(".meal-container .instructions");
const mealInfo = document.querySelector(".meal-container .info");
const mealIngredients = document.querySelector(".meal-container .ingredients");
const mealVideo = document.querySelector(".youtubevideo");

btn.addEventListener("click", (event) => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((res) => res.json())
  .then((data) => createMeal(data.meals[0]));
});

function createMeal(mealData) {
  img.src = mealData.strMealThumb;

  mealName.innerText = mealData.strMeal;
  mealInstructions.innerText = mealData.strInstructions;
  mealInfo.innerHTML = `<strong>Category:</strong> ${mealData.strCategory}<br /><strong>Area:</strong> ${mealData.strArea} `;
  mealVideo.src = `https://youtube.com/embed/${mealData.strYoutube.slice(-11)}`

  for(let i=1; i<=20; i++) {
    if(mealData[`strIngredient${i}`]) {
      let listItem = document.createElement("li");
      listItem.innerText = mealData[`strIngredient${i}`] + " : " + mealData[`strMeasure${i}`];
      mealIngredients.appendChild(listItem);
    } else break;
  }

  mealContainer.classList.remove("hidden");

  if (mealData.strYoutube) {
    mealVideo.src = `https://youtube.com/embed/${mealData.strYoutube.slice(-11)}`
    mealVideo.classList.remove("hidden");
  }  
}

