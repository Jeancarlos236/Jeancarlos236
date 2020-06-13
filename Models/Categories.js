const mongoose = require("mongoose");
const CategoriesSchema = mongoose.Schema({
	Category: {
		type: String,
		required: [true, "Please add a Category"],
	},
});
module.exports = mongoose.model("Categories", CategoriesSchema);
