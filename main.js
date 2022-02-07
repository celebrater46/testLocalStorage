"use strict";

//ストレージの定義
const storage = localStorage;

/**
 * 値のセット手段
 */
storage.setItem('test', 'shirogane');
storage.test2 = 'hideru';
storage['test3'] = 'seiko-chan';

/**
 * 値の取り出し方
 */
// console.log(storage.getItem('test'));
// console.log(storage.test2);
// console.log(storage['test3']);