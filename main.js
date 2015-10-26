var a;
var b;
var answer;
var ops;
var display;
var value;
var nums;

// global variable declarations
var display = document.getElementById('display');
var a = parseInt(document.querySelectorAll('.nums')).value;
var b = parseInt(document.querySelectorAll('.nums')).value;
var nums = document.querySelectorAll('.nums');
var ops = document.querySelectorAll('.ops');

// for loops
for (i = 0; i < nums.length; ++i) {
  nums[i].addEventListener('click', numsClick);
}

for (i = 0; i < ops.length; ++i) {
  ops[i].addEventListener('click', opsClick);
}

// functions
function opsClick(event) {
  var value = event.target.value;

  if (['=', '/', '*', '-', '+'].indexOf(value) != -1) {
    if (value === '=') {
      answer = eval(a + ops + b);
      a = answer;
      b = undefined;
      ops = undefined;
      return;
      console.log(answer);
    }
  }
}

function numsClick(event) {
  var value = event.target.value;

  if (a === undefined) {
    a = value;
  } else if (a && !ops) {
    a = a + value;
  }

  if (b === undefined && ops) {
    b = value;
  } else if (b) {
    b = b + value;
  }

  if (!b && !ops) {
    display.innerText = a;
  } else if (ops && !b) {
    display.innerText = a + ops;
  } else if (a && ops && b) {
    display.innerText = a + ops + b;
  }
  console.log(display.innerText);
}

// clear button
document.getElementById("clear").addEventListener("click", function() {
  document.getElementById('display').innerHTML = "";
});
