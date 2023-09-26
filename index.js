import express from "express";
import cookieParser from "cookie-parser";
import LoginRoute from "./routes/LoginRoute.js";
import LogoutRoute from "./routes/LogoutRoute.js";
import VerifyCookieExists from "./middlewares/VerifyCookieMiddleware.js";

const app = express();

app.use(express.json()); // allow JSON to be in requests
app.use(cookieParser()); // lets use cookie parser since we will include cookies in requests

const server = app.listen(3000, () => {
  console.log("API is running on port 3000");
});

// routes
app.post("/login", LoginRoute);
app.post("/logout", VerifyCookieExists, LogoutRoute);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// Export the server
export default server;
