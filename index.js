let saveEl = document.getElementById("save-el")

let countEL = document.getElementById("count-el")

console.log(countEL)

let count = 0

function increment(){

    count += 1
    countEL.textContent = count
   

}
function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEL.textContent = 0
    
}

 


