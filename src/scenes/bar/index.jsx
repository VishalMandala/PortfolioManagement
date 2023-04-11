import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    //Giving Bar chart a 75 view port height
    return (
        <Box m ="20px">
            <Header title="BAR CHART" subtitle="Here is a Simple Bar Chart" />
            
            <Box height="75vh"> 
                <BarChart />
            </Box>
        
        </Box>
    )

}

export default Bar;