import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    history: [
      {
        role: {
          type: String,
          enum: ["user", "model"],
          required: true,
        },
        parts: [
          {
            text: {
                type: String,
                required: true,
            }
          },
        ],
        img: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.chats || mongoose.model("chats", chatSchema); //if no exist then create new one
