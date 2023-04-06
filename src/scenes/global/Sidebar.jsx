import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Topography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlinedIcon";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlinedIcon";
import ContactOutlinedIcon from "@mui/icons-material/ContactOutlinedIcon";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlinedIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";
import CalenderTodayOutlinedIcon from "@mui/icons-material/CalenderTodayOutlinedIcon";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlinedIcon";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlinedIcon";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlinedIcon";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlinedIcon";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlinedIcon";
import MapOutlinedIcon from "@mui/icons-material/MapOutlinedIcon";

const Item =({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            active = {selected === title} 
            style={{ color: colors.grey[100]}} 
            onClick={() => setSelected(title)} 
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, SetIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box
            sx = {{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    background: `transparant !important`
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important" 
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Logo and Menu Icon */}
                    <MenuItem
                    onClick={() => SetIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >{!isCollapsed &&  (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                                ADMIN
                            </Typography>
                            <IconButton onClick={() => SetIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                    </MenuItem>
                    
                    {/* USER Code */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            
                            <Box textAlign="center">
                                <Typography
                                    variant = "h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0"}}
                                >
                                    Vishal Rao Mandala
                                </Typography>
                                <Typography variant="h5" color={colors.blueAccent[500]}>
                                    Portfolio
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items Code */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        
                    </Box>
                    
                </Menu>
            </ProSidebar>



        </Box>
    )
}

export default Sidebar;