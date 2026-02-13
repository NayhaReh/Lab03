// Exercise 3A
let classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];
stringArray = classRoster.toString;
console.log(stringArray);
console.log(classRoster);

classRoster.push("Fiona");
classRoster.push("Nancy");

let removedStudent = classRoster.shift();
console.log(removedStudent);

console.log(classRoster);
console.log(classRoster.length);

// Exercise 3B
let classInfo = {
    className: "ENSF381: Full-Stack Web Development",
    instructor: "Dr. Smith",
    students: classRoster,
    details: {
        semester: 'Winter', 
        year: 2025
    }
};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];
classInfo.instructor = 'Dr.Abdellatif';
console.log('ClassName: ', classInfo.className);
console.log('instructor: ', classInfo.instructor)
console.log('students: ', classInfo.students);
console.log('semester: ', classInfo.details.semester);

console.log(classInfo);

let { className, students } = classInfo;
console.log(className);
console.log(students);

let {semester, year} = classInfo.details;
console.log(semester);
console.log(year);

let [student1, student2, ...remainingStudents] = classRoster;
console.log(student1);
console.log(student2);
console.log(remainingStudents);