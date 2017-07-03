var inputArray = [];

var numberButton = document.getElementsByClassName('number-button');
for(let i = 0; i < numberButton.length; ++i){
  numberButton[i].onclick = function(){
    var numArr = document.getElementsByClassName('number-content');
    for(var q = 0; q < numArr.length; ++q){
      var num = numArr[i].innerHTML;
      inputArray.push(num);
      break;
    }
    var outputNumbers = inputArray.join('');
    document.getElementById('display').innerHTML = outputNumbers;

  }
}

var clearButton = document.getElementById('clear');
clearButton.onclick = function(){
  inputArray = [];
  document.getElementById('display').innerHTML = inputArray;

}

var operationButton = document.getElementsByClassName('operation');
for(let p = 0; p < operationButton.length; ++p){
  operationButton[p].onclick = function(){
    var operationArr = document.getElementsByClassName('operation-content');
    for(var w = 0; w < operationArr.length; ++w){
      var operand = operationArr[p].innerHTML;
      inputArray.push(operand);

      var outputNumbers = inputArray.join('');
      document.getElementById('display').innerHTML = outputNumbers;

      break;
    }
  }
}

var equalsButton = document.getElementById('equals');
equalsButton.onclick = function(){
  var intermediateOutput = inputArray.join('');
  var finalOutput = eval(intermediateOutput);
  if(finalOutput === undefined){
    finalOutput = [];
  }
  document.getElementById('display').innerHTML = finalOutput;
  inputArray = finalOutput.toString().split('');

}

var decimalButton = document.getElementById('decimal-content');
decimalButton.onclick = function(){
  inputArray.push('.');
  var outputWithDecimals = inputArrayay.join('');
  document.getElementById('display').innerHTML = outputWithDecimals;

}

var sqrtButton = document.getElementById('sqrt-content');
sqrtButton.onclick = function(){
  if(typeof inputArray === NaN){
    document.getElementById('display').innerHTML = Math.sqrt(inputArray);

  } else {
    document.getElementById('display').innerHTML = Math.sqrt(eval(inputArray.join('')));

  }
  inputArray = [];
}

var moduloButton = document.getElementById('modulo-content')
moduloButton.onclick = function(){
  inputArray.push('%');
  var outputWithModulo = inputArray.join('');
  document.getElementById('display').innerHTML = outputWithModulo;

}
