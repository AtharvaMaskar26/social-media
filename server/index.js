const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
app.use(cors())

// Enable CORS for a specific route
app.get('/', (req, res) => {
  const data = { message: 'Hello from Express!' };
  res.json(data);
});

// Your other routes and configurations...
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
