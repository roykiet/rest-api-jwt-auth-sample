import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';
import { authorizeRole } from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route example for 'admin' role
router.get('/admin-dashboard', authenticate, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard!' });
});

// Protected route example for 'user' role
router.get('/user-profile', authenticate, authorizeRole('user'), (req, res) => {
  res.json({ message: `Hello user ${req.jwtPayload && (req.jwtPayload as any).id}` });
});

export default router;