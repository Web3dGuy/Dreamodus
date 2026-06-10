import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the landing page from /public, plus the brand logos at the project root.
app.use(express.static(path.join(__dirname, "public")));
app.use("/brand", express.static(__dirname));

app.listen(PORT, () => {
  console.log(`DreaModus landing site running at http://localhost:${PORT}`);
});
