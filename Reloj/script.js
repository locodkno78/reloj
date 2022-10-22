const segAguja = document.querySelector('.seg-aguja');
const minAguja = document.querySelector('.min-aguja');
const horaAguja = document.querySelector('.hora-aguja');
const fechaHoy = document.querySelector('.fecha');
console.log(fechaHoy)


function setDate() {
    const now = new Date();     

    
    const segundos = now.getSeconds();
    const segundosDegrees = ((segundos / 60) * 360) + 90;
    segAguja.style.transform = `rotate(${segundosDegrees}deg)`;
    
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + ((segundos / 60) * 6) + 90;
    minAguja.style.transform = `rotate(${minDegrees}deg)`;
    
    const hora = now.getHours();
    const horaDegrees = ((hora / 12) * 360) + ((min / 60) * 30) + 90;
    horaAguja.style.transform = `rotate(${horaDegrees}deg)`;

    const date = new Date();
    fechaHoy.innerHTML = date.getDate();     
    console.log(date)
}

setInterval(setDate, 1000);

setDate();