export default function def(data, key, value, enumerable = false) {
  Object.defineProperty(data, key, {
    value,
    enumerable,
    configurable: true,
    writable: true,
  });
}
