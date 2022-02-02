const { collection, db } = require("../models/users");
const Users = require("../models/users");

const userList = async (req, resp) => {
  let data = await Users.find();
  console.log(data);
  resp.json(data);
};

const userid = async (req, resp) => {
  let data = await Users.find();
  console.log(data);
  resp.json(data);
};
// const userid = (req, resp) => {
//   var data = req.body;

//   console.log(data);
//   db.collection("users")
//     .find(data)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       if (result.length !== 0) {
//         console.log("redirecting to homepage");
//       }
//      // console.log(result);

//     });
// };
//  const userid =  (req, resp) => {
//    let email=req.userEmail;
//  // var email={req.userEmail}
//   var query = { userEmail:req.userEmail };
//   console.log(query);
//   let datas = Users.find(query);
//  console.log(datas)
//   resp.json(datas);

// };

const userBookmarkcombined = (req, resp) => {
  // let data = req;
  let email = { userEmail: req.userEmail };
  let bookmark = req.userBookmark[0];
  // console.log(email);
  // console.log(bookmark);
  db.collection("users")
    .find(email)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result[0]);
      // console.log(result.length);
      let a = result[0].userBookmark;
      a.push(bookmark);
      // console.log(a);
      let b = { $set: { userBookmark: a } };
      if (result.length != 0) {
        db.collection("users").updateOne(email, b, function (err, res) {
          if (err) throw err;
          console.log("1 document updated");
        });
      } else {
        let errors = "User with the same email address already exists!";
        console.log(errors);
        // resp.json(errors);
      }
    });
};
const userInsert = async (req, resp) => {
  let data = req;
  let email = { userEmail: req.userEmail };
  db.collection("users")
    .find(email)
    .toArray(function (err, result) {
      if (err) throw err;
      if (result.length == 0) {
        db.collection("users").insertOne(data, function (err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        });
      } else {
        let errors = "User with the same email address already exists!";
        console.log(errors);
        resp.json(errors);
      }
    });
};

const userAuth = (req, resp) => {
  let data = req;
  //console.log(data);
  db.collection("users")
    .find(data)
    .toArray(function (err, result) {
      if (err) throw err;
      if (result.length !== 0) {
        console.log("redirecting to homepage");
      }
      //console.log(result);
    });
};

module.exports = {
  userList,
  userInsert,
  userAuth,
  userid,
  userBookmarkcombined,
};

// const userList = async (req, resp) => {
//   let data = await Users.find();
//   console.log(data);
//   resp.json(data);
// };

// const userid = async (req, resp) => {
//   let data = await Users.find();
//   console.log(data);
//   resp.json(data);
// };
// // const userid = (req, resp) => {
// //   var data = req.body;

// //   console.log(data);
// //   db.collection("users")
// //     .find(data)
// //     .toArray(function (err, result) {
// //       if (err) throw err;
// //       if (result.length !== 0) {
// //         console.log("redirecting to homepage");
// //       }
// //      // console.log(result);

// //     });
// // };
// //  const userid =  (req, resp) => {
// //    let email=req.userEmail;
// //  // var email={req.userEmail}
// //   var query = { userEmail:req.userEmail };
// //   console.log(query);
// //   let datas = Users.find(query);
// //  console.log(datas)
// //   resp.json(datas);

// // };

// const userBookmarkcombined = (req, resp) => {
//   let data = req;
//   let email = { userEmail: req.userEmail };
//   let bookmark = { userBookmark: req.userBookmark };
//   console.log(email);
//   db.collection("users")
//     .find(email)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       console.log(result.length);
//       if (result.length != 0) {
//         db.collection("users").updateOne(email, bookmark, function (err, res) {
//           if (err) throw err;
//           console.log("1 document inserted");
//         });
//       } else {
//         let errors = "User with the same email address already exists!";
//         console.log(errors);
//         // resp.json(errors);
//       }
//     });
// };
// const userInsert = async (req, resp) => {
//   let data = req;
//   let email = { userEmail: req.userEmail };
//   db.collection("users")
//     .find(email)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       if (result.length == 0) {
//         db.collection("users").insertOne(data, function (err, res) {
//           if (err) throw err;
//           console.log("1 document inserted");
//         });
//       } else {
//         let errors = "User with the same email address already exists!";
//         console.log(errors);
//         resp.json(errors);
//       }
//     });
// };

// const userAuth = (req, resp) => {
//   let data = req;
//   //console.log(data);
//   db.collection("users")
//     .find(data)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       if (result.length !== 0) {
//         console.log("redirecting to homepage");
//       }
//       //console.log(result);
//     });
// };

// module.exports = {
//   userList,
//   userInsert,
//   userAuth,
//   userid,
//   userBookmarkcombined,
// };
