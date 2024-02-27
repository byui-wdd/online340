// Find form, get unit name
const form = document.querySelector("form")
const unit = form.dataset.unit

// Save unit data to localstorage as JSON
form.addEventListener("change", (e) => {
  e.preventDefault()
  const pd = new FormData(form)
  const obj = Object.fromEntries(pd)
  const json = JSON.stringify(obj)
  localStorage.setItem(unit, json)
})

// Rebuild form data on page load
window.addEventListener("load", (e) => {
  if (localStorage.key(unit)) {
    const storedValues = JSON.parse(localStorage.getItem(unit))
    const formInputs = form.elements
    for(const element of formInputs) {
      if(element.name in storedValues) {
        const type = element.getAttribute("type")
        if(type === "checkbox"){
          element.setAttribute("checked", "")
        }
        if(element.nodeName === 'TEXTAREA'){
          element.innerText = storedValues[element.name]
        }
      }
    }
  }
})


