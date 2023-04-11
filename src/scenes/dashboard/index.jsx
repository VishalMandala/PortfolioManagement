import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions} from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"; 
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";


const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle = "Welcome to the Dashboard" />
        </Box>
        <Box>
            <Button sx={{ backgroundColor: colors.blueAccent[600], color: colors.grey[200], frontSize: "14px", fontWeight:"bold", padding:"10px 20px" }}>
                <DownloadOutlinedIcon sx = {{ mr: "10px" }} />
                Download Reports
            </Button>
        </Box>

        {/* Grid and Charts */}
        <Box 
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >

            {/* Row 1 */}
            <Box gridColumn="span 4" backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="23,412"
                    subtitle="Applications Received"
                    progress="0.55"
                    increase="+21%"
                    icon={
                        <PersonAddIcon
                            sx={{ color: colors.greenAccent[500], fontSize: "26px" }} 
                        />  
                    }
                />
            </Box>

            <Box gridColumn="span 4" backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="12,352"
                    subtitle="Emails Sent"
                    progress="0.65"
                    increase="+12%"
                    icon={
                        <EmailIcon
                            sx={{ color: colors.greenAccent[500], fontSize: "26px" }} 
                        />  
                    }
                />
            </Box>

            <Box gridColumn="span 4" backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="384"
                    subtitle="New Projects"
                    progress="0.39"
                    increase="+16%"
                    icon={
                        <PointOfSaleIcon
                            sx={{ color: colors.greenAccent[500], fontSize: "26px" }} 
                        />  
                    }
                />
            </Box>

            {/* Second Row */}
            
            
        </Box>
    </Box>
    );
};

export default Dashboard;