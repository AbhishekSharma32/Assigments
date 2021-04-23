// window load event is called then bindEvents will be called.
// load is an event name
//window.addEventListener('load', bindEvents);
window.addEventListener('DOMContentLoaded', bindEvents);
// image event attach
//console.log('Image is ',document.getElementById('like'));
function bindEvents(){
    // click is an event name
    //var likes = document.querySelectorAll(".like");
    document.querySelector("#like").addEventListener('click',plusCounter);
}

var counter = 0;
function plusCounter(){

    counter++;
    document.querySelector('#count').innerHTML = `<strong> ${counter} </strong>`;
    //document.getElementById('count').innerHTML = `<strong> ${counter} </strong>`;
    //console.log('Counter is ',counter);
}