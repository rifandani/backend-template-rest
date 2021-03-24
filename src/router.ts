import express from 'express';
import cors from 'cors';
// import morgan from 'morgan';
import helmet from 'helmet';
// files
import httpLogger from './utils/morganLogger';
import { getHome } from './controllers/HomeController';
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} from './controllers/UserController';

// express router
const router = express.Router();

// middlewares
// router.use(morgan('dev')); // dev logging API
router.use(httpLogger);
router.use(helmet()); // security
router.use(cors());
router.use(express.json()); // request application/type === json
router.use(express.urlencoded({ extended: false })); // form data object, value objectnya berasal dari input attribute name
// router.use(compression()); // Gzip compressing can greatly decrease the size of the response body

// routes
router.get('/', getHome);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', postUser);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

export default router;
