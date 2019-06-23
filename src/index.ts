import { PlainObject } from 'simplytyped';

export function on(node: Element , type, fn) {
  el.addEventListener(type, fn, false)
  return function off() {
    el.removeEventListener(type, fn, false)
  }
}



// const dict: PlainObject = {};

// /**
//  * Hello function whithout parameter
//  * @returns result string
//  */
// export function hello(): string;

// *
//  * This is hello function
//  * @returns result string

// export function hello(greet: string = 'Hello') {
//     return `${greet} world`;
// }

// export class X {

//     constructor(
//         private readonly o: PlainObject,
//     ) { }
// }
