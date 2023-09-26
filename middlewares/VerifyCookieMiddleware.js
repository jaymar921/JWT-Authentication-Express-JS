import jwt from "jsonwebtoken";

const VerifyCookieExists = (req, res, next) => {
  const { token } = req.cookies; // get the token in the request cookie

  // if token is null, there is the request might not been authorized
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  // lets verify the token
  const SECRET_KEY = "thisissecret";
  const decodedToken = jwt.verify(token, SECRET_KEY);

  // we should know the username and password is included in the token, lets deconstruct it
  const { username, password } = decodedToken;
  if (username !== "jaymar" && password !== "pas$word")
    return res.status(403).json({ message: "Token is forbidden!" });

  next();
};

export default VerifyCookieExists;
