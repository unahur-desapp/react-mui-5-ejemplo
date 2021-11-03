import { Grid } from "@mui/material";

// por qué no dos parámetros label, value
function ShowSingleDatum(props) {
    const { label, value } = props;

    return <Grid item container direction="row">
        <Grid item xs={6} md={2} sx={{ color: "red" }}>
            {label}
        </Grid>
        <Grid item xs={6} md={4} sx={{ color: "info.text", typography: "info" }}>
            {value}
        </Grid>
    </Grid>;
}

export function ShowProduct(props) {
    const { codigo, nombre, precio, proveedor} = props.productData;

    return (<Grid container direction="column" spacing={2}>
        <ShowSingleDatum label="Código" value={ codigo } />
        <ShowSingleDatum label="Nombre" value={ nombre } />
        <ShowSingleDatum label="Precio" value={ precio } />
        <ShowSingleDatum label="Proveedor" value={ proveedor } />
    </Grid>);
}
