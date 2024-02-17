let arr = [1,2,3,4,5];

let start = 0;
let end = arr.length-1;

console.log("original Array" , arr)

while(start < end) {
  let temp;
  temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
start++;
end--;
}

console.log( "Reversed Array",arr);