const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Ferramenta = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

Ferramenta.plugin(mongoosePaginate);

module.exports = mongoose.model("Ferramenta", Ferramenta);
