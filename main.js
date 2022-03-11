"use strict";

//ストレージの定義
const storage = localStorage;

/**
 * 値のセット手段
 */
storage.setItem('test', 'shirogane');
storage.test2 = 'hideru';
storage['test3'] = false; // string
storage.test4 = ["hoge", "fuga"];
storage.test5 = { hoge: "fuga" };
storage.test6 =  JSON.stringify({ hoge: "fuga" });

/**
 * 値の取り出し方
 */
console.log(storage.getItem('test'));
console.log(storage.test2);
console.log(storage['test3']);
console.log(typeof storage.test3);
console.log(storage.none); // undefined
console.log(storage.test4); // 配列は文字列として保管される
console.log(storage.test5); // object は JSON 変換が必要
console.log(JSON.parse(storage.test6)); // オブジェクトはこう読み込む


const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

one.innerHTML = storage.getItem("test");
two.innerHTML = storage.getItem("test2");
three.innerHTML = storage.getItem("test3");