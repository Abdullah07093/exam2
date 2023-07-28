
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
function numbersSum(c){

    // return c.reduce( (sumSoFar, nextValue) => {

    //     if ( typeof nextValue === "number" && isFinite(nextValue) ) {
    //        return sumSoFar + nextValue;
    //     }
    //     //skip otherwise
    //     return sumSoFar;
    //  }, 0);    
       return c.reduce( (a, b) => (typeof b === "number" && isFinite(b) ? a + b : a),0);       
}
console.log(numbersSum([1, 2, 3, 4, 5, true]) );

console.log("Task5");
function capMe(a){
   // console.log(y.charAt(0).toUpperCase() + string.slice(1));
//return a.split(' ').charAt(0).toUpperCase() + string.slice(1);
 return   a.map(b => {
    const capletter = b.charAt(0).toUpperCase();
    const back = b.slice(1);

    return capletter + back;
  });
}


console.log(capMe(["mavis","senaida","letty"]));
console.log("Task6");
function getStudentTopNotes(b){
    let log=[]
for (const key in b) {
    log.push( Math.max(...b[key].notes));
    // if (b.hasOwnProperty.call(b, key)) {
    //     const element = b[key];  
    // }
}
return log
}
console.log(getStudentTopNotes([{id:5,name:"Jake",notes:[2,4,3,3,2,5]},
    {id:5,name:"Jake",notes:[5,4,3,1,2,5]},
    {id:5,name:"Jake",notes:[2,4,3,3,2,4]}]));





