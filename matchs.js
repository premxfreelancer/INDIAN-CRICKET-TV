

let today = new Date();
let date = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});
// console.log(date);

let matchs = {
    "20/02/2024": "Ind vs Us",
    "20/02/2024": "Ind vs pak",
    "23/02/2024": "Ind vs Eng"
};



if (matchs[date]) {
    console.log(matchs[date]);
    todaybutton.style.background = 'red';

// Get the element you want to animate
let element = document.getElementById('todaybutton');

// Define the keyframes
let keyframes = [
  { opacity: 0 }, 
  { opacity: 1 },
  {opicity: 0}  
];

// Define the timing options
let timing = {
  duration: 5000, // 1 second
  iterations: Infinity // repeat forever
};

// Start the animation
element.animate(keyframes, timing);



} else {

    console.log("No match today");
   
}
