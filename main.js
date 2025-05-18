const billAmount = document.getElementById("bill");
const peoples = document.getElementById("people");
const tipBtn = document.querySelectorAll(".tip_btn");
const customBtn = document.getElementById("custom_btn");
const custom_Input = document.getElementById("Custom_input");
const resetBtn = document.getElementById("reset_btn");


// testing part
billAmount.addEventListener("change", () => {
  console.log("bill Amount",billAmount.value);
});

console.log("queryselector all return an arrya hence direct addEventlisterner wont work use for each insted",tipBtn);

// tipBtn.addEventListener('click',()=>{
//   console.log("Tip percentage", tipBtn.value)
// })

tipBtn.forEach(button =>{
  button.addEventListener('click',()=>{
    console.log('Tip percentage ',button.value)
  })
});

customBtn.addEventListener('click',()=>{
  customBtn.style.display='none'
  custom_Input.style.display='';
});

custom_Input.addEventListener('change',()=>{
  const customValue = parseFloat(custom_Input.value);
  if(!isNaN(customValue)){
    console.log('Custom Tip: ',customValue/100);
  }
});

peoples.addEventListener("change", () => {
  console.log("People Number", peoples.value);
});

// === state variable
