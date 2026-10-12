const btn = document.getElementById("buttons");
const display = document.getElementById("display");
const operators = ["+", "-", "*", "/", "%"];

btn.addEventListener("click", (event) => {
  const lastChar = display.value.slice(-1);
  const currentButton = event.target.innerText;

  if (operators.includes(lastChar) && operators.includes(currentButton)) {
    console.log("");
  } else if (event.target.innerText === "=") {
    if (display.value === "") {
      console.log("");
    } else if (event.target.innerText === "=") {
      let ans = eval(display.value);
      display.value = ans;
    }
  } else if (event.target.innerText === "C") {
    display.value = "";
  } else if (event.target.innerText === "Del") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = display.value + event.target.innerText;
  }
});

const validKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "%",
  "/",
];
document.addEventListener("keydown", (event) => {
  const keys = event.key;
  const lastChar = display.value.slice(-1);
  const currentButton = event.key;

  if (operators.includes(lastChar) && operators.includes(currentButton)) {
    console.log("");
  } else if (keys === "Enter") {
    console.log("");
    if (display.value === "") {
      console.log("");
    } else if (keys === "Enter") {
      let ans = eval(display.value);
      display.value = ans;
    }
  } else if (keys === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (keys === "Escape") {
    display.value = "";
  } else if (validKeys.includes(keys)) {
    display.value = display.value + keys;
  }
});
