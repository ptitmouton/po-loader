import messages from './messages.po'

function component() {
  const element = document.createElement('div')
  element.innerHTML = messages['%s took %d ms to complete.'](['TASK', 42])
  return element
}

console.log('messages', messages)
document.body.appendChild(component())
