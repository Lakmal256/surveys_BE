const dbConn = require("./dbconnect");

const addSurvey = (survey, cb) => {
  dbConn.getConnection((conn) => {
    conn.query(
      "INSERT INTO survey(survey) values(?)",
      [survey],
      function (err, result) {
        if (err) {
          console.log(err);
        }
        cb(result);
      }
    );

    conn.release();
  });
};

const getSurveyById = (id, cb) => {
  dbConn.getConnection((conn) => {
    conn.query(
      "SELECT* from survey where survey_id=? ",
      [id],
      function (err, result) {
        if (err) {
          console.log(err);
        }
        cb(result);
      }
    );

    conn.release();
  });
};
const addAnswer = (answer, cb) => {
  dbConn.getConnection((conn) => {
    conn.query(
      "INSERT INTO answer(answer) values(?)",
      [answer],
      function (err, result) {
        if (err) {
          console.log(err);
        }
        cb(result);
      }
    );

    conn.release();
  });
};

const getSurvey = (cb) => {
  dbConn.getConnection((conn) => {
    conn.query("SELECT* from survey", function (err, result) {
      if (err) {
        console.log(err);
      }
      cb(result);
    });

    conn.release();
  });
};

exports.addSurvey = addSurvey;
exports.getSurveyById = getSurveyById;
exports.addAnswer = addAnswer;
exports.getSurvey = getSurvey;
