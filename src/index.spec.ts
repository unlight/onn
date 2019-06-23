/* eslint-disable @typescript-eslint/tslint/config */
import { on } from '.';

it('smoke', () => {
    expect(on).toBeTruthy();
});

it('click', () => {
    let count = 0;
    on(document, 'click', () => ++count);
    expect(count).toBe(0);
    document.dispatchEvent(new Event('click'));
    expect(count).toBe(1);
});

it('unsubscribe', () => {
    const onclick = jest.fn();
    const off = on(document, 'click', onclick);
    expect(onclick).toHaveBeenCalledTimes(0);
    document.dispatchEvent(new Event('click'));
    off();
    document.dispatchEvent(new Event('click'));
    expect(onclick).toHaveBeenCalledTimes(1);
});

it('once', () => {
    const onclick = jest.fn();
    on(document, 'click', onclick, { once: true });
    document.dispatchEvent(new Event('click'));
    document.dispatchEvent(new Event('click'));
    expect(onclick).toHaveBeenCalledTimes(1);
});
