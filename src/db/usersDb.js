import redis from 'redis';
import { promisify } from 'util';
import config from '../config';

class UsersDb {
    constructor(configuration = {}) {
        const { port = config.db.port, hostIp = config.db.hostIp } = configuration;
        this.client = redis.createClient(port, hostIp);

        this.client.on('error', (err) => {
            console.error(`Error: ${err}`);
        });

        this.client.getAsync = promisify(this.client.get).bind(this.client);
    }

    getMe(user) {
        const { userName } = user;
        return this.client.getAsync(`users:${userName}`);
    }
}

export default UsersDb;
