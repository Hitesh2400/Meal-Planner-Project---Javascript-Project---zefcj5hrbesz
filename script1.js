const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const formBtn = document.getElementById("form");

formBtn.addEventListener("input", () => {
	if(height.value.length > 0 && weight.value.length > 0 && age.value.length > 0){
		Btn.removeAttribute('disabled');
	}else {
		Btn.setAttribute("disabled", "disabled");
	}
})

function showHide() {
	let x = document.getElementById("row-card");
	if(x.style.display === "none") {
		x.style.display = "block";
	}else {
		x.style.display = "none";
	}

	let y = document.getElementById("meals");
	if(y.style.display === "none") {
		y.style.display = "flex";
	}else {
		y.style.display = "none";
	}
}

const btn = document.getElementById("meal-button");
const img = document.getElementById("meal-img");
const askContainer = document.querySelector(".ask-container");
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
	mealInfo.innerHTML = `<strong>Category:</strong> ${mealData.strCategory}<br /> <strong>Area:</strong> ${mealData.strArea}`;
	
	for(let i=1; i<=20; i++){
		if(mealData[`strIngredient${i}`]){
			let listItem = document.createElement("li");
			listItem.innerText = 
				mealData[`strIngredient${i}`] + " : " + mealData[`strMeasure${i}`];
			mealIngredients.appendChild(listItem)
		}else break;
	}

	askContainer.style.marginTop = "100px";
	mealContainer.classList.remove("hidden");
	if(mealData.strYoutube) {
		mealVideo.src = `https://youtube.com/embed/${mealData.strYoutube.slice(-11)}`;
		mealVideo.classList.remove("hidden");
	}
}