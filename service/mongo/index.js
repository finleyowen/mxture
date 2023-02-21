const mongoose = require("mongoose");
const SubmissionSchema = require("./schemas/submissionSchema");

mongoose.set('strictQuery', false);
const Submission = mongoose.model("submission", SubmissionSchema);

mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) console.log(err)
  else console.log("Connected to Mongo");
});

module.exports = {
  Submission,
};
