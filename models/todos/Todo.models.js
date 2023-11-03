import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, //special type to create reference
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId, //special type to create reference
        ref : "SubTodo"
      }
    ] // Array of SubTodo
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
