import app from './app';
import dotenv from 'dotenv';
import sequelize from './config/sequelize';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Sync database models
sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });