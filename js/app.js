// Función forEach
function newForEach(array, callback) {
  //Recorriendo el arreglo
  for(var  i =0; i<= array.length - 1; i++){
    //Llamando a la función callback
    var x = callback(array, i);
    console.log(x);
  }
  return x;
};

//Variable que almacena la suma
var addResult = 0;

function add(array, i) {
  //Función de suma de elementos
  addResult += array[i];
  console.log(addResult);
  return addResult;
}

//Llamando a la función newForEach
var resultEach = newForEach([1, 2, 3], add);
console.log(resultEach);

// Imprimiendo el resultado en el html
var eachCont = document.getElementById("cont-Each");
var newP1 = document.createElement("p");
newP1.innerText = resultEach;
eachCont.appendChild(newP1);

// Función Map
var newArray1 = [];

function newMap(array, callback) {
  for (var j = 0; j <= array.length - 1; j++) {
    //Llamando a la función
    var x1 = multiply1(array, j);
  }
  return x1;
};

function multiply1(array, j) {
  //Enviando la información al nuevo arreglo
  console.log(newArray1.push(array[j] * j));
  return newArray1;
}

var resultMap = newMap([1, 2, 3], multiply1);
console.log(resultMap);

// Imprimiendo el resultado en el html
var mapCont = document.getElementById("cont-Map");
var newP2 = document.createElement("p");
newP2.innerText = resultMap;
mapCont.appendChild(newP2);

// Función Filter
var newArray2 = [];

function newFilter(array, callback) {
  for (var k = 0; k <= array.length - 1; k++) {
    //Condicional si el valor del arreglo es vacío no se hace la función
    if (array[k] !== undefined) {
      var y = appFilter(array, k);
      console.log(y);
    } else {
      console.log(k + "ahora");
      var pointer = k;
      k = k++;

    }

  }
  return y;
};

function appFilter(array, k) {
  //Condición de valores mayores a 1
  if (array[k] > 1) {
    console.log(newArray2.push(array[k]));
  } else {
    //Mandando arreglo vacío cuando no se cumple la función
    return newArray2 = [];
  }
  return newArray2;
}

var resultFilter = newFilter([1, 2, 3], appFilter);
console.log(resultFilter);

// Imprimiendo el resultado en el html
var filterCont = document.getElementById("cont-filter");
var newP3 = document.createElement("p");
//Imprime que el arreglo es vacío dado que no cumplen las condiciones
if (resultFilter.length === 0) {
  newP3.innerText = "Arreglo vacío, no cumple condiciones";
} else {
  newP3.innerText = resultFilter;
}
filterCont.appendChild(newP3);

// Función Reduce

function newReduce(array, callback) {
  for (var l = 0; l <= array.length - 1; l++) {
    var z = callback(array, l);
    console.log(z);
  }
  return z;
};

var multResult = 1;

function multiply(array, l) {
  multResult *= array[l];
  console.log(multResult);
  return multResult;
}

// Forma de hacer la Función Reduce usando el acumulador y el valor inicial

// function newReduce(array, callback, initialValue) {
//   var acumulator = initialValue;
//   for (var l = 0; l <= array.length - 1; l++) {
//     var acumulator = callback(array[i], acumulator);
//     console.log(acumulator);
//   }
//   return acumulator;
// };

// newReduce([1, 2, 3], function(item, acumulator){
// return acumulator * item;
// },1); //Donde 1 es el valor inicial

var resultReduce = newReduce([1, 2, 3], multiply);

// Imprimiendo el resultado en el html
var reduceCont = document.getElementById("cont-reduce");
var newP4 = document.createElement("p");
newP4.innerText = resultReduce;
reduceCont.appendChild(newP4);
