module.exports=(db, DataTypes)=>{
  return db.define('Event1', {
    // Model attributes are defined here
    eCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    eName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    eDescription: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    eVenue: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    eDate: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false
    },
  },
  {
  timestamps: false,

    // Other model options go here
     tableName: 'Event1'
  });
}
