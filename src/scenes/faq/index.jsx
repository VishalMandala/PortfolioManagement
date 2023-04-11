import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    First Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Here is the solution for the first question
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    Second Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Here is the solution for the second question
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    Third Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Here is the solution for the third question
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    Forth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Here is the solution for the forth question
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    Fifth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Here is the solution for the fifth question
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    Sixth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Here is the solution for the sixth question
            </AccordionDetails>
        </Accordion>
    </Box>

}

export default FAQ;