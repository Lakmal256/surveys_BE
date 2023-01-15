const express = require("express");
const app = express();
const cors = require("cors");
const dbprocess = require("./dbprocess");
const { restart } = require("nodemon");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post("/addsurvey", (req, res) => {
  const survey = req.body.survey;

  if (survey) {
    dbprocess.addSurvey(survey, (callback) => {
      res.send({ status: 1, message: "survey successfully stored" });
    });
  } else {
    res.send({ status: 0, message: "survey error" });
  }
});

app.get("/getsurveybyid", (req, res) => {
  const id = req.query.id;

  if (id) {
    dbprocess.getSurveyById(id, (callback) => {
      console.log("callback", callback[0]);
      res.send({ status: 1, survey: callback[0] });
    });
  } else {
    res.send({ status: 0, message: "survey error" });
  }
});
app.post("/addanswer", (req, res) => {
  const answer = req.body.answer;

  if (answer) {
    dbprocess.addAnswer(answer, (callback) => {
      res.send({ status: 1, message: "answer successfully stored" });
    });
  } else {
    res.send({ status: 0, message: "survey answer error" });
  }
});
app.get("/getsurvey", (req, res) => {
  dbprocess.getSurvey((callback) => {
    res.send({ status: 1, survey: callback });
  });
});
module.exports = app;
