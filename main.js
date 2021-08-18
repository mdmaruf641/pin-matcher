// pin generate and length check
function getPin(){
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + '';
  if(pinString.length == 4){
    return pin;
  }
  else{
    return getPin();
  }
}

// display pin
function generatePin(){
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
  const numbers = event.target.innerText;
  const typedInput = document.getElementById('clicked-numbers');
  if(isNaN(numbers)){
    if(numbers == 'C'){
      typedInput.value = '';
    }
  }
  else{
    const oldTyped = typedInput.value;
    const totalTyped = oldTyped + numbers;
    typedInput.value = totalTyped;
  }
 
});

// varify pin

function verify(){
  const pin = document.getElementById('display-pin').value;
  const typedNumbers = document.getElementById('clicked-numbers').value;
  const currectPin = document.getElementById('currect-pin');
  const wrongPin = document.getElementById('wrong-pin');
  if(pin == typedNumbers){
    wrongPin.style.display = 'none';
    currectPin.style.display = 'block';
  }
  else{
    currectPin.style.display = 'none';
    wrongPin.style.display = 'block';
  }
}
