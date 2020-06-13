const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const moongoose = require("mongoose");
const CategoriesRoutes = require("./Routes/Categories");
const JobsRoutes = require("./Routes/jobs");
const PostulationRoutes = require("./Routes/postulation");

//middleware
dotenv.config();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((res, req, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-with, Content-Type, Accept, Authorization",
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
		return res.status(200).json({});
	}
	next();
});
moongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("connected to db"),
);
app.use("/categories", CategoriesRoutes);
app.use("/jobs", JobsRoutes);
app.use("/postulations", PostulationRoutes);
// app.use((req, res, next) => {
// 	const error = new Error("Not Found");
// 	error.status = 404;
// 	next(error);
// });
// app.use((error, res, req, next) => {
// 	res.status(error.status || 500).json({
// 		error: {
// 			message: error.message,
// 		},
// 	});
// });
module.exports = app;
