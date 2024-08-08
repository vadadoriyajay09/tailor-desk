import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Account = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          minHeight: "50px",
          position: "relative",
          borderRadius: "10px",
          marginBottom: "24px",
          boxShadow: "0 0 10px 0 rgba(183,192,206,.2)",
        }}
      >
        <Box sx={{ padding: "15px" }}>
          <Box sx={{ margin: { md: "1.5rem", sm: "0" }, marginBottom: "0" }}>
            <form>
              <Box>
                <Grid container spacing={4} pb={3}>
                  <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(8,1fr)",
                        xs: "repeat(4,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Company Code : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Company Name : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Key Person : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: { xl: "grid", xs: "block", flexWrap: "wrap" },
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Contact Person : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5", width: "100%" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: { xl: "grid", xs: "flex", flexWrap: "wrap" },
                      gap: "12px",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        gridColumn: "1/3",
                        display: "grid",
                        width: "100%",
                        gridTemplateColumns: {
                          xl: "repeat(2,1fr)",
                          xs: "repeat(1,1fr)",
                        },
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Mobile 1 :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5" }} />
                    </Box>
                    <Box
                      sx={{
                        gridColumn: "3/5",
                        display: "grid",
                        width: "100%",
                        gridTemplateColumns: {
                          xl: "repeat(3,1fr)",
                          xs: "repeat(1,1fr)",
                        },
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Mobile 2 :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5" }} />
                    </Box>
                  </Grid>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "aqua", backgroundColor: "gray", height: "2px" }}
                />
                <Grid container spacing={4} py={3}>
                  <Grid item md={12}>
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "blue",
                        fontSize: "22px",
                        fontWeight: "500",
                        textDecoration: "underline",
                      }}
                    >
                      Address
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xl={6}
                    xs={12}
                    sx={{
                      display: { xl: "grid", xs: "block", flexWrap: "wrap" },
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Address : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5", width: "100%" }} />
                    <TextField
                      sx={{ gridColumn: "1 / 5", width: "100%", mt: "15px" }}
                    />
                    <TextField
                      sx={{ gridColumn: "1 / 5", width: "100%", mt: "15px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xl={6}
                    xs={12}
                    sx={{
                      display: { xl: "grid", xs: "flex", flexWrap: "wrap" },
                      gap: "12px",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        gridColumn: "1/3",
                        gridTemplateColumns: " repeat(2,1fr)",
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        City :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5", width: "100%" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        gridColumn: "3/5",
                        gridTemplateColumns: " repeat(3,1fr)",
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        State :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5", width: "100%" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        gridColumn: "1/3",
                        display: "grid",
                        gridTemplateColumns: " repeat(2,1fr)",
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Country :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        gridColumn: "3/5",
                        display: "grid",
                        gridTemplateColumns: " repeat(3,1fr)",
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Pincode :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5" }} />
                    </Box>
                    <Box
                      sx={{
                        gridColumn: "1/3",
                        display: "grid",
                        gridTemplateColumns: " repeat(2,1fr)",
                        width: "100%",
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Phone1 :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5" }} />
                    </Box>
                    <Box
                      sx={{
                        gridColumn: "3/5",
                        display: "grid",
                        gridTemplateColumns: " repeat(2,1fr)",
                        width: "100%",
                      }}
                    >
                      <Typography
                        style={{
                          marginBottom: "11px",
                          color: "#1E1E1E",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Phone2 :
                      </Typography>
                      <TextField sx={{ gridColumn: "1 / 5" }} />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Email : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Fax No : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Web : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Exp Officer : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "aqua", backgroundColor: "gray", height: "2px" }}
                />
                <Grid container spacing={4} py={3}>
                  <Grid item md={12}>
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "blue",
                        fontSize: "22px",
                        fontWeight: "500",
                        textDecoration: "underline",
                      }}
                    >
                      Bank Details
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Bank Name : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Branch Name :
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Address :
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                    <TextField sx={{ gridColumn: "1 / 5", mt: "15px" }} />
                    <TextField sx={{ gridColumn: "1 / 5", mt: "15px" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "block",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Account No :*
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5", width: "100%" }} />
                  </Grid>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "aqua", backgroundColor: "gray", height: "2px" }}
                />
                <Grid container spacing={4} py={3}>
                  <Grid item md={12}>
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "blue",
                        fontSize: "22px",
                        fontWeight: "500",
                        textDecoration: "underline",
                      }}
                    >
                      Foreign Bank
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Bank Name : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Account No :
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "aqua", backgroundColor: "gray", height: "2px" }}
                />
                <Grid container spacing={4} py={3}>
                  <Grid item md={12}>
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "blue",
                        fontSize: "22px",
                        fontWeight: "500",
                        textDecoration: "underline",
                      }}
                    >
                      Local Invoice
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      VAT No : *
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      TIN No :
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      GSTIN No :
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: {
                        xl: "repeat(4,1fr)",
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <Typography
                      style={{
                        marginBottom: "11px",
                        color: "#1E1E1E",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Pan No :
                    </Typography>
                    <TextField sx={{ gridColumn: "1 / 5" }} />
                  </Grid>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "aqua", backgroundColor: "gray", height: "2px" }}
                />
                <Grid container spacing={4} py={3}>
                  <Grid item md={12}>
                    <Box
                      fullWidth
                      sx={{
                        border: "1px dashed #7c7db3",
                        padding: "26px 20px 30px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Button
                          component="label"
                          variant="contained"
                          sx={{ backgroundColor: "#3f51b5" }}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload file
                        </Button>
                        <Typography
                          variant="span"
                          fontSize={"15px"}
                          color={"#555"}
                          marginLeft={"5px"}
                        >
                          or drag and drop file here
                        </Typography>
                      </Box>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="avatar"
                        type="file"
                        sx={{
                          cursor: "pointer",
                          opacity: "0",
                          position: "absolute",
                          top: "0",
                          left: "0",
                          height: "92px",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: "16px",
                  justifyContent: "end",
                }}
              >
                <Button
                  component="label"
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{ backgroundColor: "#3f51b5" }}
                >
                  Submit
                </Button>
                <Button
                  component="label"
                  variant="contained"
                  size="medium"
                  sx={{ backgroundColor: "#f44336" }}
                >
                  Cancle
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Account;