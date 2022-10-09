import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    
    router.get('/', homeController.getHomepage);
    
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create', homeController.getCreatePage);
    router.post('/delete', homeController.deleteUser);

    router.get('/edit/:id', homeController.getEditPage);
    router.post('/updateUser', homeController.postUpdate);
    
    router.get('/about', (req, res) => {
        res.send(`CodeGym`)
    })

    return app.use('/', router)
}
export default initWebRoute;