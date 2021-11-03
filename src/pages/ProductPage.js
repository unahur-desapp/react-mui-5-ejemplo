import { useEffect, useState } from "react";
import { ShowProduct } from "../components/products/ShowProduct";
import { getProduct } from "../services/productService";

export function ProductPage() {
    const [productData, setProductData] = useState();
    const [fetchError, setFetchError] = useState();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const obtainedProductData = await getProduct(5);
                setProductData(obtainedProductData);
            } catch (err) {
                console.log(err.response.data);
                setFetchError(err);
            }
        }
        setTimeout(() => {
            fetchProductData();
        }, 800);
    }, []);

    return productData 
        ? <ShowProduct productData={productData}/>
        : fetchError 
            ? <div>
                <p>¡¡Error al traer el producto!!</p>
                <p>El backend dice: status <b>{fetchError.response.status}</b>, mensaje <b>{fetchError.response.data.message}</b></p>
            </div>
            : <div>...loading...</div>;
}