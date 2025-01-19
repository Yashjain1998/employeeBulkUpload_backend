const express = require("express");
const {
  getAllEmployees,
  addEmployee1,
  uploadCSV1,
  uploadXLSX,
  downloadCSV1,
} = require("../controllers/employeeController");
const multer = require("multer");

// Ensure the /tmp/uploads directory exists
const uploadPath = path.join("/tmp", "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer configuration
// const upload = multer({ dest: "uploads/" });
const upload = multer({ dest: uploadPath });
const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", addEmployee1);

// File upload routes
router.post("/upload-csv", upload.single("file"), uploadCSV1);
router.post("/upload-xlsx", upload.single("file"), uploadXLSX);

// Download CSV route
router.get("/download-csv", downloadCSV1);

module.exports = router;
