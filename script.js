const input = document.getElementById('string')

function reversedString(str){
    return str.split("").reverse().join("")
}




function check(){
    //it will give us the value/string what user will type
   const value = input.value
   const reverse = reversedString(value)
  
   
   if(value === reverse){
    alert('P A L I N D R O M E!')
   }else{
    alert('Not a palindrome!')
   }

   input.value = ""
}
/*






*/