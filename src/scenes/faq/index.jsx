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
                    What is Revenue Generated?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Reveue Generated is the total amount of money Generatedby the organization.
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    What are Recent Transactions?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Recent Transactions hold the list of transactions which took place recently
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    What is applications received?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Applications received are the total number of applicants who applied to join the organization
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    What is Geography Chart
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Geography chart tells us about the expansion of the organization
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    What is Calender
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Calender is used for creation, and deletion of the events.
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[400]} variant="h4">
                    What is Invoice Balance
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Invoice balances are the transactions which took place.
            </AccordionDetails>
        </Accordion>
    </Box>

}

export default FAQ;