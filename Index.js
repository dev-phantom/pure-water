test = () => {
  let loadedBags =document.querySelector("#total").value;
  let remainder = document.getElementById('remains').value;
  let losses = document.getElementById('loss').value;
  let display = document.getElementById('display');
  let profitDisplay = document.getElementById('profit');
  let soldbags = loadedBags - remainder;
  let amountsold = 130;
  let amountearned = soldbags * amountsold;
  let amountbought = 110;
  let profit = amountsold - amountbought;
  let dada = profit * soldbags;
  
  if (loadedBags == "" || remainder == "") {
    alert("please enter a value");
  }
if (dada == 1000) {
 alert("you did great today") 
}else if(dada >= 2000){
  alert("thats my mom😊")
}else if(dada >= 3000){
  alert("you're on fire today 🔥")
}
  profitDisplay.innerHTML = "your profit is " + dada;
  display.innerHTML = "your total money ought to be " + amountearned;
}