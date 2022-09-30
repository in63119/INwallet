import React from "react";

// MUI css
import { Box, List } from "@mui/material";

// component
import TransactionListItem from "./TransactionListItem";

export default function TransactionList() {
  return (
    <Box sx={{ overflow: "auto", height: "300px" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <TransactionListItem />
      </List>
    </Box>
  );
}
