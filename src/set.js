// src/set.js

const set = (obj, key, value) => {
  if (!(key in obj)) {
    obj[key] = value;
  }
}

export default set;
