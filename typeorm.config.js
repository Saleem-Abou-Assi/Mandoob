const path = require('path');

module.exports = {
  type: 'sqlite',
  database: 'DataBase.sqlite',
  synchronize: false,
  logging: false,
  entities: [
    path.join(__dirname, 'src/entity/**/*.js')
  ],
  migrations: [
    path.join(__dirname, 'src/migration/**/*.js')
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
  }
};
