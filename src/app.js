import express  from "express";
import morgan from "morgan";
import cors from 'cors';
import requestRouter from "./routes/products.routes.js";

const app = express();

// Settings
app.set('port', process.env || 3005);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', requestRouter)

// Validate requests
app.use((req, res, next) => {
    res.status(404).json({
        title: "Page not found",
        error: "404",
        message:" The endpoint was not found"
    })
});

export default app;