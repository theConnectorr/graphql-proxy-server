const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 9090;

const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const globalRouter = require("./routes/global");
app.use("/", globalRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.use(express.static("./public"));

app.listen(PORT, () => console.log("I'm running at", PORT));
