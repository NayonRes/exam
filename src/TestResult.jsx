import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  dialogButton: {
    background: "#079992 !important",
    color: "#fff !important",
    "&:hover": {
      background: "#4fb5b0 !important",
    },
  },

  marksTextStyle: {
    textAlign: "center",
    fontSize: "18px",
    color: "#676767",
    marginTop: 5,
  },
  marksStyle: {
    textAlign: "center",
    fontSize: "22px",
    color: "#888888",
    lineHeight: "50px",
    fontWeight: 600,
  },

  card: {
    maxWidth: "350px",
    background: "#fff",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    padding: "40px",
    borderRadius: "4px",
  },
}));
const TestResult = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const classes = useStyles();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <div className={classes.card}>
          <div id="alert-dialog-description" className={classes.marksTextStyle}>
            Total marks : 60
          </div>
          <div id="alert-dialog-description" className={classes.marksStyle}>
            Your obtained marks is <br />
            <span
              style={{
                fontSize: "50px",
                color: "#676767",
                wordBreak: "break-all",
              }}
            >
              {location?.state?.marks ? location.state.marks : 0}
            </span>
          </div>
          <Button
            fullWidth
            onClick={handleClose}
            autoFocus
            className={classes.dialogButton}
          >
            New Exam
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default TestResult;
