let display = document.querySelector('.display');
let button = document.querySelectorAll('.button');
let clear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');
let sqrt = document.querySelector('.sqrt');
let plus = document.querySelector('.plus');
let sign = document.querySelectorAll('.sign');
let equals = document.querySelector('.equals');
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    display.value += button[i].textContent;
    // console.log(display.textContent.substring(0, display.textContent.length - plus));
  });
}

for (let i = 0; i < sign.length; i++) {
  sign[i].addEventListener('click', function () {
    display.value += sign[i].textContent;
  });
}
clear.addEventListener('click', function () {
  display.value = '';
});
backspace.addEventListener('click', function () {
  display.value = display.value.substring(0, display.value.length - 1);
});
sqrt.addEventListener('click', function () {
  display.value = Math.sqrt(display.value);
});
equals.addEventListener('click', function () {
  display.value = eval(display.value);
  if (undefined) {
    display.value = 0;
  }
});
