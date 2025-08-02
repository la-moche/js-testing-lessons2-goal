import { strict as assert } from 'node:assert';
import set from '../src/set.js';

const obj = {};

// Тест 1: Добавление нового ключа
set(obj, 'key1', 'value1');
assert.deepEqual(obj, { key1: 'value1' }, 'Функция работает неверно при добавлении первого ключа!');

// Тест 2: Попытка изменить существующий ключ
set(obj, 'key1', 'next value');
assert.deepEqual(obj, { key1: 'value1' }, 'Функция работает неверно при попытке изменить существующий ключ!');

// Тест 3: Добавление нового ключа
set(obj, 'key2', 'value2');
assert.deepEqual(obj, { key1: 'value1', key2: 'value2' }, 'Функция работает неверно при добавлении второго ключа!');

console.log('Все тесты пройдены!');
console.log(obj);
