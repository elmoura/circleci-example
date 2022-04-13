import express from 'express';
import { getConfig } from './config/config';
import { routes } from './routes';

const { appPort } = getConfig();

const app = express();
app.use(routes);

app.listen(3030, () => console.log(`Server running at port http://localhost:${appPort}`));