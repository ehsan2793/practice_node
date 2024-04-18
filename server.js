const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
