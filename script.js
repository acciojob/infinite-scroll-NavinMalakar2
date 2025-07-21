const list = document.getElementById("infi-list");
let count = 1;

// Add initial 10 items
addItems(10);

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Listen to scroll on the list, not window
list.addEventListener("scroll", () => {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;

  // When scrolled to the bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2);
  }
});
