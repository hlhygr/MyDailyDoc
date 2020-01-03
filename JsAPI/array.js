/**
 * JS splice 添加或删除数组元素
 * 语法 array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * @param start 必须参数，是要添加/删除元素的位置，
 * @param deleteCount 可选参数，为删除元素的个数，如果为0则不删除
 * @param item 可选参数，是要添加的元素，如果不填该参数则不添加元素
 * @return 返回一个被删除元素组成的数组，如果没有删除元素则返回空数组
 *
 * 该方法会改变原数组
 * arr.splice(1, 1) 表示删除arr[1]的元素
 * arr.splice(2, 0, 10) 表示不删除元素并在arr[2]的位置上增加一个值为10的元素
 * arr.splice(3, 1, 11) 表示删除arr[3]位置上的元素并在此位置上增加一个值为11的元素
 * arr.splice(3, 2, 11) 表示删除arr[3]开始的2个元素，并在此位置上增加一个值为11的元素
 */
// let arr = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9];
// console.log('原数组：', arr);
// // arr.splice(1, 1);
// // arr.splice(2, 0, 10);
// var arr2 = arr.splice(3, 1, 11);
// arr.splice(3, 2, 11);
// console.log('现数组：', arr);


/**
 * JS filter 对数组进行过滤，使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组
 * 语法 Array.filter(callback(element[, index[, array]])[, thisArg])
 * @param callback 必须参数，数组中的所有元素都会调用一次该函数，函数返回true或等价于true的结果时则被
 * 包含在新数组中，不为true的元素则跳过；callback被调用时会传入3个参数element(元素的值),index(元素的索引),
 * array(数组本身)，其中element为必须参数
 * @param thisArg 可选参数，执行 callback 时的用于 this 的值，如果不传该参数则默认为全局对象（非严格模式下），
 * 严格模式下为undefined，在浏览器中则为window对象
 * @return 该方法返回一个包含所有通过函数测试的新数组
 *
 * 该方法不会改变原数组
 *
 * 该方法的理解借鉴了以下两位博主
 * https://www.jianshu.com/p/494226d9dd2c
 * https://www.cnblogs.com/guangyan/p/6684093.html
 */
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = nums.filter((num) => {
//     return num > 5;
// });
// console.log(res);  // 6 7 8 9 10


/**
 * JS indexOf 返回指定的字符在字符串中首次出现的位置
 * 语法 Array.indexOf(searchElement[, fromIndex])
 * @param searchElement 必须，规定需要查找的字符
 * @param fromIndex   可选，规定开始查找的位置，需为整数
 * 此处有个小坑，如果字符串中有2个相同字符时，规定fromIndex为第一个相同字符的位置时，
 * 查找时会忽略该字符而查找第二个相同字符的位置
 * @return 如果找到该字符则返回该字符所在的index，找不到则返回-1*/
let str = 'Hello World!';
console.log('length: ', str.length);
console.log(str.indexOf('o'));  // 不填fromIndex
// console.log(str.indexOf('l'));  // 有两个l，不填fromIndex时，返回第一个l所在的位置2
// console.log(str.indexOf('l', 2));  // 有两个l，填fromIndex时，返回第一个l所在的位置2
// console.log(str.indexOf('l', 3));  // 有两个l，填fromIndex为第一个l所在的位置时，返回第二个l所在的位置3
