const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then(() => {
    /* eslint-disable-next-line */
    console.log('DB conntected');
  })
  .catch((err) => {
    /* eslint-disable-next-line */
    console.error('DB connection error:', err);
  });

const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`App running on port ${PORT}`);
});
