import * as functions from 'firebase-functions';

export const universal = functions.https.onRequest((request, response) => {
  require(`${process.cwd()}/dist/server`).app(request, response);
});
