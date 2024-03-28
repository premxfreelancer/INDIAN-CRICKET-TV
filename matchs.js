

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
    "23/02/2024": "Ind vs Eng",
"28/03/2024": "RR vs DC",
"29/03/2024" : "KKR vs RCB",
"30/03/2024" : "LSG vs PBKS",
"31/03/2024" : "GT vs SRH",
"31/03/2024" : "CSK vs DC",
"01/04/2024" : "MI vs RR",
"02/04/2024" : "RCB vs LSG",
"03/04/2024" : "DC vs KKR",




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
