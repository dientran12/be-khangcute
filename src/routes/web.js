import express from 'express';
import auth from './auth';
let router = express.Router();

let initWebRouter = (app) => {
    // API của User
    router.use('/api/user', auth);

    return app.use('/', router);
}

export default initWebRouter;
