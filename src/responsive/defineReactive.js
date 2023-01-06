import observe from "./observe.js";

export default function defineReactive(data, key, value = data[key]) {
  observe(value);
  Object.defineProperty(data, key, {
    get: function () {
      console.log(`试图访问${key}属性`);
      return value;
    },
    set: function (newValue) {
      if (newValue == value) {
        return;
      }
      value = newValue;
      console.log(`试图改变${key}属性`);
    },
  });
}
