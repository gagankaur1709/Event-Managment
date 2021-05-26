module.exports = (db, DataTypes) => {
  return  db.define('Admin', {
    // Model attributes are defined here
    adminID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    adminPassword: {
      type: DataTypes.STRING,
      allowNull: false
     },
      adminName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    adminEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    adminPhone: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    // teamID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   unique: true,
    // },
  },
  { timestamps:false,
    // Other model options go here
     tableName: 'Admin'
  });

}


// Admin.sync()
//   .then(() =>{
//     console.log("The table for the User model was just created!");
//   })
//   .catch((err) =>{
//     console.log(err);
//   })
