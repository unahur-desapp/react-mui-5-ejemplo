import { Button, Grid, TextField } from "@mui/material";
import { omit } from "lodash";
import { useState } from "react";
import { addProduct } from "../services/productService-made";


function PreserveCaseButton(props) {
    const totalSx = {...(props.sx || {}), textTransform: "none"};
    const theVariant = props.variant || "contained";
    const otherProps = omit(props, ["sx", "children", "variant"]);
    return <Button sx={totalSx} variant={theVariant} {...otherProps}>{props.children}</Button>
}

//  codigo / nombre / proveedor / precio / fecha / cantidad
export function AddProductPageMade() {
    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [proveedor, setProveedor] = useState("");
    const [fecha, setFecha] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const errorCodigo = (codigo === "" || codigo == null) 
        ? "Hay que poner código" 
        : (codigo.length !== 5 && codigo.length !== 6) ? "El código debe ser de 5 ó 6 caracteres" : null;

    const errorNombre = (nombre === "" || nombre == null)
        ? "Hay que poner nombre"
        : null;

    const clearForm = () => {
        setCodigo(""); setNombre(""); setPrecio(""); setProveedor(""); setFecha(""); setCantidad("");
    };

    return isSaving ? <div>...saving...</div> : (<Grid container direction="column" spacing={3}>
        <Grid item container direction="row">
            <Grid item xs={12} sm={4}>
                Código
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    size="small"
                    fullWidth
                    error={!!errorCodigo}
                    helperText={errorCodigo}
                    id="codigo"
                    value={codigo}
                    onChange={event => setCodigo(event.target.value)}
                />
            </Grid >
        </Grid>
        <Grid item container direction="row">
            <Grid item xs={12} sm={4}>
                Nombre
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    size="small"
                    fullWidth
                    error={!!errorNombre}
                    helperText={errorNombre}
                    id="nombre"
                    value={nombre}
                    onChange={event => setNombre(event.target.value)}
                />
            </Grid >
        </Grid>
        <Grid item container direction="row">
            <Grid item xs={12} sm={4}>
                Precio
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    size="small"
                    fullWidth
                    id="precio"
                    value={precio}
                    onChange={event => setPrecio(event.target.value)}
                />
            </Grid >
        </Grid>
        <Grid item container direction="row">
            <Grid item xs={12} sm={4}>
                Proveedor
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    size="small"
                    fullWidth
                    id="proveedor"
                    value={proveedor}
                    onChange={event => setProveedor(event.target.value)}
                />
            </Grid >
        </Grid>
        <Grid item container direction="row">
            <Grid item xs={12} sm={4}>
                Fecha
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    size="small"
                    fullWidth
                    id="fecha"
                    value={fecha}
                    onChange={event => setFecha(event.target.value)}
                />
            </Grid >
        </Grid>
        <Grid item container direction="row">
            <Grid item xs={12} sm={4}>
                Cantidad
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    size="small"
                    fullWidth
                    id="fecha"
                    value={cantidad}
                    onChange={event => setCantidad(event.target.value)}
                />
            </Grid >
        </Grid>
        <Grid item container direction="row" justifyContent="space-around" sx={{marginTop: "4rem"}}>
            <PreserveCaseButton onClick={async () => {
                console.log({ codigo, nombre, precio, proveedor, fecha, cantidad});
                setIsSaving(true);
                await addProduct({ codigo, nombre, precio, proveedor, fecha, cantidad });
                setIsSaving(false);
                clearForm();
            }}>
                Guardar nuevo producto
            </PreserveCaseButton>
            <PreserveCaseButton onClick={() => {
                console.log("cancelando ...");
                clearForm();
            }}>
                Cancelar
            </PreserveCaseButton>
        </Grid>
    </Grid>);
}