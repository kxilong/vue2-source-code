let oldArrayPrototype = Array.prototype;

export const arratMethods = Object.create(oldArrayPrototype);

// 重写能够导致原数组变化的七种方法
let methods = ["push", "pop", "shift", "unshift", "reverse", "sort", "splice"];

methods.forEach((item) => {
  arratMethods[item] = function () {
    console.log("数组的方法进行重写操作 method = " + item);
  };
});
