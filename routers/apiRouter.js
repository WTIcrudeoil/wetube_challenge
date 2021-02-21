import express from "express";
import { postAddComment, postDeleteComment, postRegisterView, registerView } from "../controllers/videoController";


import routes from"../routes";

const apiRouter = express.Router();


apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment,postAddComment);
apiRouter.post(routes.delComment,postDeleteComment);



export default apiRouter;