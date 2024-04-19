const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`App running on port ${PORT}`);
});
