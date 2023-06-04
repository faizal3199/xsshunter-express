'use strict';

const get_app_server = require('./app.js');

const database = require('./database.js');
const database_init = database.database_init;

(async () => {
	// Ensure database is initialized.
	console.log("Connecting to database...");
	await database_init();
	console.log("Connected!!");

	const app = await get_app_server();

	console.log("Starting server...");
	app.listen(80, () => {
		console.log(`Server listening on port 80`);
	  });
})();
