// Update with your config settings.

module.exports = {
  production: {
    client: 'pg',
    connection: {
      database: 'knowledge_init',
      user:     'postgres',
      password: 'senha'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
}}
