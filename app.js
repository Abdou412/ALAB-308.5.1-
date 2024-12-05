///  Take an array of numbers and return the sum.

const myarray = [3, 7, 9, 4, 2];
const stringarray = ["abdou", "sidi", "cocacola", "perscholas"];

function Sum_of_rray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
Sum_of_rray(myarray);
console.log(Sum_of_rray(myarray));

////   Take an array of numbers and return the average.

function averageArray(myarray) {
  let sum = 0;
  for (let i = 0; i < myarray.length; i++) {
    sum += myarray[i];
  }

  return sum / myarray.length;
}
averageArray(myarray);
console.log(averageArray(myarray));

//////   Take an array of strings and return the longest string.

function longestString(string1) {
  let longest_element = "";
  for (let i = 0; i < string1.length; i++) {
    if (string1[i].length > longest_element.length) {
      longest_element = string1[i];
    }
  }
  return longest_element;
}
longestString(stringarray);
console.log(longestString(stringarray));

/////////////////    Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function strings_compare(strings, number) {
  let var_container = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > number) {
      var_container.push(strings[i]);
    }
  }
  return var_container;
}
strings_compare(stringarray);
console.log(strings_compare(stringarray, 5));

/////

function printer(n, current = 1) {
  if (current > n) return;
  console.log(current);
  printer(n, current + 1);
}
printer(5);
