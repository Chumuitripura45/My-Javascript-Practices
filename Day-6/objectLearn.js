objDetails = [
    {
        name : "chumui",
        id : 123,
        marks : [{
            math : 90,
            eng : 77,
            cs : 99
        }]
    },
    {
        name : "Sushrang",
        id : 124,
        marks : {
            math : 80,
            eng : 97,
            cs : 82
        }
    },
]

function calculateTotalMarks(studentName) {
    const student = objDetails.find((obj) => obj.name === studentName);

    if (student) {
        const marks = student.marks[0];
        const totalMarks = marks.math + marks.eng + marks.cs;
        return totalMarks;
    } else {
        return "Student not found";
    }
}
const chumuiTotalMarks = calculateTotalMarks("chumui");
console.log(`Total marks for chumui: ${chumuiTotalMarks}`);