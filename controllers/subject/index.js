const Subject = require("../../models/subject");
const { TokenValidation } = require("../utils/tokenValidation");

const SubjectRouter = require("express").Router();

SubjectRouter.post("/", TokenValidation, async (req, res) => {
  try {
    const newSubject = new Subject(req.body.subject);
    await newSubject.save();
    res.status(201).json({ newSubject });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

SubjectRouter.get("/", async (req, res) => {
  const subjects = await Subject.find();
  res.status(200).json({ subjects });
});

module.exports = SubjectRouter;
