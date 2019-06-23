export function on(target: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions = false) {
    target.addEventListener(type, listener, options);
    return function off() {
        target.removeEventListener(type, listener, options);
    };
}
