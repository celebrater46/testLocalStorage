"use strict";

//ストレージの定義
const storage = localStorage;

/**
 * 値のセット手段
 */
storage.setItem('test', 'shirogane');
storage.test2 = 'hideru';
storage['test3'] = false; // string

/**
 * 値の取り出し方
 */
console.log(storage.getItem('test'));
console.log(storage.test2);
console.log(storage['test3']);
console.log(typeof storage.test3);
console.log(storage.none); // undefined

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

one.innerHTML = storage.getItem("test");
two.innerHTML = storage.getItem("test2");
three.innerHTML = storage.getItem("test3");