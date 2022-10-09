import express from "express";
import APIController from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/user', APIController.getAllUser);
    router.post('/create', APIController.createUser);
    router.put('/update', APIController.updateUser);
    router.delete('/delete/:id', APIController.deleteUser);
    return app.use('/api/v1', router);
}
export default initAPIRoute;