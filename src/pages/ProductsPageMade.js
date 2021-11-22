import { useEffect, useState } from "react";
import { ShowProductList } from "../components/products/ShowProductList";
import { getAllProducts } from "../services/productService-made";

export function ProductsPageMade(props) {
    const [productsData, setProductsData] = useState();
    const [backendError, setBackendError] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProductsData = await getAllProducts();
                // setTimeout(() => {
                setProductsData(fetchedProductsData);
                // }, 500);
            } catch (err) {
                setBackendError(err)
            }
        }
        fetchProduct();
    }, []);

    // atenti acá, el productData puede estar o no
    return productsData
        ? <ShowProductList productData={productsData} />
        : backendError
            ? <div>...error trayendo info...</div>
            : <div>...loading...</div>;
}