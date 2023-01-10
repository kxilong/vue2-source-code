import defineReactive from "./defineReactive";
import def from "../utils/def.js";
import { arratMethods } from "./array.js";
import observe from "./observe.js";

export default class Observer {
  constructor(value) {
    def(value, "__ob__", this);
    if (Array.isArray(value)) {
      value.__proto__ = arratMethods;
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(value) {
    Object.keys(value).forEach((k) => defineReactive(value, k));
  }

  observeArray(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      observe(arr[i]);
    }
  }
}
