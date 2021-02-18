import express from "express";
import { postRegisterView, registerView } from "../controllers/videoController";


import routes from"../routes";

const apiRouter = express.Router();


apiRouter.post(routes.registerView, postRegisterView);


export default apiRouter;