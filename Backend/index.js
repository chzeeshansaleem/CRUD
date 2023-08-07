const express = require("express");
const cors = require("cors");
const Auth = require("./model/AuthScheema");
const app = express();
const db = require("../Backend/db/Connection");
const port = 7000;
const router = require("./Routes/router");
app.use(cors());
app.use(router);
app.use(express.json());

app.use("/uploads", express.static("./uploads"));
app.post("/signuptest", async (req, res) => {
  const userExist = await Auth.findOne({ email: req.body.email });

  if (userExist) {
    res.json("Email already exists");
  } else {
    try {
      console.log(req.body);
      const userDetails = await Auth(req.body);
      await userDetails.save();
      res.send(userDetails);
      console.log(userDetails);
      // res.json(usersave);
    } catch (error) {
      console.log(error);
    }
  }
});

app.post("/login", async (req, res) => {
  const userExist = await Auth.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    if (userExist) {
      const name = await Auth.findOne(req.body.name);
      res.send(name.name);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
console.log(db);
