import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Post", postSchema);
// module.exports = mongoose.model('Post', postSchema);