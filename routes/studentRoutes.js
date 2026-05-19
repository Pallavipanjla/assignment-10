import express from "express";

import {
    homePage,
    aboutPage,
    contactPage,
    listStudents,
    addForm,
    saveStudent,
    editForm,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", homePage);

router.get("/about", aboutPage);

router.get("/contact", contactPage);

router.get("/students", listStudents);

router.get("/students/add", addForm);

router.post("/students/save", saveStudent);

router.get("/students/edit/:id", editForm);

router.post("/students/update/:id", updateStudent);

router.get("/students/delete/:id", deleteStudent);

export default router;