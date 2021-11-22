import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export function ShowProductList(props) {

    const columns = [
        { field: 'numeroRata', headerName: 'Numero rata', width: 85,  },
        { field: 'dataScadenza', headerName: 'Data scadenza', width: 100,  },
        { field: 'capitale', headerName: 'Quota capitale', width: 90,  },
        { field: 'interessi', headerName: 'Quota interessi', width: 90,  },
        { field: 'conguaglioInteressi', headerName: 'Conguaglio interessi', width: 102,  },
        { field: 'residuo', headerName: 'Debito residuo', width: 90,  },
        { field: 'status', headerName: 'Status rata', width: 85,  },
    ];

    return (
        <Box sx={{ marginTop: "1rem", marginLeft: "5%", marginRight: "5%", width: "90%" }}>
            <Grid container direction="column" spacing={3}>
                <Grid item sx={{ typography: "title" }}>
                    Productos
                </Grid>
                <Grid item>
                    Hola
                </Grid>
            </Grid>
        </Box>
    )
}