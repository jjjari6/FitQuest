const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'FitQuest API' });
});

app.listen(PORT, () => {
  console.log(`FitQuest API server running on port ${PORT}`);
});
