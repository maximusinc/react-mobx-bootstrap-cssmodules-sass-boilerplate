import axios from "axios";
import { PredictService } from "./predict";


const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 3000,
});

export const predictService = new PredictService(instance);
