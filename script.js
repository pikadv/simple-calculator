const display = document.querySelector(".display")

function appendValue(value) {
  display.value += value
}

function clearDisplay() {
  display.value = ""
}

function calculate() {
  if (!display.value) return
  const result = eval(display.value)
  display.value = result
}

function goBack() {
  display.value = display.value.slice(0, -1)
}
