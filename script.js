// Написать функцию assignObjects(obj1, obj2), которая принимает 
// аргументами 2 объекта и возвращает новый, который состоит из 
// свойств обоих объектов (склеить). Если свойство повторяется, 
// то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

// let firstObject = { 
//     x: 10, 
//     y: 20, 
// };
// let secondObject = { 
//     z: 30, 
// };

let firstObject = { 
    x: 10, 
};
let secondObject = { 
    x: 20, 
    y: 30,  
};

function assignObjects(obj1, obj2) {
    let newObj = Object.assign(obj1, obj2);
    return newObj;
}

console.log(assignObjects(firstObject, secondObject));