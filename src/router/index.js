import userRouter from "./user.router.js";

export default function initWebRoute(app) {
  app.use("/api/user/", userRouter);
}
