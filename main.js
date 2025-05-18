const billInput = document.getElementById("bill");
const peoplesInput = document.getElementById("people");
const tipBtn = document.querySelectorAll(".tip_btn");
const customBtn = document.getElementById("custom_btn");
const custom_Input = document.getElementById("Custom_input");
const resetBtn = document.getElementById("reset_btn");

const tipAmountOutput = document.getElementById("tipAmount");
const totalPerPersonOutput = document.getElementById("total_Per_person");


// testing part
// billInput.addEventListener("change", () => {
//   console.log("bill Amount",billAmount.value);
// });

// console.log("queryselector all return an arrya hence direct addEventlisterner wont work use for each insted",tipBtn);

// tipBtn.addEventListener('click',()=>{
//   console.log("Tip percentage", tipBtn.value)
// })

// tipBtn.forEach(button =>{
//   button.addEventListener('click',()=>{
//     console.log('Tip percentage ',button.value)
//   })
// });

// customBtn.addEventListener('click',()=>{
//   customBtn.style.display='none'
//   custom_Input.style.display='';
// });

// custom_Input.addEventListener('change',()=>{
//   const customValue = parseFloat(custom_Input.value);
//   if(!isNaN(customValue)){
//     console.log('Custom Tip: ',customValue/100);
//   }
// });

// peoplesInput.addEventListener("change", () => {
//   console.log("People Number", peoplesInput.value);
// });

// === state variable
let bill = 0;
let people = 1;
let tipPercentage = 0;

// tip calculation function
function calculateTip(){
  
  if(people < 1) return;

  const tipAmount =(bill*tipPercentage) /people;
  const totalAmount = (bill* (1+tipPercentage))/people;

  tipAmountOutput.textContent = `$${tipAmount.toFixed(2)}`;
  totalPerPersonOutput.textContent = `$${totalAmount.toFixed(2)}`;

}


billInput.addEventListener('input',()=>{
  bill=parseFloat(billInput.value) || 0;
  calculateTip();
});

peoplesInput.addEventListener("input",()=>{
  people=parseInt(peoplesInput.value) || 1;
  calculateTip(); 
})

tipBtn.forEach(button =>{
  button.addEventListener("click",()=>{
    tipPercentage=parseFloat(button.value);
    calculateTip();
  })
})


customBtn.addEventListener('click',()=>{
  customBtn.style.display = "none";
  custom_Input.style.display = "";
  custom_Input.focus();
});
custom_Input.addEventListener('input',()=>{
  const customValue = parseFloat(custom_Input.value);
  if(!isNaN(customValue)){
    tipPercentage = customValue /100;
    calculateTip();
  }
});


resetBtn.addEventListener('click',()=>{
  billInput.value = '';
  peoplesInput.value = '';
  custom_Input.value = '';
  customBtn.style.display = "";
  custom_Input.style.display = "none";

  bill = 0;
  people = 1;
  tipPercentage = 0;

  tipAmountOutput.textContent = '$0.00';
  totalPerPersonOutput.textContent = '$0.00';

});
