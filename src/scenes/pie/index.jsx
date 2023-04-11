import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    //Giving Bar chart a 75 view port height
    return (
        <Box m ="20px">
            <Header title="PIE CHART" subtitle="Here is a Simple Pie Chart" />
            
            <Box height="75vh"> 
                <PieChart />
            </Box>
        
        </Box>
    )

}

export default Pie;