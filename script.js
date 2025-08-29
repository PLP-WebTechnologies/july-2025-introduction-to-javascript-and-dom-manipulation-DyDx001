
const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", () => {
  let name = document.getElementById("nameInput").value;
  
  if (name) {
    document.getElementById("userMessage").textContent = `Hello, ${name}! Welcome 🎉`;
  } else {
    document.getElementById("userMessage").textContent = "Please enter your name!";
  }
});

// ❤️ Part 2: Functions
// Custom reusable function
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatMessage(message) {
  return `*** ${message.toUpperCase()} ***`;
}

// Example usage with DOM
document.getElementById("calculateBtn").addEventListener("click", () => {
  let total = calculateTotal(50, 3); // 50 * 3 = 150
  document.getElementById("totalOutput").textContent = formatMessage(`Total is $${total}`);
});

// 🔁 Part 3: Loops
// Example: Countdown
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }

  // While loop example (just to demonstrate)
  let x = 0;
  while (x < 3) {
    console.log("While loop count:", x);
    x++;
  }
});

// 🌐 Part 4: DOM Manipulation
const toggleBtn = document.getElementById("toggleBtn");
const dynamicText = document.getElementById("dynamicText");

toggleBtn.addEventListener("click", () => {
  dynamicText.classList.toggle("highlight"); // toggles class for style change
  dynamicText.textContent = dynamicText.classList.contains("highlight")
    ? "✨ Highlighted Text!"
    : "Click the button to change my style!";
});
