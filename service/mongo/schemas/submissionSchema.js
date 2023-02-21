const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  contact: String,
  pen_name: String,
  identifiers: String,
  headline: String,
  byline: String,
  trigger_warnings: String,
  content_src: String,
});

module.exports = SubmissionSchema;
