const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

router.get("/", userCtrl.userid);

router.get("/list", userCtrl.userList);


router.post("/edit", function (req, res, next) {
  //console.log(req.body.data);
  userCtrl.userInsert(req.body.data);
  
});
router.post("/bookmarkcombined", function (req, res, next) {
  console.log(req.body.data);
  userCtrl.userBookmarkcombined(req.body.data);
  //userCtrl.userBookmarkcombined(req.body.data);
  
});

router.post("/auth", function (req, res, next) {
 // console.log(req.body.data);
  //userCtrl.userid(req.body.data);
  userCtrl.userAuth(req.body.data);
 
  //console.log(req.body.data.userEmail);

//var {email}=req.body.data.userEmail;
//router.get("/", userCtrl.userid);
});
module.exports = router;
