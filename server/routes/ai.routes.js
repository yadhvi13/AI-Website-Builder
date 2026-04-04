import express from 'express';
import { generateWebsite } from '../controllers/ai.controllers.js';

const aiRouter = express.Router();

aiRouter.post("/generate", generateWebsite);

export default aiRouter;
