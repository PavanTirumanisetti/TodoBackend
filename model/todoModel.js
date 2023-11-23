const mongoose = require("mongoose");
const todo = require("../model/todoModel");

const todoSchema = new mongoose.Schema({
  TodoName: { type: String },
  Description: { type: String },
  CreatedAt: { type: Date, default: Date.now },
}, {
  collection: "todo"
});

module.exports = mongoose.model("todo", todoSchema);
