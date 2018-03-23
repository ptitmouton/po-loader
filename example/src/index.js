import pl from './messages.po'
import MessageFormat from 'messageformat/lib/get'
const messages = new MessageFormat({ pl })

function component() {
  const element = document.createElement('div')
  element.innerHTML = messages.get('%s took %d ms to complete.', ['TASK', 42])
  return element
}

console.log('messages', messages.get([]))
document.body.appendChild(component())
