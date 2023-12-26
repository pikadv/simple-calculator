const display = document.querySelector(".display")

function appendValue(value) {
  display.textContent += value
}

function clearDisplay() {
  display.textContent = ""
}

function calculate() {
  if (!display.textContent) return
  const result = eval(display.textContent)
  display.textContent = result
}

function goBack() {
  display.textContent = display.textContent.slice(0, -1)
}
