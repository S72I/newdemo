import mongoose from "mongoose";

const DBConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongoURI as string);
        console.log("Database connected: ", connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default DBConnection;
