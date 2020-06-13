const express = require("express");
const router = express.Router();
const CategoriesModel = require("../Models/Categories");
router.get("/", async (req, res, next) => {
	const categories = await CategoriesModel.find({});

	try {
		res.send(categories);
	} catch (err) {
		res.status(500).send(err);
	}
});
router.post("/", async (req, res, next) => {
	let Category = new CategoriesModel(req.body);

	try {
		Category = await Category.save();
		res.send(Category);
	} catch (err) {
		res.status(500).send(err);
	}
});
router.put("/:id", async (req, res) => {
	let Category = new CategoriesModel(req.body);
	try {
		await CategoriesModel.findByIdAndUpdate(req.params.id, req.body);
		res.send(Category);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const Category = await CategoriesModel.findByIdAndDelete(req.params.id);

		if (!Category) res.status(404).send("No item found");
		res.status(200).send();
	} catch (err) {
		res.status(500).send(err);
	}
});
module.exports = router;
