import { Box } from "@mui/system";
import { Route, Switch } from "react-router";
import { TableExample03 } from "./components/examples/TableExample";
import { AddProductPageMade } from "./pages/AddProductPageMade";
import { ProductPage } from "./pages/ProductPage";
import { ProductPageMade } from "./pages/ProductPageMade";

// function App1() {
//     return <TableExample03 />;
// }

function App2() {
    return <Box sx={{ marginTop: "1rem", marginLeft: "5%", marginRight: "5%", width: "90%" }}>
        <Switch>
            <Route path="/ejemplo"><TableExample03 /></Route>
            <Route path="/producto"><ProductPage /></Route>
            <Route path="/producto-hecho"><ProductPageMade productId={3} /></Route>
            <Route path="/agregar-producto-hecho"><AddProductPageMade /></Route>
            <Route path="">
                <div>... page not found ...</div>
            </Route>
        </Switch>
    </Box>
}

export default App2;
