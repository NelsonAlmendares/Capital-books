import app from "./app.js";
import { PORT } from "./config.js";

// starting the development server
app.listen((PORT), () => {
    console.log('\n --> Express node server started: ');
    console.log(`--> Server is running on port ${PORT}`);
})