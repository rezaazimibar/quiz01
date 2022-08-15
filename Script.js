//file-name: is-balance.js
 export function  isBalance(input) {
  var myArray = [];
  var mySecArray = [];
  var arrayBracket = [];
  var secArrayBracket = [];
  var arrayParenthesis = [];
  var secArrayParenthesis = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "[") {
      myArray.push(i);
    } else if (input[i] === "]") {
      mySecArray.push(i);
    } else if (input[i] === "}") {
      arrayBracket.push(i);
    } else if (input[i] === "{") {
      secArrayBracket.push(i);
    } else if (input[i] === ")") {
      arrayParenthesis.push(i);
    } else if (input[i] === "(") {
      secArrayParenthesis.push(i);
    }
  }
  if (
    myArray.length == mySecArray.length &&
    arrayBracket.length == secArrayBracket.length &&
    arrayParenthesis.length == secArrayParenthesis.length
  ) {
    document.write("true");
  } else {
    document.write("not true");
  }
}
//file-name: get-repeated-info.js
export function  getRepeatedInfo(number) {
  let myObject = {};
  var myNumber = number.toString();
  for (var i = 0; i < myNumber.length; i++) {
    for (var n = 0; n < myNumber[i]; n++) {

    }
  }
  console.log(myObject);
}
//file-name: remove-repetitive.js
export function  removerRepetitive(string) {
    var result = "";
    var freq = {};
    for(i=0;i<string.length;i++){
       let char = string[i];
       if(freq[char]) {
        freq[char]++;
       } else {
        freq[char] =1
        result = result+char;
       }
    }
    return result;
  }
//file-name: operations.js
  export function operations(ops) {
  str = ops.replace(/ /g, "");

  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "D") {
      var last = Number(arr[arr.length - 1]);
      arr.push((last *= 2));
    } else if (str[i] == "R") {
      delete arr[arr.length - 1];
    } else if (str[i] == "+") {
      var result = Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]);
      arr.push(result);
    } else {
      arr.push(str[i]);
    }
  }

}

