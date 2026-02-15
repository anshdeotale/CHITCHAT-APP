import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getAllContaacts,getMessageByUserId,sendMessage,getChatPartners } from "../controllers/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection,protectRoute)

router.get("/contacts", getAllContaacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessageByUserId);
router.post("/send/:id", sendMessage);



export default router;