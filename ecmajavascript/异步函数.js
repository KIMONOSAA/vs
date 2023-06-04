// 假设有以下异步函数，使用了 setTimeout 在一秒钟之后执行某些操作：
// function double(value) { 
//     setTimeout(() => setTimeout(console.log, 0, value * 2), 100000); 
//    } 
//    double(3);

const { resolve } = require("core-js/fn/promise");
const { Promise } = require("core-js/shim");
const { reject } = require("lodash");

// function double(value,Callback){
//     setTimeout(() => Callback(value * 2),1000);
// }

// double(3,(x) => console.log(`I was given: ${x}`));


//2.失败处理
// function double(value,success,failure){
//     setTimeout(() =>{
//         try{
//             if(typeof value !== 'number'){
//                 throw 'Must provide number as first argument';
//             }
//             success(2 * value);
//         }catch(s){
//             failure(s);
//         }
//     },1000)
// }
// const successCallback = (x) => console.log(`success:${x}`);
// const failureCallback = (e) => console.log(`failure:${e}`);

// double(3,successCallback,failureCallback);
// double('b',successCallback,failureCallback);


//期约
// let p = new Promise(() => {});
// setTimeout(console.log,0,p);


// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000)); 
// // 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
// setTimeout(console.log, 0, p); // Promise <pending> 
// 无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默
// 失败，如下所示：
// let p = new Promise((resolve, reject) => { 
//  resolve();
//  reject(); // 没有效果
// }); 
// setTimeout(console.log, 0, p); // Promise <resolved> 
// // 为避免期约卡在待定状态，可以添加一个定时退出功能。比如，可以通过 setTimeout 设置一个
// // 10 秒钟后无论如何都会拒绝期约的回调：
// p = new Promise((resolve, reject) => { 
//  setTimeout(reject, 10000); // 10 秒后调用 reject() 
//  // 执行函数的逻辑
// }); 
// setTimeout(console.log, 0, p); // Promise <pending> 
// setTimeout(console.log, 11000, p);

// function onResolved(id){
//     setTimeout(console.log,0,id,'resolved');
// }
// function onRejected(id){
//     setTimeout(console.log,0,id,'rejected');
// }

// let p1 = new Promise((resolve,reject) => setTimeout(resolve,3000));
// let p2 = new Promise((resolve,reject) => setTimeout(reject,3000));

// p1.then('gobbeltygook');

// p2.then(null,() => onRejected('p2'));

// // Promise.prototype.then()方法返回一个新的期约实例：
// p1 = new Promise(() => {}); 
// p2 = p1.then(); 
// setTimeout(console.log, 0, p1); // Promise <pending> 
// setTimeout(console.log, 0, p2); // Promise <pending> 
// setTimeout(console.log, 0, p1 === p2); // false


// let p1 = Promise.resolve('foo');

// let p2 = p1.then();
// setTimeout(console.log,0,p2);

// //这些都一样
// let p3 = p1.then(() => undefined);
// let p4 = p1.then(() => {});
// let p5 = p1.then(() => Promise.resolve());

// setTimeout(console.log,0,p3);
// setTimeout(console.log,0,p4);
// setTimeout(console.log,0,p5);


// // 如果有显式的返回值，则 Promise.resolve()会包装这个值：
// let p6 = p1.then(() => 'bar');
// let p7 = p1.then(() => Promise.resolve('bar'));

// setTimeout(console.log,0,p6);
// setTimeout(console.log,0,p7);

//Promise.prototype.catch()

