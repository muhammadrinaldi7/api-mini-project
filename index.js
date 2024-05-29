import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import MenuRoute from "./routes/MenuRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use(MenuRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}..`);
  } catch (error) {
    console.log("Error Bagian Index:", error);
    
  }
});
