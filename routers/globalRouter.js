import express from "express";
import passport from "passport";
import { getJoin,  getLogin,  githubLogin,  logout, getMe, postGithubLogin, postJoin, postLogin, naverLogin, postNaverLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join,onlyPublic,getJoin);
globalRouter.post(routes.join,onlyPublic,postJoin,postLogin);

globalRouter.get(routes.login,onlyPublic,getLogin);
globalRouter.post(routes.login,onlyPublic,postLogin);

globalRouter.get(routes.home,home);
globalRouter.get(routes.search,search);
globalRouter.get(routes.logout,onlyPrivate,logout);

globalRouter.get(routes.gitHub,githubLogin);

globalRouter.get(routes.githubCallback,passport.authenticate("github",{failureRedirect:"/login"}),postGithubLogin);

globalRouter.get(routes.naver,naverLogin);

globalRouter.get(routes.naverCallback,passport.authenticate("naver",{failureRedirect:"/login"}),postNaverLogin);

globalRouter.get(routes.me,getMe);

export default globalRouter;