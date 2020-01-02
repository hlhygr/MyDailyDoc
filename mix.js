/**
 * 判断类型是否为数组
 * 原文从何处参考已不可考证，如有冒犯请联系本人删除
 * */
// var c = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// var a = [0, 1, 2];
// var isArray = Function.isArray || function (o) {
//   return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]";
// };
// console.log(isArray(a));

/**
 * 判定 JavaScript 中数据类型的终极解决方法
 * 原文从何处参考已不可考证，如有冒犯请联系本人删除
 * */
// Object.prototype.toString.call({});              // '[object Object]'
// Object.prototype.toString.call([]);              // '[object Array]'
// Object.prototype.toString.call(() => {});        // '[object Function]'
// Object.prototype.toString.call('seymoe');        // '[object String]'
// Object.prototype.toString.call(1);               // '[object Number]'
// Object.prototype.toString.call(true);            // '[object Boolean]'
// Object.prototype.toString.call(Symbol());        // '[object Symbol]'
// Object.prototype.toString.call(null);            // '[object Null]'
// Object.prototype.toString.call(undefined);       // '[object Undefined]'
//
// Object.prototype.toString.call(new Date());      // '[object Date]'
// Object.prototype.toString.call(Math);            // '[object Math]'
// Object.prototype.toString.call(new Set());       // '[object Set]'
// Object.prototype.toString.call(new WeakSet());   // '[object WeakSet]'
// Object.prototype.toString.call(new Map());       // '[object Map]'
// Object.prototype.toString.call(new WeakMap());   // '[object WeakMap]'
