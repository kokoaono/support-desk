const asyncHandler = require("express-async-handler");

//register a new user
//route /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  res.send("Register Route");
});

//Login a new user
//route /api/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.send("Register Route");
});

module.exports = {
  registerUser,
  loginUser,
};
