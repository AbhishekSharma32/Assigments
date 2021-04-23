
window.addEventListener('DOMContentLoaded', bindEvents);

function bindEvents(){
  
    document.querySelector("#like").addEventListener('click',plusCounter);
}

var counter = 0;
function plusCounter(){

    counter++;
    document.querySelector('#count').innerHTML = `<strong> ${counter} </strong>`;
    
}