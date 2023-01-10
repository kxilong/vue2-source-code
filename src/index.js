import defineReactive from "./responsive/defineReactive.js";
import observe from "./responsive/observe.js";

const obj = {
  a: {
    m: {
      n: 2,
    },
  },
  b: 2,
  c: [1, 2, 3],
};

observe(obj);
// obj.a.m.n += 1;
// console.log(obj);

obj.c.push(11);
console.log(obj.c);
