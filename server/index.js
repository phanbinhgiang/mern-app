import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import posts from './routers/post.js';
import connectDB from './db/connect.js';

const app = express();
const PORT = process.env.port || 5000;
const URI =
  'mongodb+srv://giangphan:0379579687@nodejs.izpzkyo.mongodb.net/MERN-APP?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts);

const start = async () => {
  try {
    await connectDB(URI);
    console.log('Connection to DB successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}...`);
    });
  } catch (error) {
    console.log('err:', error);
  }
};

start();
