import { Router } from "express";
import usersService from "../services/users.service";

const userRoutes = Router();

userRoutes.get('/', async (req, res) => {

    const result = usersService.hola(req.body);
    res.send(result)
});


export default userRoutes;