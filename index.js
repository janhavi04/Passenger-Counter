//document.getElementById("count-el").innerText = 5

let countEL = document.getElementById("count-el")

console.log(countEL)

let count = 0

function increment(){

    count = count + 1
    countEL.innerText = count
   

}
function save (){
    console.log(count)
}
save()