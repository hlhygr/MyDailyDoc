/**
 * JS splice 添加或删除数组元素
 * 语法 array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * 第一个参数是要添加/删除元素的位置，第二个参数为删除元素的个数，如果为0则不删除
 * 第三个参数是要添加的元素
 * 该方法会改变原数组
 * arr.splice(1, 1) 表示删除arr[1]的元素
 * arr.splice(2, 0, 10) 表示不删除元素并在arr[1]的位置上增加一个值为2的元素
 * arr.splice(3, 1, 11) 表示删除arr[1]位置上的元素并在此位置上增加一个值为4的元素
 */
// let arr = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9];
// console.log('原数组：', arr);
// // arr.splice(1, 1);
// // arr.splice(2, 0, 10);
// arr.splice(3, 1, 11);
// console.log('现数组：', arr);


/**
 * JS filter 对数组进行过滤，使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组
 * 语法 Array.filter(function(currentValue, index, arr), thisValue)
 * 参数
 * 第一个参数为一个函数（必须），数组中的所有元素都会调用一次该函数，函数返回true或等价于true的结果时则被
 * 包含在新数组中，不为true的元素则跳过；
 * 该参数的第一个参数currentValue为必须参数
 * 该方法不会改变原数组
 */
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = nums.filter((num) => {
//     return num > 5;
// });
// console.log(res);  // 6 7 8 9 10