module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'newApp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
