const students = [
    {
        id: 1,
        name: "Rishil",
        marks: 94,
        department: "CSIT",
        attendance: 95
    },
    {
        id: 2,
        name: "Ram",
        marks: 96,
        department: "CSE",
        attendance: 90
    },
    {
        id: 3,
        name: "Ganesh",
        marks: 85,
        department: "ECE",
        attendance: 85
    },
    {
        id: 4,
        name: "Rohan",
        marks: 82,
        department: "EEE",
        attendance: 80
    }
];

function displayStudents() {
    let output = "";

    students.forEach(student => {
        output += `
        <p>
        id: ${student.id}<br>
        name: ${student.name}<br>
        marks: ${student.marks}<br>
        department: ${student.department}<br>
        attendance: ${student.attendance}
        </p>
        <hr>`;
    });

    document.getElementById("output").innerHTML = output;
}

function averageMarks() {
    const avg =
        students.reduce((sum, student) => sum + student.marks, 0) /
        students.length;

    document.getElementById("output").innerHTML =
        `<p>Average Marks: ${avg}</p>`;
}

function topStudents() {
    const top = students.filter(student => student.marks > 75);

    let output = "<p>Students with marks > 75:</p>";

    top.forEach(student => {
        output += `${student.name}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function departmentCount() {
    const count = students.reduce((acc, student) => {
        acc[student.department] =
            (acc[student.department] || 0) + 1;
        return acc;
    }, {});

    let output = "<p>Department Count:</p>";

    for (let dept in count) {
        output += `${dept}: ${count[dept]}<br>`;
    }

    document.getElementById("output").innerHTML = output;
}

function countVowels() {
    const vowels = "aeiouAEIOU";

    let total = students.reduce((count, student) => {
        return count + [...student.name]
            .filter(ch => vowels.includes(ch)).length;
    }, 0);

    document.getElementById("output").innerHTML =
        `<p>Total Vowels in Names: ${total}</p>`;
}