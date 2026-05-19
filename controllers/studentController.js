let students = [
    {
        id: 1,
        name: "Pallavi",
        course: "B.Tech",
        marks: 90
    },
    {
        id: 2,
        name: "Riya",
        course: "MCA",
        marks: 85
    }
];

// HOME PAGE
export const homePage = (req, res) => {
    res.render("home");
};

// ABOUT PAGE
export const aboutPage = (req, res) => {
    res.render("about");
};

// CONTACT PAGE
export const contactPage = (req, res) => {
    res.render("contact");
};

// LIST STUDENTS
export const listStudents = (req, res) => {
    res.render("students", { students });
};

// ADD FORM
export const addForm = (req, res) => {
    res.render("addStudent");
};

// SAVE STUDENT
export const saveStudent = (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
        marks: req.body.marks
    };

    students.push(newStudent);

    res.redirect("/students");
};

// EDIT FORM
export const editForm = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    res.render("editStudent", { student });
};

// UPDATE STUDENT
export const updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    student.name = req.body.name;
    student.course = req.body.course;
    student.marks = req.body.marks;

    res.redirect("/students");
};

// DELETE STUDENT
export const deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.redirect("/students");
};