let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let counter = 0;

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
  

});

function calculate(event) {
  let clickedButtonValue = event.target.value;
  counter= 0 + counter;

  if (clickedButtonValue === '=') {
    if (screen.textContent !== '') {
      screen.textContent = eval(screen.textContent);
      counter = 1;
    } else {
      screen.textContent = '';
    }
  } else if (clickedButtonValue === 'C') {
    screen.textContent = '';
  } else {

    if(counter==1){
      screen.textContent = clickedButtonValue;
      counter= 0;
    }
    else {
      screen.textContent += clickedButtonValue;
      counter=0;
    }
  }
}
