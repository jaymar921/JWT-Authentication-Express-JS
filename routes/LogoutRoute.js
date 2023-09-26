const LogoutRoute = (req, res) => {
  // we don't need to check if the cookie exists since the VerifyCookieMiddleware handles the job for us

  // lets logout the user
  res.clearCookie("token"); // clears the cookie token
  res.status(200).json({ message: "Logged out successfully" });
};

export default LogoutRoute;
