# onn
Event emitter using DOM's addEventListener/dispatchEvent

## Usage
```js
const { on } = require('onn');

const off = on(document, 'login', (event) => {
    console.log(`Hello, ${event.detail.name}!`); // => Hello, Bob!
});
document.dispatchEvent(new CustomEvent('login', { detail: { name: 'Bob' } }));
off(); // Unsubscribe
```
