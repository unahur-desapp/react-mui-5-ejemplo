// OJO importar createTheme de @mui/material/styles y no de @mui/system
// cfr https://stackoverflow.com/questions/69336893/materialui-5-typeerror-cannot-read-properties-of-undefined-reading-create
import { createTheme } from "@mui/material/styles";  

export const muiTheme = createTheme({
    palette: {
        info: {
            // los colores que (re) defina *tienen* que tener un main, que no puede ser un color name
            main: "#2E8B57",
            text: "#2E8B57",
        },
    },
    typography: {
        info: {
            fontWeight: 'bold',
        },
        title: {
            fontSize: '20px',
        }
    }
});

