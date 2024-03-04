module.exports = (sequelize, DataTypes) => {
    const POC_ORDER = sequelize.define('poc_order', {
      name: DataTypes.STRING,
      quantity: DataTypes.STRING,
      unit: DataTypes.STRING,
      user_id:DataTypes.BIGINT
    });
  
    return POC_ORDER;
  };
  