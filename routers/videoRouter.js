import express from "express";
import routes from "../routes";
import { getUpload, videoDetail, deleteVideo, postUpload, postEditVideo, getEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.editVideo(), getEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;