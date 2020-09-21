const { writeFileSync } = require('fs');

const fileLocation = './src/environments/environment.prod.ts';

const { environment } = require(fileLocation);

const processEnvironments = {
  moviedb: process.env.MOVIEDB || null,
};

const merged = JSON.stringify({ ...environment, ...processEnvironments });
const environmentFile = `export const environment = ${merged};`;

writeFileSync(fileLocation, environmentFile);
