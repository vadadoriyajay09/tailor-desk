import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
const PatternMaster = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Open",
      active: true,
    },
    {
      id: 2,
      name: "Bushirt",
      active: true,
    },
    {
      id: 3,
      name: "કટ વાળો",
      active: true,
    },
    {
      id: 4,
      name: "બોમ્બે પટ્ટી",
      active: true,
    },
    {
      id: 5,
      name: "અંદર પોકેટ",
      active: true,
    },
    {
      id: 6,
      name: "સાદી પટ્ટી",
      active: true,
    },
    {
      id: 7,
      name: "સ્ટેન્ડ પટ્ટી",
      active: true,
    },
    {
      id: 8,
      name: "પોકેટ માં ગાજ બટન",
      active: true,
    },
    {
      id: 9,
      name: "ફેન્સી બટન",
      active: true,
    },
    {
      id: 10,
      name: "લોગો",
      active: true,
    },
    {
      id: 11,
      name: "વીધાઉટ સોલ્ડર",
      active: true,
    },
    {
      id: 12,
      name: "પોકેટ નથી",
      active: true,
    },
    {
      id: 13,
      name: "પેટન કરવી",
      active: true,
    },
    {
      id: 14,
      name: "લેસ મુકવી",
      active: true,
    },
    {
      id: 15,
      name: "કોલર મોટો",
      active: true,
    },
    {
      id: 16,
      name: "કોલર નાનો",
      active: true,
    },
    {
      id: 17,
      name: "કફ ચોરસ",
      active: true,
    },
    {
      id: 18,
      name: "પાછળ ટક્ષ",
      active: true,
    },
    {
      id: 19,
      name: "ચોરસ કફ",
      active: true,
    },
    {
      id: 20,
      name: "બેન્ડ કોલર",
      active: true,
    },
    {
      id: 21,
      name: "પ્રકારના કોલર",
      active: true,
    },
  ]);
  const [open, setOpen] = React.useState(false);
  const [filter, setfilter] = React.useState("");
  const handleChange = (event) => {
    setfilter(event.target.value);
  };

  const columns = [
    {
      field: "id",
      headerName: "Order",
      flex: 1,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      flex: 1,
    },
    {
      field: "active",
      headerName: "Active",
      type: "boolean",
      flex: 1,

      renderCell: (params) => (
        <Checkbox
          checked={params.row.active}
          onChange={(event) => {
            const updatedRows = rows.map((row) => {
              if (row.id === params.row.id) {
                return { ...row, active: event.target.checked };
              }
              return row;
            });
            setRows(updatedRows);
          }}
        />
      ),
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "#dae1f3",
            height: "60px",
            px: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControl
            sx={{ maxWidth: "250px", backgroundColor: "#fff" }}
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">Item</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Item"
              name="Item"
              onChange={handleChange}
            >
              <MenuItem value={"Shirt"}>Shirt</MenuItem>
              <MenuItem value={"કટ વાળો"}>કટ વાળો</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <IconButton
              onClick={handleClickOpen}
              aria-label="delete"
              size="medium"
              sx={{
                backgroundColor: "#3f51b5",
                color: "#fff",
                boxShadow:
                  "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  boxShadow:
                    "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              sx={{
                backgroundColor: "#3f51b5",
                color: "#fff",
                boxShadow:
                  "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  boxShadow:
                    "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              <RefreshIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <DataGrid
            sx={{
              width: "100%",
              background: "#fff",
              border: "0",
              fontSize: "14px",
              "& .MuiDataGrid-columnHeader": {
                color: "#000",
                fontSize: "14px ",
                fontWeight: "bold !important",
              },
              "& .MuiDataGrid-columnHeaders": {
                maxHeight: "59px !important",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "0",
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 7,
                },
              },
            }}
          />
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ zIndex: "9999" }}
      >
        <DialogTitle id="alert-dialog-title">{"Pattern Master"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" padding={{ sm: 5 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="Name"
                  placeHolder="Enter Name"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">ACTIVE</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={Top.Top}
                    label="ACTIVE"
                    name="ACTIVE"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>No</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="inherit">
            Disagree
          </Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PatternMaster;