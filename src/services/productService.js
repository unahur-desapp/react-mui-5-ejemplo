import axios from "axios";
import { config } from "../config/config";

export async function getProduct(id) {
    const apiResponse = await axios.get(`${config.apiUrl}/productos/${id}`);
    return apiResponse.data;
}


