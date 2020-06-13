const express = require("express");
const router = express.Router();
const JobModel = require("../Models/jobs");
const { Router } = require("express");
router.get("/", async (req, res, next) => {
	const Jobs = await JobModel.find({});

	try {
		res.send(Jobs);
	} catch (err) {
		res.status(500).send(err);
	}
});
router.post("/", async (req, res, next) => {
	let Job = new JobModel(req.body);

	try {
		Job = await Job.save();
		debugger;
		res.send(Job);
	} catch (err) {
		debugger;
		console.log(err);
		res.status(500).send(err);
	}
});

router.put("/:id", async (req, res) => {
	let Job = new JobModel(req.body);
	try {
		await JobModel.findByIdAndUpdate(req.params.id, req.body);
		res.send(Job);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const Job = await JobModel.findByIdAndDelete(req.params.id);

		if (!Job) res.status(404).send("No item found");
		res.status(200).send();
	} catch (err) {
		res.status(500).send(err);
	}
});
module.exports = router;
