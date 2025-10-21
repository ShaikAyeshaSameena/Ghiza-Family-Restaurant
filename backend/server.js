const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const customerRoutes = require("./routes/customerRoutes");
const { isAuthenticated, isAdmin } = require("./middleware/authMiddleware");

// ✅ Import Menu model
const Menu = require("./models/Menu");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/customer", customerRoutes);

const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

// MongoDB Connection
mongoose.connect(
  'mongodb+srv://shaikayeshasameena:123abc456def789@ghizarestaurantdb.a6rz8nz.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Menu routes
app.get('/api/menu', async (req, res) => {
  const items = await Menu.find();
  res.json(items);
});

// ✅ Only admins can add menu
app.post('/api/menu', isAuthenticated, isAdmin, async (req, res) => {
  const newItem = new Menu(req.body);
  await newItem.save();
  res.json(newItem);
});

// Real-Time Booking
let availableTables = 10;
io.on('connection', (socket) => {
  socket.emit('tableCount', availableTables);

  socket.on('bookTable', () => {
    if (availableTables > 0) {
      availableTables--;
      io.emit('tableCount', availableTables);
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
