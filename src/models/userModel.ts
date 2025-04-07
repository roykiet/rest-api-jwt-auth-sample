import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public role!: string;
}

export const createUser = async (email: string, password: string) => {
  const user = await User.create({ email, password });
  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } });
  return user;
};


User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

export default User;