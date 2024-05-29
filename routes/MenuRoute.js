import express from 'express';
import { deleteMenu, getAllMenu, getMenuById, getSatuanMenu, saveMenu, updateMenu } from '../controllers/MenuController.js';

const router = express.Router();

router.get('/menu',getAllMenu)
router.get('/menu/satuan',getSatuanMenu)
router.post('/menu', saveMenu)
router.get('/menu/:id',getMenuById)
router.patch('/menu/:id',updateMenu)
router.delete('/menu/:id',deleteMenu)

export default router;
