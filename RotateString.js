const nums = [1,1,1,3,3,4,3,2,4,2];


let  val = nums.sort();
for(let i = 0; i < val.length; i++) {
  if(i > 0 && val[i] === val[i+1]) return true;
  
}
return false;