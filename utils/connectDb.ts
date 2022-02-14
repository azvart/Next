import mongoose from 'mongoose';

const db = () => {
    const connect = () => {
        mongoose.connect(process.env.MONGO as string)
        .then(() => {
            return console.info(`Successfully connected to db`)
        })
        .catch(error => {
            console.error(`Error connectiong to database`, error)
            return process.exit(1);
        })
    };

    connect();
    mongoose.connection.on("disconnected", connect);
}
export default db;