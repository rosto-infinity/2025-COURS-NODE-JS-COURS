import mongoose from "mongoose";

const connectDB = () => {
  // mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MongoDB_URI)
    .then(() => {
      console.log("Connexion à la base de données réussie");
    })
    // .catch((err) => {
    //   console.log("Connexion à la base de données échouée", err);
    // });
};
export default connectDB;