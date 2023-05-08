const invoer = document.getElementById("invoer")
const hoofd = document.getElementById("hoofd")

invoer.addEventListener("input", show)

function show(){

if(invoer.value){
  
hoofd.innerText = invoer.value + " is cool"

} else{

hoofd.innerText = "Invoer Text Display"
  
}

}

