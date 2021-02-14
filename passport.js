import passport from "passport";
import GithubStrategy from "passport-github";
import NaverStrategy from "passport-naver";
import { githubLoginCallback, naverLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID:process.env.GH_ID,
    clientSecret:process.env.GH_SECRET,
    callbackURL:`http://localhost:4000${routes.githubCallback}`
},githubLoginCallback));

passport.use(new NaverStrategy({
    clientID:process.env.NA_ID,
    clientSecret:process.env.NA_SECRET,
    callbackURL:`http://localhost:4000/auth/naver/callback`
},naverLoginCallback))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

