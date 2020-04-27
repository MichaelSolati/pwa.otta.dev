import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const ssr = functions.https.onRequest((request, response) => {
  require(`${process.cwd()}/dist/pwa-otta-dev/server/main`).app()(request, response);
});
