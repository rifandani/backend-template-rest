import express from 'express';
import cors from 'cors';
const morgan = require('morgan');
// files
import { getHome } from './controllers/HomeController';
import { getUsers } from './controllers/UserController';

// express router
const router = express.Router();

// middlewares
router.use(morgan('dev'));
router.use(cors());
router.use(express.json()); // request application/type === json
router.use(express.urlencoded({ extended: false })); // form data object, value objectnya berasal dari input attribute name
// router.use(compression()); // Gzip compressing can greatly decrease the size of the response body

// routes
router.get('/', getHome);
router.get('/users', getUsers);

export default router;
