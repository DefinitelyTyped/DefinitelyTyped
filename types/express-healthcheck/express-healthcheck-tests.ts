import { Router } from 'express';
import health from 'express-healthcheck';

const router = Router();

router.use('/health', health());
