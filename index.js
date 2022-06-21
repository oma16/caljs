 const firstnumber = parseInt(prompt("enter your first number:"));
 const operator = prompt("enter + or - or * or / for your operation:");
 const secondnumber =parseInt(prompt("enter your second number:"));

 let result;
 
 if (operator === "+"){
     result = firstnumber + secondnumber;

 }else if(operator === "-"){
     result = firstnumber - secondnumber;
 
 }else if(operator === "*"){
     result = firstnumber * secondnumber;
 
 }else if(operator === "/"){
     result = firstnumber / secondnumber;
 }else{
    result ="The operator is not among the operands";
 }
 alert(`${firstnumber} ${operator} ${secondnumber} = ${result}`)