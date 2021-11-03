import { Grid } from "@mui/material";
import { Box } from "@mui/system";

/*
 * Con esta serie de ejemplos 
 * - nos metemos un poquito en el manejo de estilos
 * - trabajamos con Grid y flexbox
 * 
 * Para estilos, MUI propone dos opciones, ver en https://mui.com/system/basics
 * - Combinarlo con styled-components, viene preparado.
 * - Usar lo que llama "el system", que parece estar basado en una prop llamada sx.
 * 
 * Acá vamos a adoptar la segunda ... básicamente porque pintó.
 */

/*
 * aca vemos 
 * - el uso de Grid para poner dos datos en una fila
 * - un poquito de responsiveness
 * - un caso trivial de sx: https://mui.com/system/basics/#the-sx-prop / https://mui.com/system/the-sx-prop/  
 */
export function TableExample01() {
    return (
        <Grid container direction="row">
            <Grid item xs={6} md={2} sx={{ color: "red" }}>
                Nombre
            </Grid>
            <Grid item xs={6} md={2}>
                Agua oxigenada
            </Grid>
        </Grid>
    );
}

/* 
 * Pongamos un poquito de margen.
 * - Ufa, a los elementos HTML (p.ej. div) no les puedo mandar sx. 
 *   Parece que "el div de MUI" sería el Box.
 *   De hecho sólo unos poquitos elementos MUI aceptan el prop sx, ver en
 *   https://mui.com/system/basics/#api-tradeoff.
 * - De paso, uso de medidas que no son px, rem y porcentajes.
 *   ¿Qué pasa si le cambio el width de 90% a 50%, por qué?
 */
export function TableExample02() {
    return (
        <Box sx={{ marginTop: "1rem", marginLeft: "5%", marginRight: "5%", width: "90%"}}>
            <Grid container direction="row">
                <Grid item xs={6} md={2} sx={{ color: "red" }}>
                    Nombre
                </Grid>
                <Grid item xs={6} md={2}>
                    Agua oxigenada
                </Grid>
            </Grid>
        </Box>
    );
}

/* 
 * Armamos una tabla
 * - Cajitas dentro de cajitas, layout
 * - Podemos jugar con spacing.
 * 
 * Además ... vemos que sx puede tomar valores del theme.
 */
export function TableExample03() {
    return (
        <Box sx={{ marginTop: "1rem", marginLeft: "5%", marginRight: "5%", width: "90%" }}>
            <Grid container direction="column" spacing={2}>
                <Grid item container direction="row">
                    <Grid item xs={6} md={2} sx={{ color: "red" }}>
                        Código
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ color: "value.text", typography: "value" }}>
                        AFX82
                    </Grid>
                </Grid>
                <Grid item container direction="row">
                    <Grid item xs={6} md={2} sx={{ color: "red" }}>
                        Nombre
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ color: "value.text", typography: "value" }}>
                        Agua oxigenada
                    </Grid>
                </Grid>
                <Grid item container direction="row">
                    <Grid item xs={6} md={2} sx={{ color: "red" }}>
                        Precio
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ color: "value.text", typography: "value" }}>
                        325
                    </Grid>
                </Grid>
                <Grid item container direction="row">
                    <Grid item xs={6} md={2} sx={{ color: "red" }}>
                        Proveedor
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ color: "value.text", typography: "value" }}>
                        Farmacia "La Primera de Tesei"
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

/*
 * Para pensar hasta acá
 * - Cómo meto una imagen a la derecha que tome toda la tabla
 * - Cómo evito la repetición de definiiciones
 */

/*
 * Otras cosas para mostrar
 * - un poquito de flow, ponele las definiciones "compressed"
 */
