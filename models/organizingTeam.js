module.exports =(db, DataTypes) => {
  return db.define('OrganizingTeam', {
    // Model attributes are defined here
    teamID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    // teamPassword: {
    //   type: DataTypes.STRING,
    //   unique: true,
    //   allowNull: false
    //  },
    teamName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    teamEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    teamPhone: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
  },
  {
    // Other model options go here
     tableName: 'organizingTeam'
  });
}
