console.log("Exam2")
console.log("Task1")
function longestWord(a){
    let logest=0;
    for (let index = 0; index < a.split(' ').length; index++) {
if (a.split(' ')[index].length>logest) {
    logest=a.split(' ')[index].length;
       
    }
}
return a.split(' ')[1].length;
}
console.log(longestWord("Hello darkness my old friend"));
console.log("Task2")
function isSpecialArray(n){
   for (let index = 0; index < n.length; index++) {
     if ((n[index]%2===0&&index%2===0)&&(n[index]%2!==0&&index%2!==0)) {
return true;
     } else if (n[index]%2===0&&index%2!==0) {
          return" Index "+index+" has an even number " +n[index]+" .";
         ;
     }
     else if (n[index]%2!==0&&index%2===0) {
        return" Index "+index+" has an odd number " +n[index]+" .";
       ;
   }
   }
} 
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));
console.log("Task3")
function jazzify(a){
//     for (const key in a) {
//        if (a[key].indexOf(7)==true) {
// console.log(a[key]);
//        }else {
//         console.log(a[key]+7);
//     }
//     }

let log=[];

for (let index = 0; index < a.length; index++) {

    if (a[index].indexOf(7)!=1) {
        log.push(a[index]+7);

        }else{
           log.push(a[index]);
        }
   
    }
    return log;
}
console.log(jazzify(["Dm", "G7", "E", "A"]));
console.log("Task4")
let b=3;
let c=0;

function sumCubes(a){
   if (b==0) return ;
        c+=Math.pow(b, a);
        b--;

        sumCubes(a);
}
sumCubes(3)
console.log(c)
console.log("Task5")

function sumOfDigits(){
    const getSumOfDigits=sumOfDigits();

    console.log(getSumOfDigits);
    return 0;
}




