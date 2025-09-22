import express from "express";
import path from "path";
import cors from "cors";

const app = express();

// Disable X-Powered-By header to prevent framework information disclosure
app.disable('x-powered-by');

const mainPath = path.join(__dirname, "..", "..", "public");
const port = 7070;

console.log(`Main Path / = ${mainPath}`);
app.use(cors());
app.use(express.static(mainPath));
app.listen(port, () => {
	console.log("server is listening on port", port);
});
