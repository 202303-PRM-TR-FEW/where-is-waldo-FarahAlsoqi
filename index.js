const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

const whereIsWaldo = (matrix) => {
let different=null;
for (let i=0; i<matrix.length; i++){
for (let f=0; f<matrix.length; f++ ){
  if (i === 0 && f === 0) {
    different = matrix[i][f];}
 else if (matrix[i][f] !== matrix[0][0]) {
    different = matrix[i][f];}
}
}
return different;

}
const result = whereIsWaldo(example);
console.log(result);
