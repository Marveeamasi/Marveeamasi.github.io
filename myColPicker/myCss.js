var x = 1000;
var debit = document.getElementById('userinput')
var credit = document.getElementById('userloan')

 function withdraw(){
 var current= x - debit.value
  if( debit.value <= x ){
  alert('your current balance is : ' + current )
  }
  else{
   alert('insufficient fund');
  }
 }
 function loan(){
  x += credit.value;
 
 alert('your current balance is : ' + x);
 
 return x;
 }