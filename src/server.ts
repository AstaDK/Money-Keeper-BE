import { CONFIGS } from "./app-config";
import app from "./app";
require("dotenv").config();
const PORT = CONFIGS.PORT;
app.listen(PORT, () => console.log("Server running on port:", PORT));
