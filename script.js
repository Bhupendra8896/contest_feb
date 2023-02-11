/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(printThroughMap); 
  function printThroughMap(arrItem) {
    if(arrItem.marks > 50){
    console.log(arrItem)
    }
  }
}

function PrintStudentsbyForEach() {  
  arr.forEach(printThroughforEach);
  function printThroughforEach(arrItem){
    if(arrItem.marks > 50){
      console.log(arrItem)
    }
  }
}
function addData() {
 let newObj = {id:4,name:"Gauri",age:"21",marks:45} 
  arr.push(newObj);
  console.log(arr);
}

function removeFailedStudent() {   
    let filteredFailedStudent = arr.filter(function (value) {    
      if (value.marks  > 50) {      
        return value;
      }      
    });
    console.log(filteredFailedStudent);    
  } 

function concatenateArray() { 
  let arr2 = [
    { id: 5, name: "Gautam", age: "24", marks: 75 },
    { id: 6, name: "Mahi", age: "22", marks: 79 },
    { id: 7, name: "Emraan", age: "21", marks: 38 },
  ]
  let resultArray = arr.concat(arr2);
  console.log(resultArray)
}
