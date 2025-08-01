// test/set.test.js
import set from '../src/set.js';

const obj = {};

// Тест 1: Установка значения, если свойства нет
set(obj, 'key1', 'value1');
if (obj.key1 !== 'value1') {
  throw new Error('Функция работает неверно! Тест 1');
}

// Тест 2: Попытка установить новое значение, если свойство уже занято
set(obj, 'key1', 'next value');
if (obj.key1 !== 'value1') {
  throw new Error('Функция работает неверно! Тест 2');
}

// Тест 3: Установка нескольких свойств
set(obj, 'key2', 'value2');
if (obj.key2 !== 'value2') {
  throw new Error('Функция работает неверно! Тест 3');
}

// Тест 4: Проверка работы с числами
set(obj, 'key3', 42);
if (obj.key3 !== 42) {
  throw new Error('Функция работает неверно! Тест 4');
}

// Тест 5: Проверка работы с массивами
set(obj, 'key4', [1, 2, 3]);
if (JSON.stringify(obj.key4) !== JSON.stringify([1, 2, 3])) {
  throw new Error('Функция работает неверно! Тест 5');
}

// Тест 6: Проверка работы с объектами
set(obj, 'key5', { a: 1 });
if (JSON.stringify(obj.key5) !== JSON.stringify({ a: 1 })) {
  throw new Error('Функция работает неверно! Тест 6');
}

// Тест 7: Проверка работы с undefined
set(obj, 'key1', undefined);
if (obj.key1 !== 'value1') {
  throw new Error('Функция работает неверно! Тест 7');
}

// Тест 8: Проверка работы с символами
const sym = Symbol('key6');
set(obj, sym, 'value6');
if (obj[sym] !== 'value6') {
  throw new Error('Функция работает неверно! Тест 8');
}

// Тест 9: Проверка работы с вложенными объектами
const nestedObj = { key7: { innerKey: 'innerValue' } };
set(nestedObj.key7, 'innerKey', 'newValue');
if (nestedObj.key7.innerKey !== 'innerValue') {
  throw new Error('Функция работает неверно! Тест 9');
}

// Тест 10: Проверка работы с null
set(obj, 'key8', null);
if (obj.key8 !== null) {
  throw new Error('Функция работает неверно! Тест 10');
}

console.log('Все тесты пройдены!');
console.log(obj)

