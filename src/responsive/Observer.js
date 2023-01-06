import defineReactive from "./defineReactive";
import def from "../utils/def.js";
import { arratMethods } from "./array.js";

export default class Observer {
  constructor(value) {
    def(value, "__ob__", this);
    if (Array.isArray(value)) {
      value.__proto__ = arratMethods;
      console.log(value);
    } else {
      this.walk(value);
    }
  }

  walk(value) {
    Object.keys(value).forEach((k) => defineReactive(value, k));
  }
}
