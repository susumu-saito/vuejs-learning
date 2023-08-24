import { Client } from 'pg';

export function createClient() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'vuejs',
    password: 'postgres',
    port: 5432,
  });

  client.connect();

  return client;
}