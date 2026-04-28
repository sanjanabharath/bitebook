import express from "express";
import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp(serviceAccount);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
