import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,res) => {
  res.status(200).json({
    message: "hello my name is shivam sahu i am from amethi uttarpradesh bharat "
  })
})

export {
  registerUser,
}