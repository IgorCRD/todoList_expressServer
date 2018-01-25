const port = process.env.PORT || 3001;
const config = {
    port,
    origin: process.env.ORIGIN || `http://localhost:${port}`,
    db: {
        port: 6379,
        hostIp: '127.0.0.1',
    },
};

export default config;
