import { Router } from "express";
import {
  userLoggedOut,
  userLogin,
  userRegister,
  refreshAccessToken,
} from "../controllers/user.controller.js";
const router = Router();
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  userRegister
);

router.route("/login").post(userLogin);

router.route("/logout").post(verifyJWT, userLoggedOut);
router.route("/refresh-token").post(refreshAccessToken);
export default router;
