import { Router } from "express";
import { 
    verifyAccessToken,
    refreshAccessToken,
    registerLoginUser,
    generateNewPassword,
    verifyOTP,
    resendOTP,
    logoutUser,
    updatePassword,
    deleteUserByEmail
 } from "../Controllers/user.controller.js";
import { verifyJWT } from "../Middlewares/auth.middleware.js";

const router = Router();

router.route("/refreshAccessToken").post(refreshAccessToken);
router.route("/login").post(registerLoginUser);
router.route("/verifyOTP").post(verifyOTP);
router.route("/resendOTP").post(resendOTP);
router.route("/generateNewPassword").post(generateNewPassword);
router.route("/deleteUserByEmail").post(deleteUserByEmail);

// secured routs
router.route("/verifyAccessToken").post(verifyJWT, verifyAccessToken);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/updatePassword").post(verifyJWT, updatePassword);

export default router;