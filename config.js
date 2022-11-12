const dotenv = require('dotenv')
dotenv.config()

const parseArgs = require('minimist');

const options = {
	alias: {
		p: "PORT",
	}
}

const args = parseArgs(process.argv.slice(2), options);

console.log("Puerto recibido por CLI: ", args.PORT);

const modoCluster = process.argv[3] == "CLUSTER";

console.log("modoCluster?: ", modoCluster);

const TIEMPO_EXPIRACION = 100000;
const URL_BASE_DE_DATOS = process.env.URL_BASE_DE_DATOS;
const SESION_PASS = process.env.SESION_PASS;
const PORT = process.env.PORT  || 8000;
const URL_BASE_DE_DATOS_CONECTARDB = process.env.URL_BASE_DE_DATOS_CONECTARDB;
const MAIL_USUARIO = process.env.MAIL_USUARIO
const MAIL_PASS = process.env.MAIL_PASS
const TEL_ADMIN = process.env.TEL_ADMIN

module.exports = {
	modoCluster,
	TIEMPO_EXPIRACION,
	URL_BASE_DE_DATOS,
	SESION_PASS,
	PORT,
	URL_BASE_DE_DATOS_CONECTARDB,
	MAIL_USUARIO,
	MAIL_PASS,
	TEL_ADMIN
}

