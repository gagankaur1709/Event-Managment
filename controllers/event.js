// const Event1 = require(../config/Event1);
//
// exports.getAddEvent = (req, res, next) =>{
//
// }
//
//
// exports.postAddEvent=(req, res, next) => {
//   const eName = req.body.eName;
//   const eDescription = req.body.eDescription;
//   const eVenue = req.body.eVenue;
//   const eDate = req.body.eDate;
//   Event1.create({
//     eName: eName,
//     eVenue: eVenue,
//     eDate: eDate
//   })
//   .then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });
//
// };
