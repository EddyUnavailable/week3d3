let counterDisplayElem = document.querySelector('.counterDisplay');
let counterMinusElem = document.querySelector('.counterMinus');
let counterPlusElem = document.querySelector('.counterPlus');

let count = localStorage.getItem(`count`) || 0;
counterDisplayElem.textContent = count

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
    localStorage.setItem(`count `,count)
};

function random_bg_color() {
    // Generate random values for red, green, and blue components between 0 and 255.
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // Output the generated color to the console.
    console.log(bgColor);
    // Set the background color of the document body to the generated color.
    document.body.style.background = bgColor;
    
}setInterval(random_bg_color, 50)


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const colour = formData.get("colour");
  localStorage.setItem("colour", colour);
});

function savePreferences(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const colour = formData.get("colour");
    const preferences = {
    colour,
  };
  localStorage.setItem("preferences", JSON.stringify(preferences));
}
form.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));
if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}

function loadPreferences() {
    // load the prefs
    const preferences = JSON.parse(localStorage.getItem("preferences"));
  
    // if we have some prefs
    if (preferences) {
      // set the form value
      const input = document.querySelector("input");
      input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved
  
      // set the body color to the user colour preference (intentional US / UK spelling difference...)
      const body = document.querySelector("body");
      body.style.color = preferences.colour || "#000000";
    }
  }

  function clearPreferences(event) {
    event.preventDefault();
        localStorage.removeItem("preferences");
  }

  const defaults = {
    colour: "#000000",
  };
  
 /* body.style.color = preferences.colour || defaults.colour; */

const colour = localStorage.getItem("colour");
if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}

// Function to handle changes in local storage
function handleLocalStorageChange(event) {
    if (event.key === "favouriteColour") {
      // Do something when the specific local storage key changes
      const newValue = event.newValue;
      console.log(`Local storage favouriteColour changed to: ${newValue}`);
    }
  }
  
  // Add an event listener to listen for changes in local storage
  window.addEventListener("storage", handleLocalStorageChange);







/*random_bg_color();

/*setInterval(function() {
    console.log('Black')
    Set: document.body.style.backgroundColor = "for";
}, 5000)
/* setTimeout(function() {
    console.log('Beep!')
}, 2000)


setTimeout(() => {
    console.log('Beep')
    Set: document.body.style.backgroundColor = "blue";
}, 2000)


function greet() {
    console.log('Im a sheep')
    Set: document.body.style.backgroundColor = "pink";
}
setTimeout(greet, 4000)



setInterval(function() {
    console.log('Black')
    Set: document.body.style.backgroundColor = "black";
}, 5000) // do nothing (because the function is empty) every second

setInterval(() => {
    console.log('red')
    Set: document.body.style.backgroundColor = "red";
}, 10000)

/*function buttIn() {
    console.log('Yes, but...')
}
setInterval(buttIn, 5000)
// cummulative layout shift



const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
  console.log()  
}); */