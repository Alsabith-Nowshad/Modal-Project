let openBtn = document.querySelector(".open-btn")
let modal = document.querySelector(".modal")
let close = document.querySelector(".close")
let modelSec = document.querySelector(".modal-sec")


openBtn.addEventListener("click",function(){

    modal.style.display = "block"
    modelSec.style.display = "block"
})

close.addEventListener("click",function(){

    modal.style.display = "none"
    modelSec.style.display = "none"
})

let name =  document.getElementById("name")
let number =  document.getElementById("number")
let email =  document.getElementById("email")

let opt1 = document.getElementById("Opt1")
let opt2 = document.getElementById("Opt2")
let opt3 = document.getElementById("Opt3")
let opt4 = document.getElementById("Opt4")

let submit = document.querySelector(".submit")


let NameCon = document.querySelector(".Name-con")

let NumberCon = document.querySelector(".Number-con")

let EmailCon = document.querySelector(".Email-con")

let prize = document.querySelector(".prize")

let passTitle = document.querySelector(".pass-Title")

let category = document.getElementById("Category")

let ticket = document.querySelector(".ticket")


submit.addEventListener("click",function(){
    passTitle.textContent = category.value
    ticket.style.display = "block"
    NameCon.innerText = name.value
    NumberCon.innerText = number.value
    EmailCon.innerText = email.value

   if(category.value == opt1.textContent){
    prize.textContent = "$100"
   }else if(category.value == opt2.textContent){
    prize.textContent = "$300"
   }else if(category.value == opt3.textContent){
    prize.textContent = "$250"
   }else if(category.value == opt4.textContent){
    prize.textContent = "$2000"
   }
})

modal.addEventListener("click",function(){
    modal.style.display = "none"
modelSec.style.display = "none"
})
