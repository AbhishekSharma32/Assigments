
window.addEventListener('load', bindEvent);
function bindEvent(){
    document.querySelector('#compute').addEventListener('click',computeSalary);
}

function computeSalary(){
    let basicSalary = parseInt(document.querySelector('#basicsalary').value);
    salaryOperations.takeSalary(basicSalary);
   
    let divTag =document.querySelector('#result');
    for(let key in salaryOperations){
        if(key === 'basicSalary' || key === 'takeSalary'){
            continue; 
        }
        console.log(key, typeof salaryOperations[key]);
        let pTag = document.createElement('p');
        pTag.innerText = `${key.toUpperCase()} is ${salaryOperations[key]()}`;
        divTag.appendChild(pTag);
    }
}