const UserModel = require("../Models/UserModel");

const express = require("express");

const UserRoute = express.Router();

UserRoute.post("/user", async (req, res) => {

  try {
    await new UserModel(req.body).save();

    res.status(200).send({
      message: `Thank you for your request. The serverApp received the following information and soon will be
    able to save this data into the database:`,
      info: {
        strName: req.body.strName,
        dtmDOB: req.body.dtmDOB,
        strEmail: req.body.strEmail,
        strPassword: req.body.strPassword,
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
});



UserRoute.get("/user/:strName", async (req, res) => {

  try {
     const UserData= await UserModel.findOne({ where: { strName: req.params.strName} })
    res.status(200).send({
      message: ``,
      info: {
        strName: UserData.dataValues.strName,
        dtmDOB: UserData.dataValues.dtmDOB,
        strEmail: UserData.dataValues.strEmail,
        strPassword: UserData.dataValues.strPassword,
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
});



module.exports = UserRoute;
