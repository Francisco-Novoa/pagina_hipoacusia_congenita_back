const Subject = require("../../models/subject");
const { TokenValidation } = require("../../utils/tokenValidation");

const SubjectRouter = require("express").Router();

SubjectRouter.post("/", TokenValidation, async (req, res) => {
  try {
    const subject = await Subject.updateOne(
      { subject: req.body.subject.subject },
      { $set: req.body.subject },
      { upsert: true }
    );
    res.status(201).json({ subject: subject });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

SubjectRouter.get("/", async (req, res) => {
  const subjects = await Subject.find().sort({ subject: "asc" });
  res.status(200).json({ subjects });
});

SubjectRouter.get("/:id", async (req, res) => {
  const subject = await Subject.findOne({ subject: req.params.id });
  res.status(200).json({ subject });
});

SubjectRouter.delete("/:id", TokenValidation, async (req, res) => {
  try {
    const subject = await Subject.deleteOne({
      subject: req.params.id,
    });
    res.status(200).json({ subject: subject });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = SubjectRouter;
