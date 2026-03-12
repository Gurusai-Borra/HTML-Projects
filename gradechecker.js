let marks = parseInt(prompt("Enter student marks:"));
let grade;

if (marks >= 80) {
    grade = "A";
} 
else if (marks >= 60) {
    grade = "B";
} 
else {
    grade = "C";
}

console.log("Grade:", grade);