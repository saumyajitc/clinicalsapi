import mongoose from 'mongoose';
import dbURL from './properties.js';

const MONGODB = {
    connectToServer: async () => {
        await mongoose.connect(dbURL.DB);
    }
}

export default MONGODB