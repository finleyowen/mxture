const mongoose = require("mongoose");
const SubmissionSchema = require("./schemas/submissionSchema");

mongoose.set('strictQuery', false);
const Submission = mongoose.model("submission", SubmissionSchema);

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to Mongo");
});

module.exports = {
  Submission,
};
