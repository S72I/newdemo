import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        emailVerify: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

export default User;
