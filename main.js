const ctx = document.getElementById("chart").getContext('2d');

// create a new chart instance
const chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Nov'],
    datasets: [
      {
        label: 'BTC',
        data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
        borderColor: 'red',
        borderWidth: 2
      },
      {

        label: 'ETH',
        data: [31500, 41000, 88800, 26000, 46000, 32698, 50000, 3000, 18656, 24832, 36844],
        borderColor: 'blue',
        borderWidth: 2
      }
      ]
    },
     options: {
      responsive: true
     }
 })

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
})

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',() =>{
  document.body.classList.toggle('dark-theme');
})

function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
    if(display == "none"){
      document.getElementById(el).style.display = 'block';
    }else{
      document.getElementById(el).style.display = 'none';
    }

}
var imgAtual ="images/olhotachado.png";
var imgAnterior = "images/olhoaberto.png";
function trocar(){
  document.getElementById("figura").src =imgAtual;
  let aux = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = aux;
}