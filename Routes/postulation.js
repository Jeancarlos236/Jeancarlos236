const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "postulation Were Fetch",
	});
});

router.post("/", (req, res, next) => {
	const postulations = {
		postulationID: req.body.postulationId,
		Name: req.body.Name,
		Email: req.body.Email,
	};
	res.status(201).json({
		message: "postulation Were Created",
		postulation: postulations,
	});
});

router.get("/:postulationID", (req, res, next) => {
	res.status(200).json({
		message: "postulation details",
		postulationID: req.param.postulationID,
	});
});

router.delete("/:postulationID", (req, res, next) => {
	res.status(200).json({
		message: "postulation deleted",
		postulationID: req.param.postulationID,
	});
});

module.exports = router;
