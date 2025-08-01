// src/set.js
export default function set(obj, key, value) {
  if (!(key in obj)) {
    obj[key] = value;
  }
}
