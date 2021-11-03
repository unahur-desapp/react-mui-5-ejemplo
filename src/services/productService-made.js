import axios from "axios";
import { config } from "../config/config-template";

const FIXED_PRODUCT = {
    id: 1,
    codigo: 'AFX82',
    nombre: 'Agua oxigenada',
    precio: 325, 
    proveedor: 'Farmacia "La Primera de Tesei"',
}

export async function getProductFixed(id) {
    return Promise.resolve(FIXED_PRODUCT);
}

export async function getProduct(id) {
    const apiResponse = await axios.get(`${config.apiUrl}/productos-hecho/${id}`);
    return apiResponse.data;
}

export async function addProduct(productData) {
    const apiResponse = await axios.post(`${config.apiUrl}/productos-hecho/con-compra`, productData);
    return apiResponse.data;
}