export function on(target: EventTarget, type: string, listener: EventListenerOrEventListenerObject) {
    target.addEventListener(type, listener, false);
    return function off() {
        target.removeEventListener(type, listener, false);
    };
}
