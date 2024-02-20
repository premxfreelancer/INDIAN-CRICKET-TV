const todaybutton = document.getElementById("todaybutton");
const nextbutton = document.getElementById('nextbutton');
const previousbutton = document.getElementById('previousbutton');
const newsbutton = document.getElementById('newsbutton');
const homebutton = document.getElementById('homebutton');
const centers = document.getElementById('centers');
const centers2 = document.getElementById('centers2');
function change1() {
    todaybutton.style.background = 'none';
    homebutton.style.background = 'none';
    previousbutton.style.background = 'rgb(0, 170, 255)';
    newsbutton.style.background = 'none';
    nextbutton.style.background = 'none';

}

function change2() {
    todaybutton.style.background = 'none';
    homebutton.style.background = 'none';
    previousbutton.style.background = 'none';
    newsbutton.style.background = 'none';
    nextbutton.style.background = 'rgb(0, 170, 255)';

}

function change3() {
    todaybutton.style.background = 'none';
    homebutton.style.background = 'rgb(0, 170, 255)';
    previousbutton.style.background = 'none';
    newsbutton.style.background = 'none';
    nextbutton.style.background = 'none';
    centers2.style.display = 'none';
}
function change4() {
    todaybutton.style.background = 'rgb(0, 170, 255)';
    homebutton.style.background = 'none';
    previousbutton.style.background = 'none';
    newsbutton.style.background = 'none';
    nextbutton.style.background = 'none';
    // centers.style.display = 'none';
  
    centers2.style.display = 'flex';
   
    centers2.innerHTML = "Today: " +"<br/>" + matchs[date];
    

}
function change5() {
    todaybutton.style.background = 'none';
    homebutton.style.background = 'none';
    previousbutton.style.background = 'none';
    newsbutton.style.background = 'rgb(0, 170, 255)';
    nextbutton.style.background = 'none';


}

