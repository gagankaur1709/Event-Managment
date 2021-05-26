module.exports = (db,DataTypes)=> {
  return  db.define('Booking', {
    // Model attributes are defined here
      bookingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    bookingStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,

    },

  },
  {
    // Other model options go here
     tableName: 'Booking'
  });
}
