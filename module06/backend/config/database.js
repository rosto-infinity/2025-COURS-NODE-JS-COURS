import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.MongoDB_URI)
    .then(() => {
      console.log("Connexion à la base de données réussie");
    })
};
export default connectDB;