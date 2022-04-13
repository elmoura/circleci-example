import express from 'express';
import { getConfig } from './config/config';
import { routes } from './routes';

const { appPort } = getConfig();

const app = express();
app.use(routes);

app.listen(appPort, () => console.log(`Server running at http://localhost:${appPort}`));