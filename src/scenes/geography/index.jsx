import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Giving Geography chart a 76 view port height
    return (
        <Box m ="20px">
            <Header title="GEOGRAPHY CHART" subtitle="Here is a Simple Geography Chart" />
            
            <Box height="76vh" border={`2px solid ${colors.grey[200]}`} borderRadius="4px"> 
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;