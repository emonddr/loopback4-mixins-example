import {NoteApplication} from './application';
import {ApplicationConfig, Context} from '@loopback/core';

export {NoteApplication};



export async function main(options: ApplicationConfig = {}) {
  const app = new NoteApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
