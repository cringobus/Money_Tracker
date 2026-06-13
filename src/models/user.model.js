import mongoose, { Schema } from 'mongoose';
//import bcrypt from 'bcryptjs';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minLength: 3,
            maxLength: 30,
        },
        password: {
            type: String,
            trim: true,
            required: true,
            minLength: 3,
            maxLength: 60,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3,
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema);