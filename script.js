// Es1 Block Scope https://bigfrontend.dev/quiz/block-scope-1

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log("This is var", i), 0); // This log 5 times the value of 5
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log("This is let", i), 0); // Log form 0 to 4
// }

// Es2 Arrow Functions https://bigfrontend.dev/quiz/6-Arrow-Function

/*
const obj = {
  dev: "bfe",
  a: function () {
    return this.dev;
  },
  b() {
    return this.dev;
  },
  c: () => {
    return this.dev;
  },
  d: function () {
    return () => {
      return this.dev;
    };
  },
  e: function () {
    return this.b();
  },
  f: function () {
    return this.b;
  },
  g: function () {
    return this.c();
  },
  h: function () {
    return this.c;
  },
  i: function () {
    return () => {
      return this.dev;
    };
  },
};

console.log("a=>", obj.a()); // "bfe"
console.log("b=>", obj.b()); // "bfe"
console.log("c=>", obj.c()); // undefined
console.log("d=>", obj.d()); // "bfe"
console.log("e=>", obj.e()); // "bfe"
console.log("f=>", obj.f()()); // undefined (but it's a function )
console.log("g=>", obj.g()); // undefined
console.log("h=>", obj.h()()); // undefined
console.log("i=>", obj.i()()); // "bfe"
*/

// Es3 Increment Operator https://bigfrontend.dev/quiz/Increment-Operator

let a = 1;
const b = ++a;
const c = a++;
console.log(a);
console.log(b);
console.log(c);
