import jwt from "jsonwebtoken";

const LoginRoute = (req, res) => {
  let { username, password } = req.body;

  /*
    For demo purpose, lets make everything simple
    assume that we can login using 
    username = "jaymar" and password = "pas$word"

    otherwise we return a status 403 (Unauthorized) and return a message
  */
  if (username !== "jaymar" && password !== "pas$word")
    return res.status(403).json({ message: "Invalid login credentials" });

  /*
    If username and password meets the criteria, lets login the user
    and create the JSON web token
  */

  let token;
  try {
    // lets prepare the payload to be included in the token
    // we will include username and password in the token
    let payload = {
      username,
      password,
    };

    // assume that we have a token secret, this must be placed in an .env file or any secret files
    // and it's value should not be seen in the source code since it will cause security issues!
    const SECRET_KEY = "thisissecret";

    // create the token
    token = jwt.sign(
      payload,
      SECRET_KEY,
      { expiresIn: "1h" } // the token expires in 1hr
    );

    // lets include the token in the cookie response
    let oneHour = 1000 * 60 * 60;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneHour),
      sameSite: "none",
      secure: "true",
    });
    // return the success status
    res.status(200).json({ message: "User has logged in!" });
  } catch (e) {}
};

export default LoginRoute;
