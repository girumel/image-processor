import express from 'express';

import resize from './api/resize';
import metadata from './api/metadata';

const routes = express.Router();

routes.use('/resize', resize);
routes.use('/metadata', metadata);

export default routes;
