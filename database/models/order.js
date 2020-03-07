'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {});
  Order.associate = function (models) {
<<<<<<< HEAD
    Order.belongsTo(models.User);
    Order.hasMany(models.Order_Product, { foreignKey: 'order_id' });
=======
    Order.belongsTo(User);
    Order.hasMany(Order_Product, { foreignKey: 'order_id' });
>>>>>>> 66eae77200e4959a5454eb228b098521f97995ab
  };
  return Order;
};