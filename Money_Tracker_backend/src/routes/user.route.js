import { Router } from 'express';
import { registerUser, loginUser, jwtLogin } from '../controller/user.controller.js'
const router = Router();

//router.route('/register').post(registerUser)
//router.route('/login', authMiddleware).post(loginUser)

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/loginbyjwt', jwtLogin)

export default router