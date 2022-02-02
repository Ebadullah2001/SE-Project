const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Initialize app

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

const userRoute = require("./routes/users");
app.use("/users", userRoute);

const blogRoute = require("./routes/blog");
app.use("/blog", blogRoute);

const bookmarkRoute = require("./routes/bookmark");
app.use("/bookmark", bookmarkRoute);

// Start server with port 3002
app.listen(3002, function () {
  console.log("Server started on localhost:3002");
});
module.exports = app;
