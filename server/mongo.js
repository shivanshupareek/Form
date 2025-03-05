const { default: mongoose } = require("mongoose");

require("dotenv").config(); //load environment variables

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/form");
    console.log("connected to mongoDB");
  } catch (error) {
    console.error("error message is", error);
    process.exit(1);
  }
}

const formSchema = new mongoose.Schema({
  hello: String,
  new: String,
});

const formModel = mongoose.model("Form", formSchema);

async function form(request, response) {
  try {
    // const data = { hello: "world", new: "age" };
    const newForm = new formModel(request.body);
    await newForm.save();
    console.log("form filled");
    response.send("the form is now filled");
  } catch (error) {
    console.error("error message is", error);
    response.status(500).send("internal server error");
  }
}

module.exports = { connectDb, form };
