
    // var str2 = 'smyhvaevaesmyhvae';
    // var json = {};
    // for (var i = 0; i < str2.length; i++) {
    //     //判断：如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
    //     var key = str2.charAt(i);
    //     if (json[key] === undefined) {
    //         json[key] = 1;
    //     } else {
    //         json[key] += 1;
    //     }
    // }
    // console.log(json);

    // console.log('----------------');
    // //获取json中属性值最大的选项
    // var maxKey = '';
    // var maxValue = 0;
    // for (var k in json) {
    //     //        if(maxKey == ""){
    //     //            maxKey = k;
    //     //            maxValue = json[k];
    //     //        }else{
    //     if (json[k] > maxValue) {
    //         maxKey = k;
    //         maxValue = json[k];
    //     }
    //     //        }
    // }
    // console.log(maxKey);
    // console.log(maxValue);

        /*
    * 生成两个整数之间的随机整数，并且要包含这两个整数
    */
        // function getRandom(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
    
        // console.log(getRandom(1, 10));


// let dataList = [
//             {
//                 title:'品牌鞋子，高品质低价入手',
//                 publishTime:200,
//             },
//             {
//                 title:'不是很贵，但是很暖',
//                 publishTime:100,
//             },
//             {
//                 title:'无法拒绝的美食，跟我一起吃',
//                 publishTime:300,
//             },
//         ];

//         console.log('qianguyihao 排序前的数组: ' + JSON.stringify(dataList));

//         dataList.sort((a,b) => parseInt(a.publishTime) - parseInt(b.publishTime));

//         console.log('qianguyihao 排序后的数组:'+JSON.stringify(dataList))

// let arr = [2,3,2,5,7,6];

// let result = arr.find((item,index) =>{
//     return item > 4;
// });

// console.log(result);

// let arr = [2, 3, 2, 5, 7, 6];

// let result = arr.findIndex((item, index) => {
//     return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素的index返回
// });//他这里应该说的是下标

// console.log(result); //打印

// var arr1 = ['语文','宿敌','南山忆','素颜'];
// var bool1 = arr1.every(function(item,index,array){
//     if(item.length>2)
//         return false;
    
//     return true;
// });
// console.log(bool1);

// const arr1 = [1,3,6,2,5,6];
// const arr2 = arr1.map(item =>{
//     return item + 10;
// });
// console.log(arr2);

// const arr1 = [
//     {name:'千古一号',age:'28'},
//     {name:'许嵩',age:'32'},
// ];

// const arr2 = arr1.map(item => item.name);

// const arr3 = arr1.map(item =>({
//     myName:item.name,
//     myAge:item.age,
// }));

// console.log('arr1:'+JSON.stringify(arr1));
// console.log('arr2:'+JSON.stringify(arr2));
// console.log('arr3:'+JSON.stringify(arr3));

// const arr = [2,0,1,9,6];

// const total = arr.reduce((prev,item)=>{
//     return prev + item;
// })

// console.log('total:'+total);


// function repeatCount(arr,value)
// {
//     if(!arr || arr.lengh == 0)return 0;

//     return arr.reduce((totalCount,item)=>{
//         totalCount += item == value ? 1 : 0;
//         return totalCount;
//     },0);
// }

// let arr1 = [1,2,6,5,6,1,6];
// console.log(repeatCount(arr1,6));


// const arr = [1,2,3,2,2,1,3,4,2,5]

// for(let i = 0;i<arr.length;i++)
// {
//     for(let j = i+1;j<arr.length;j++)
//     {
//         if(arr[i] == arr[j])
//         {
//             arr.splice(j,1);

//             j--;
//         }
//     }
// }

// console.log(arr);

// function reverse(array){
//     var newArr = [];
//     for(var i = array.length - 1;i>=0;i--)
//     {
//         newArr[newArr.length] = array[i];
//     }
//     return newArr;
// }

// 方式二：

// function reverse(array){
//     for(var i = 0;i<array.length / 2;i++)
//     {
//         var temp = array[i];
//         array[i] = array[array.length-1-i];
//         array[array.length-1-i] = temp;
//     }
//     return array;
// }


//    编写一个方法 去掉一个数组的重复元素
// var arr = [1, 2, 3, 4, 5, 2, 3, 4];
// console.log(arr);
// var aaa = fn(arr);
// console.log(aaa);
// //思路：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。
// function fn(array) {
//     var newArr = [];
//     for (var i = 0; i < array.length; i++) {
//         //开闭原则
//         var bool = true;
//         //每次都要判断新数组中是否有旧数组中的值。
//         for (var j = 0; j < newArr.length; j++) {
//             if (array[i] === newArr[j]) {
//                 bool = false;
//             }
//         }
//         if (bool) {
//             newArr[newArr.length] = array[i];
//         }
//     }
//     return newArr;
// }
// let num = 1;
// setInterval(function () {
//     num ++;
//     console.log(num);
// }, 1000);


// function factorial(n){
//     if(n == 1)return 1;

//     return n * factorial(n-1);
// }

// console.log(factorial(110));

// function factorial(n){
    
//     if(n <= 1)return 1;

//     return n * factorial(n-1);
// }

// for(let i = 100;i<=999;i++)
// {
//     const i_str = i.toString();
    
//     const a = Number(i_str[0]);
//     const b = Number(i_str[1]);
//     const c = Number(i_str[2]);


//     if(factorial(a) + factorial(b) + factorial(c) == i){
//         console.log(i);
//         console.log(a,b,c);
//     }
// }

// function fib(n){
//     if(n==0 || n==1)return 1;

//     return fib(n-1)+fib(n-2);
// }

// for(let i = 0;i<15;i++)
// {
//     console.log(fib(i));
// }

// const arr1 = [3, 7, 10, 8];

// // 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
// const maxValue = Math.max.apply(Math, arr1); // 求数组 arr1 中元素的最大值
// console.log(maxValue);

// const minValue = Math.min.apply(Math, arr1); // 求数组 arr1 中元素的最小值
// console.log(minValue);

// function foo() {
//     let a = 1;
// }

// foo();
// console.log(a); 
// //闭包（牛逼）
// function createCheckTemp(standardTemp){
//     function checkTemp(n){
//         if(n > standardTemp){
//             alert('成绩合格');
//         }
//         else{
//             alert('成绩不合格');
//         }
//     }
//     return checkTemp;
// }

// var checkStandard_A = createCheckTemp(99);
// var checkStandard_B = createCheckTemp(20);

// checkStandard_A(98);
// checkStandard_B(99);

    // var myJson = {
    //     "name": "qianguyihao",
    //     "aaa": 111,
    //     "bbb": 222,
    // };
    // for (var key in myJson) {
    //     console.log(key); //获取 键
    //     console.log(myJson[key]); //获取 值（第二种属性绑定和获取值的方法）
    //     console.log('------');
    // }


    