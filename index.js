let myPoints= document.getElementById("score-home")
let count=0
let guestPoints= document.getElementById("score-guest")
let guestCount=0
let saveEl= document.getElementById("prev")
function increase(){
    count += 1
    myPoints.textContent= count
}
function increase2(){
    count+= 2
    myPoints.textContent= count
}
function increase3(){
    count+= 3
    myPoints.textContent= count
}
function increaseGuest(){
    guestCount += 1
    guestPoints.textContent= guestCount
}
function increaseGuest2(){
   guestCount += 2
    guestPoints.textContent= guestCount
}
function increaseGuest3(){
    guestCount += 3
    guestPoints.textContent= guestCount
}
function save(){
    let saveCountStr= "Home-" + count + " | "+"Guest-" +guestCount + " , " 
    saveEl.textContent += saveCountStr
    count=0
    guestCount=0
}

function newGame(){
     count=0
    myPoints.textContent= count
     guestCount=0
    guestPoints.textContent= guestCount
    let saveCountStr=  "Previous Games: "
    saveEl.textContent= saveCountStr
      
      
}



 
