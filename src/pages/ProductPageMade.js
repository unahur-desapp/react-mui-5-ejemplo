import { useEffect, useState } from "react";
import { ShowProduct } from "../components/products/ShowProduct";
import { getProduct } from "../services/productService-made";

export function ProductPageMade(props) {
    const { productId } = props;
    const [productData, setProductData] = useState();
    const [backendError, setBackendError] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProductData = await getProduct(productId);
                // setTimeout(() => {
                setProductData(fetchedProductData);
            // }, 500);
            } catch (err) {
                setBackendError(err)
            }
        }
        fetchProduct();
    }, [productId]);

    // atenti acá, el productData puede estar o no
    return productData 
        ? <ShowProduct productData={productData} />
        : backendError 
            ? <div>...error trayendo info...</div>
            : <div>...loading...</div>;
}