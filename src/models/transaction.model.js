import mongoose, { Schema } from 'mongoose';

const transactionSchema = new Schema(
{
    type: {
        type: String,
        enum: ["living", "food", "entertainment", "income"],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps:true
}
)

export const Transaction = mongoose.model("Transaction", transactionSchema)