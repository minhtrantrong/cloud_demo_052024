const {Client} = require('pg');
const pg_config = require('./models/pg_config');

async function test() {
    const client = new Client(pg_config);
    await client.connect();
    const result = await client.query('SELECT * FROM users;');
    console.log(result);
    await client.end()
}

test();