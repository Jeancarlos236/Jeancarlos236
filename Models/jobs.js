const mongoose = require("mongoose");
const JobsSchema = new mongoose.Schema({
	Tittle: {
		type: String,
		required: [true, "Please add a Tittle"],
	},
	Company: {
		type: String,
		required: [true, "Please add a Company"],
	},
	Type: {
		type: String,
		required: [true, "Please add a  Valid Type"],
		Enum: ["Full-Time", "Part-Time", "Freelancer"],
	},
	Location: {
		type: String,
		required: [true, "Please add a Location"],
	},
	Logo: {
		type: String,
	},
	URL: {
		type: String,
	},
	Category: {
		type: mongoose.Schema.ObjectId,
		ref: "Categories",
		required: true,
	},
	Description: {
		type: String,
		required: [true, "Please add a description"],
	},
	HowToApply: {
		type: String,
		required: [true, "Please specify How to Apply"],
	},
	Email: {
		type: String,
		required: [true, "Please add an Email"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please add a valid email",
		],
	},
});
module.exports = mongoose.model("Jobs", JobsSchema);
