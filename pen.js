
let mouse = false;
let x = 0;
let y = 0;
let color = "white";

const pizarra = document.getElementById('pizarra');
const papel = pizarra.getContext('2d');

var boton = document.getElementById("boton_borrar");
boton.addEventListener("click", clearcanvas1 );

function clearcanvas1()
{
    pizarra.clearRect(0,0,canvas.width,canvas.height);
}



pizarra.addEventListener('mousedown', event => {
x = event.offsetX;
y = event.offsetY;
mouse = true;
});

pizarra.addEventListener('mousemove', event => {
if (mouse === true) {
lapiz(papel, x, y, event.offsetX, event.offsetY, color);
x = event.offsetX;
y = event.offsetY;
}
});

window.addEventListener('mouseup', event => {
if (mouse === true) {
lapiz(papel, x, y, event.offsetX, event.offsetY, color);
x = 0;
y = 0;
mouse = false;
}
});


function lapiz(papel, x1, y1, x2, y2, color) {
papel.beginPath();
papel.strokeStyle = color;
papel.lineWidth = 2;
papel.moveTo(x1, y1);
papel.lineTo(x2, y2);
papel.stroke();
papel.closePath();
}
clearcanvas1();

