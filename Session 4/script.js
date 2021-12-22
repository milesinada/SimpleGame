var userName="Miles";
let userAge=23;
const URL="http;//www.google.com";

for(let i=1;i<11;i++){
    console.log(i);
    if(i==5){
        console.log("Hey Listen");
    }else{
        console.log(i);
    }
}

function challenge(){
    //get two numbers from the propmt and display on the console the greatest one
    let num1 = prompt("Enter first number" );
    let num2 = prompt("Enter second number");
    if(num1>num2){
        console.log ("Number 1 is greater than Number 2");
    }else if(num2>num1){
        console.log("Number 2 is greater than Number 1");
    }else{
        console.log("Numbers are the same");
    }
}
//challenge();
let students = ["Brett","Miles","Kyle","Nick","Ray","Jasmine","Jazmin"];
let mixed =["Brett",99,34.56,true,null,"Jadro"];
let grades = ["A", "B", "A", "A-" , "B+" , "A" , "A"];
console.table(students)
console.log(students[3])

//travel arrays
for (let i=0;i<students.length;i++){
    document.write(`<p>Name: ${students[i]} <br> Grade: ${grades[i]}</p> `)
}