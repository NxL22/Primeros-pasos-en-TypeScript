import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import userRoutes from '../routes/users.routes';

const app = express();

app.use(cors({
    origin: ['*'],
    allowedHeaders: ['Content-Type', 'Authorization', 'reset', 'pos'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
}));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(morgan("dev"));
app.use(morgan('dev'))

//RUTAS
app.use('/user', userRoutes)

export default app;