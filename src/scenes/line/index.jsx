import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    //Giving Line chart a 75 view port height
    return (
        <Box m ="20px">
            <Header title="LINE CHART" subtitle="Here is a Simple Line Chart" />
            
            <Box height="75vh"> 
                <LineChart />
            </Box>
        
        </Box>
    )

}

export default Line;