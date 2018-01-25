import express from 'express';
import bodyParser from 'body-parser';
import UsersDb from '../db/usersDb';
import User from '../models/user';
import Crypto from '../utils/crypto';

const usersRouter = express.Router();

usersRouter.post('/createUser', bodyParser.json(), (req, res) => {});

usersRouter.post('/login', bodyParser.json(), (req, res) => {});

usersRouter.get('/me/:userName', (req, res) => {
    const { params: { userName } } = req;

    const user = new User(null, userName, null);
    const usersDB = new UsersDb();

    usersDB.getMe(user).then((data) => {
        res.send(JSON.stringify({ data }));
    });
});

export default usersRouter;
