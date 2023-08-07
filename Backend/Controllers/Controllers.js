const User = require("../model/UserSchema");

const Auth = require("../model/AuthScheema");
//signup Function
exports.userSignUp = async (req, res) => {
  try {
    console.log(req.body);
    // const userExist = await Auth.findOne({ email: req.body.email });

    // if (userExist) {
    //   res.json("Email already exists");
    // } else {
    const userDetails = await Auth(req.body);
    await userDetails.save();
    res.send(userDetails);
    console.log(userDetails);
    // res.json(usersave);
  } catch (error) {
    console.log(error);
  }
};

// login
// exports.userlogin = async (req, res) => {
//   const userExist = await Auth.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   try {
//     if (userExist) {
//       res.send("login successful");
//     } else {
//       res.status(404).json({ message: "user not found" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
//**********Create data  */
exports.userRegister = async (req, res) => {
  const file = req.file.filename;
  const { name, email, city } = req.body;
  if (!name || !email || !city || !file) {
    res.status(400).send("plz enter all field");
  }
  try {
    const newuser = new User({ name, email, city, img: file });
    const usersave = await newuser.save();
    res.send(usersave);
  } catch (error) {
    console.log(error);
  }
};
// *************show all data ****/
exports.userget = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error in backend" });
  }
};
// *************show single data ****/
exports.singleget = async (req, res) => {
  const { id } = req.params;
  try {
    const singleuser = await User.findOne({ _id: id });
    res.status(200).send(singleuser);
  } catch (error) {
    console.log(error);
  }
};

//*****************Update */
exports.userUpdate = async (req, res) => {
  const { id } = req.params;

  const { name, email, city } = req.body;
  const file = req.file ? req.file.filename : img;
  try {
    const updateData = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, city, img: file },
      { new: true }
    );
    res.status(200).send(updateData);
  } catch (error) {
    res.status(400).send(error);
  }
};
//***************Delete */
exports.deleteuser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteData = await User.findByIdAndDelete({ _id: id });
    res.status(200).send(deleteData + "data gaya");
  } catch (error) {
    res.status(400).send(error);
  }
};
