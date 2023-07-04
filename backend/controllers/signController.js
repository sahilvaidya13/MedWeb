const Joi = require("joi");
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");
const JWT_SECRET = process.env.JWT_SECRET;

// Schema for login
// const Loginschema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });
// exports.Login = async (req, res) => {
//   try {
//     const inputData = req.body;
//     const { error, value } = Loginschema.validate(inputData);

//     if (error) {
//       return res.status(422).send({ error: error.details[0].message });
//     }

//     await User.findOne({ email: value.email })
//       .then(async (user) => {
//         await bcrypt
//           .compare(value.password, user.password)
//           .then((bc) => {
//             if (bc) {
//               const payload = {
//                 user: {
//                   id: user.id,
//                 },
//               };
//               const authToken = jwt.sign(payload, JWT_SECRET);
//               res.status(200).send({
//                 success: "true",
//                 userauthToken: authToken,
//                 userId: user.id,
//               });
//             } else {
//               res
//                 .status(401)
//                 .send({ success: "false", msg: "Authentification failed" });
//             }
//           })
//           .catch((err) => {
//             res.status(401).send({ error: err });
//           });
//       })
//       .catch((err) => {
//         res.status(401).send({ error: err });
//       });
//   } catch (error) {
//     return res.status(500).send({
//       err: err,
//     });
//   }
// };

// // Schema for Signin
// const SignInschema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });

// exports.SignIn = async (req, res) => {
//   try {
//     console.log("HEllo");
//     const inputData = req.body;
//     const { error, value } = SignInschema.validate(inputData);

//     if (error) {
//       return res.status(422).send({ error: error.details[0].message });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const secured_password = await bcrypt.hash(value.password, salt);
//     await User.create({
//       email: value.email,
//       password: secured_password,
//     })
//       .then(async (user) => {
//         res.status(200).send({ success: true });
//       })
//       .catch((err) => {
//         return res.status(402).send({
//           err: "Something went wrong",
//         });
//       });
//   } catch (err) {
//     return res.status(500).send({
//       err: err,
//     });
//   }
// };
// const data = localStorage.getItem("currentuser");
exports.register = async (req, res) => {
  try {
    const { name, email, pass, age, sex, phone } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(401).send("User already exists.");
    }

    const encPass = await bcrypt.hash(pass, 10);

    const user = await User.create({
      email,
      pass: encPass,
      name,
      age,
      sex,
      phone,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, pass } = req.body;
    console.log(req.body);
    if (!(email && pass)) {
      res.status(400).send("Field is missing");
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(pass, user.pass))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      const userid = user._id;
      const name = user.name;
      const age = user.age;

      res.status(200).json({ success: true, email, userid, name, age });
    } else {
      res.status(400).json({ resp: "Incorrect Email or Password" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getqr = async (req, res) => {
  try {
    const id = req.params.id;

    await User.findById(id, function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(doc);
      }
    });

    // const QR = await QRCode.toDataURL(data);
  } catch (error) {
    console.log(error);
  }
};
exports.hospfetch = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    const { mail } = req.query;

    const user = await User.find({ email: mail });
    res.status(200).json(user);

    console.log(mail);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

exports.healthsetter = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    const { doctor, symp, pres, visit, hosp, email } = req.body;

    const newHist = {
      doctor,
      symp,
      pres,
      visit,
      hosp,
    };
    await User.findOneAndUpdate(
      { email },
      { $push: { health_cred: newHist } },
      { new: true }
    );

    res.send({ ok: true });
  } catch (error) {
    console.log(error);
  }
};
