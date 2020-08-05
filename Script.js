document.querySelector(`.addTask`).addEventListener(`submit`, (event) => {
  event.preventDefault()
  const elements = event.target.elements,
    container = document.querySelector(`.taskList`),
    task = document.createElement(`li`),
    closeButton = document.createElement(`button`)
  task.textContent = elements.task.value
  task.classList.add(`task`)
  closeButton.classList.add(`close`)
  if (elements.important.checked) {
    task.classList.add(`important`)
  }
  container.append(task)
  task.append(closeButton)
  closeButton.addEventListener(`click`, (event) => {
    event.preventDefault()
    event.target.closest(`.task`).remove()
  })
})
