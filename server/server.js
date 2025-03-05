const express = require("express");
const cors = require("cors");
const { connectDb, form } = require("./mongo");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.send("server is running"));
app.post("/form", form);

async function database() {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log("server is running on port 4000", port);
    });
  } catch (error) {
    console.log("failed to connect to mongodb", error);
  }
}

database();
