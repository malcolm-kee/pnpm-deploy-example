import * as express from 'express';

export const apiRouter = express.Router();

apiRouter.get('/hello', (_, res) => res.json({ message: 'world' }));
