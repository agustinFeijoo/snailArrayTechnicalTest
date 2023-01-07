snail = function(n) {
  if( Number.isInteger(n)){
  let startPosition=0;
  var arr = new Array(n-1);
  for (var i = 0; i < n; i++) {
    arr[i] = new Array(n-1);
  }

  for(i=n;i>0;i=i-2){
    
    right(i,arr,startPosition);
    if(i>1){
      down(i-1,arr,startPosition);
      left(i-1,arr,startPosition);}
    if(i>2)
      up(i-2,arr,startPosition);
    startPosition++;
  }
  printOnDocument(arr);
   return(arr)
}
else{
  document.getElementById("returnedArray").innerHTML="error el numero ingresado debe ser entero";
  return "error el numero ingresado debe ser entero"
}
}
function right(steps,arr,startPosition){
  let summation=0;
  for(let i=1;i<=startPosition;i++){
    summation+=(arr.length-1*startPosition)*4
  }
  for(i=1;i<=steps;i++){
    arr[startPosition][i-1+startPosition]=summation+i;
  }
}
function down(steps,arr,startPosition){
  let summation=0;
  for(let i=0;i<=startPosition;i++){
    if(i===0)
      summation+=arr.length
    else if(i===1)
      summation+=(arr.length-1)*4-2
      else
      summation+=(arr.length-i*2)*4+2
  }
 
  for(i=1;i<=steps;i++){
    arr[i+startPosition][arr.length-1-startPosition]=summation+i;
  }
}
function left(steps,arr,startPosition){
  let summation=0;
  for(let i=1;i<=startPosition;i++){
    summation+=(arr.length-i*2)*4
  }
  for(i=1;i<=steps;i++){
    arr[arr.length-1-startPosition][arr.length-i-1-startPosition]=arr.length*2-1+summation+i
  }
}

function up(steps,arr,startPosition){
  let summation=0;
  for(let i=1;i<startPosition+1;i++){
    summation+=(arr.length-i*2)*4-2
  }
  for(i=1;i<=steps;i++){
    arr[arr.length-startPosition-i-1][startPosition]=summation+i+arr.length*3-2;
  }
}
function printOnDocument(arr){
let n=arr.length;
let returnedString="";
for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
    returnedString+=(arr[i][j]+"   ")
  }
  returnedString+="<br></br>"
}
document.getElementById("returnedArray").innerHTML=returnedString;
}