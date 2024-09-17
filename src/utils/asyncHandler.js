// Promisses
const asyncHandler = (requestHandler) => {
  (req,res,next) => {
    Promise.resolve().catch((err) => next(err))
  }
}


//try catch:-

// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{ ()=>{} }

// const asyncHandler = (fn) => async (req, res, next) => {
//   try{
//     await fn(req,res,next)   //execute function
//   }
//   catch(error){
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message
//     })
//   }
// }
 