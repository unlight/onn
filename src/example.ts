const { on } = require('./index');

const off = on(document, 'login', (event) => {
    console.log(`Hello, ${event.detail.name}!`); // => Hello, Bob!
});
document.dispatchEvent(new CustomEvent('login', { detail: { name: 'Bob' } }));
off(); // Unsubscribe
