require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');
const authRoutes = require('./routes/auth-routes');
const adminRoutes = require('./routes/admin-routes');
const homeRoutes = require('./routes/home-routes');
const imageRoutes = require('./routes/image-routes');

const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();


app.use(express.json());

// all routes
app.use('/api/books', bookRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});