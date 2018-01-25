import express from 'express';
import cors from 'cors';
import config from './config';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.static('public'));
app.use(cors());

// Routes
app.use('/users', usersRouter);

app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port);
});
