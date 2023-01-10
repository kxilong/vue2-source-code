import def from "../utils/def.js";

let arrayProto = Array.prototype;

export const arratMethods = Object.create(arrayProto);

// 重写能够导致原数组变化的七种方法
let methods = ["push", "pop", "shift", "unshift", "reverse", "sort", "splice"];

methods.forEach((item) => {
  // 保证不丢失原有方法特性
  const original = arrayProto[item];
  def(arratMethods, item, function () {
    const result = original.apply(this, arguments);
    let ob = this.__ob__;
    let inserted;
    switch (item) {
      case "push":
      case "unshift":
        inserted = arguments;
        break;
      case "splice":
        inserted = arguments.slice(2);
      default:
        break;
    }
    // 对新增的数据也要进行响应式处理，加上__ob__标记
    if (inserted) {
      ob.observeArray(inserted);
    }
    console.log("啦啦啦");
    return result;
  });
});
