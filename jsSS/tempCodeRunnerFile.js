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

    // let obj1 = {
    //     name: 'qianguyihao',
    //     age: 28,
    //     info: {
    //         desc: 'hello',
    //     },
    //     color: ['red', 'blue', 'green'],
    // };
    // let obj2 = {};
    
    // deepCopy(obj2, obj1);
    // console.log(obj2);
    // obj1.info.desc = 'github';
    // console.log(obj2);
    
    // // 方法：深拷贝
    // function deepCopy(newObj, oldObj) {
    //     for (let key in oldObj) {
    //         // 获取属性值 oldObj[key]
    //         let item = oldObj[key];
    //         // 判断这个值是否是数组
    //         if (item instanceof Array) {
    //             newObj[key] = [];
    //             deepCopy(newObj[key], item);
    //         } else if (item instanceof Object) {
    //             // 判断这个值是否是对象
    //             newObj[key] = {};
    //             deepCopy(newObj[key], item);
    //         } else {
    //             // 简单数据类型，直接赋值
    //             newObj[key] = item;
    //         }
    //     }
    // }

    var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;

	var email = "abchello@163.com";

	console.log(emailReg.test(email));