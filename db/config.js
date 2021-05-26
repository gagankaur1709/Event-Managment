const  Sequelize = require('sequelize');
const AdminModel  = require('../models/admin')
const BookingModel  = require('../models/booking')
const Event1Model  = require('../models/event1')
// const ManagesModel  = require('../models/manages')
const OrganizingTeamModel  = require('../models/organizingTeam')
const Participant1Model  = require('../models/participant1')
// const ParticipatedByModel  = require('../models/participatedBy')



const  db = new Sequelize({
  dialect: 'mysql',
    database: 'eventManagementdb',
    username: 'eventuser',
    password: 'Eventp@ss17',
    pool: {
      max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
    }
});

const Admin = AdminModel(db,Sequelize);
const Booking = BookingModel(db, Sequelize);
const Event1 = Event1Model(db, Sequelize);
// const Manages = ManagesModel(db, Sequelize);
const OrganizingTeam= OrganizingTeamModel(db, Sequelize);
const Participant1 = Participant1Model(db, Sequelize);
// const ParticipatedBy= ParticipatedByModel(db, Sequelize);


OrganizingTeam.hasOne(Admin,{
  foreignKey: 'teamID'
});
OrganizingTeam.belongsToMany(Event1, { through: 'Manages' });
Participant1.belongsToMany(Event1,{through : 'ParticipatedBy'})
Participant1.hasMany(Booking);

module.exports= {
  db,
  Admin,
  Booking,
  Event1,
  OrganizingTeam,
  Participant1,
};
