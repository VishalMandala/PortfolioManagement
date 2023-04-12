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
        
            <Box>
                <Button sx={{ backgroundColor: colors.blueAccent[600], color: colors.grey[200], frontSize: "14px", fontWeight:"bold", padding:"10px 20px" }}>
                    <DownloadOutlinedIcon sx = {{ mr: "10px" }} />
                    Download Reports
                </Button>
            </Box>
        </Box>

        {/* Grid and Charts */}
        <Box 
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >

            

            {/* First Row */}
            <Box
                gridColumn="span 6"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Box
                    mt = "25px"
                    p = "0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItem="center"
                >
                    <Box>
                        <Typography variant="h5" fontWeight="500" color={colors.primary[200]}>
                            Revenue Generated
                        </Typography>
                        <Typography variant="h3" fontWeight="500" color={colors.blueAccent[300]}>
                            $75,985,325
                        </Typography>
                    </Box>
                    
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                                sx={{ fontSize: "26px", color: colors.greenAccent[500]}}
                            />
                        </IconButton>
                    </Box>
                </Box>

                <Box height="250px" mt="-20px">
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>
            {/* Transactions */}
            <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
                    <Typography colors={colors.grey[200]} variant="h4" fontWeight="600">
                        Recent Transactions 
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box key = {`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
                        <Box>
                            <Typography colors={colors.greenAccent[600]} variant="h4" fontWeight="600">
                                {transaction.txId} 
                            </Typography>
                            <Typography colors={colors.grey[200]}>
                                {transaction.user} 
                            </Typography>
                        </Box>

                        <Box color={colors.grey[200]}>{transaction.date}</Box>
                        <Box backgroundColor={colors.greenAccent[400]} p="5px 10px" borderRadius="4px">{transaction.cost}</Box>
                    </Box>
                ))}
            </Box> 

            {/* Row 2 */}
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

            {/* Row 3 */}

            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h4" fontWeight="600">
                    Campaign
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                    <ProgressCircle size="125" />
                    <Typography variant="h4" color={colors.greenAccent[500]} sx={{ mt: "15px"}}>
                        $21,432,643 Total Revenue Generated
                    </Typography>
                    <Typography>
                        Including Expenditures and Miscallaneous Expenses
                    </Typography>
                </Box>
            </Box>            


        </Box>
    </Box>
    );
};

export default Dashboard;