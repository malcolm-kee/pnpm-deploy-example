import * as express from 'express';
import { apiRouter } from './api';

const app = express();

app.use(express.static('dist'));

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
