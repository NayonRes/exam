import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Timer from "./Timer";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import KeyboardEventHandler from "react-keyboard-event-handler";
import ReportIcon from "@mui/icons-material/Report";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  slickStyle: {
    "& .slick-prev": {
      display: "none !important",
    },
    "& .slick-next": {
      display: "none !important",
    },
  },
  buttonStyle: {
    "&:hover": {
      color: "#fff !important",
      background: "#079992 !important",
    },
  },
  activeStyle: {
    color: "#fff !important",
    background: "#079992 !important",
  },
  dialogButton: {
    background: "none !important",
    color: "#fff !important",
    "&:hover": {
      background: "#4fb5b0 !important",
    },
  },
  title: {
    color: "#fff",
    textAlign: "center",
    margin: "0px 0px 10px 0px",
    letterSpacing: "3px",
    fontSize: "24px",
    fontWeight: 600,
  },
  optionStyle: {
    border: "1px solid #079992",
    padding: "10px 20px",
    borderRadius: "10px",
    [theme.breakpoints.down("xl")]: {
      padding: "5px 10px",
    },
  },
  main: {
    background: "#079992",
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xl")]: {
      padding: "10px",
    },
  },
  divPadding: {
    padding: "25px",
    [theme.breakpoints.down("xl")]: {
      padding: "10px 25px",
    },
  },
  DialogContentStyle: {
    minWidth: "350px !important",
    padding: "50px 24px !important",
    [theme.breakpoints.down("sm")]: {
      minWidth: "250px !important",
      padding: "30px 24px !important",
    },
  },
  marksTextStyle: {
    textAlign: "center",
    fontSize: "18px",
    color: "#676767",
  },
  marksStyle: {
    textAlign: "center",
    fontSize: "22px",
    color: "#888888",
    lineHeight: "50px",
    fontWeight: 600,
  },
  noteStyle: {
    textAlign: "center",
    fontSize: "18px !important",
    color: "#888888",
    lineHeight: "50px !important",
    letterSpacing: "0.00938em",
  },
}));
const QuestionPaper = () => {
  const myData = [
    {
      title: `var person = {
              age: 23,
              getAge: function(){
                return this.age;
              }
            }

            var person2 = {age:  54};
            person.getAge.call(person2);`,
      options: [
        { id: 1, option: "23" },
        { id: 2, option: "54" },
        { id: 3, option: "syntex error" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 2,
    },
    {
      title: `function multiply(a,b){
          return a*b;
        }

        function currying(fn){
          return function(a){
            return function(b){
              return fn(a,b);
            }
          }
        }

        var curriedMultiply = currying(multiply);
        curriedMultiply(4)(3)
        `,
      options: [
        { id: 1, option: "12" },
        { id: 2, option: "144" },
        { id: 3, option: "syntex error" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 1,
    },
    {
      title: `function divideByHalf(sum){
          console.log(Math.floor(sum / 2));
        }

        function multiplyBy2(sum){
          console.log(sum * 2);
        }

        function operationOnSum(num1,num2,operation){
          var sum = num1 + num2;
          operation(sum);
        }

        operationOnSum(3, 3, divideByHalf);`,
      options: [
        { id: 1, option: "3" },
        { id: 2, option: "20" },
        { id: 3, option: "syntex error" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 1,
    },
    {
      title: `function divideByHalf(sum){
          console.log(Math.floor(sum / 2));
        }

        function multiplyBy2(sum){
          console.log(sum * 2);
        }

        function operationOnSum(num1,num2,operation){
          var sum = num1 + num2;
          operation(sum);
        }

        operationOnSum(5, 5, multiplyBy2);`,
      options: [
        { id: 1, option: "3" },
        { id: 2, option: "20" },
        { id: 3, option: "syntex error" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 2,
    },
    {
      title: `function computeSum(arr){
          if(arr.length === 1){
            return arr[0];
          }
          else{
            return arr.pop() + computeSum(arr);
          }
        }

        computeSum([7, 8, 9, 99]);`,
      options: [
        { id: 1, option: "123" },
        { id: 2, option: "undefine" },
        { id: 3, option: "syntex error" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 1,
    },
    {
      title: `var obj1 = {
          valueOfThis: function(){
            return this;
          }
        }
        var obj2 = {
          valueOfThis: ()=>{
            return this;
          }
        }

        obj1.valueOfThis();`,
      options: [
        { id: 1, option: "Will return the object obj1" },
        { id: 2, option: "undefine" },
        { id: 3, option: "syntex error" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 1,
    },
    {
      title: `var obj1 = {
          valueOfThis: function(){
            return this;
          }
        }
        var obj2 = {
          valueOfThis: ()=>{
            return this;
          }
        }

        obj2.valueOfThis();`,
      options: [
        { id: 1, option: "Will return the object obj1" },
        { id: 2, option: "Will return window/global object" },
        { id: 3, option: "undefine" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 2,
    },
    {
      title: `var variable1 = 23;

      let variable2 = 89;

      function catchValues(){
        console.log(variable1);
        console.log(variable2);
      }

      window.variable1;`,
      options: [
        { id: 1, option: "syntex error" },
        { id: 2, option: "23" },
        { id: 3, option: "undefine" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 2,
    },
    {
      title: `var variable1 = 23;

      let variable2 = 89;

      function catchValues(){
        console.log(variable1);
        console.log(variable2);
      }

      window.variable2;`,
      options: [
        { id: 1, option: "syntex error" },
        { id: 2, option: "23" },
        { id: 3, option: "undefine" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 3,
    },
    {
      title: `function extractingArgs(...args){
          return args[1];
        }

        function addAllArgs(...args){
          let sumOfArgs = 0;
          let i = 0;
          while(i < args.length){
            sumOfArgs += args[i];
            i++;
          }
          return sumOfArgs;
        }
        addAllArgs(6, 5, 7, 99);`,
      options: [
        { id: 1, option: "117" },
        { id: 2, option: "8" },
        { id: 3, option: "undefine" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 1,
    },
    {
      title: `function extractingArgs(...args){
          return args[1];
        }

        function addAllArgs(...args){
          let sumOfArgs = 0;
          let i = 0;
          while(i < args.length){
            sumOfArgs += args[i];
            i++;
          }
          return sumOfArgs;
        }
        addAllArgs(1, 3, 4);`,
      options: [
        { id: 1, option: "117" },
        { id: 2, option: "8" },
        { id: 3, option: "undefine" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 2,
    },
    {
      title: `const classDetails = {
          strength: 78,
          benches: 39,
          blackBoard:1
        }

        const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;
        console.log(classStrength);`,
      options: [
        { id: 1, option: "true" },
        { id: 2, option: "false" },
        { id: 3, option: "undefine" },
        { id: 4, option: "type error" },
      ],
      selectedOption: "",
      answerId: 2,
    },
  ];

  const customSlider = useRef();
  const classes = useStyles();
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [activeSlideNo, setActiveSlideNo] = useState(0);
  const [refress, setRefress] = useState(false);
  const [open, setOpen] = useState(false);
  const [keyboard, setKeyboard] = useState(true);
  const [checkMessage, setCheckMessage] = useState("");
  const [remainingQuestionNo, setRemainingQuestionNo] = useState([]);
  const [obtainedMarks, setObtainedMarks] = useState();
  const [examTime, setExamTime] = useState({ min: 30, sec: 0 });

  const handleClose = () => {
    setOpen(false);
    setKeyboard(false);
  };

  const handleChange = (i, id) => {
    data[i].selectedOption = id;
    setRefress(!refress);
  };

  const handleCheckPaper = () => {
    let notAnsweredQuestionNo = [];
    data.map((item, i) => {
      if (item.selectedOption.length < 1) {
        notAnsweredQuestionNo.push(i + 1);
      }
    });
    if (notAnsweredQuestionNo.length > 0) {
      setOpen(true);
      setRemainingQuestionNo(notAnsweredQuestionNo);
    } else {
      setOpen(true);
      setCheckMessage("Would like to recheck !!!");
    }
  };

  const handleSubmit = () => {
    try {
      let totalMarks = 0;

      data.map((item) => {
        if (item.selectedOption === item.answerId) {
          totalMarks += 5;
        }
      });

      setObtainedMarks(totalMarks);
      navigate("/result", { state: { marks: totalMarks } });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlideNo(next),
  };
  const timeOutFunction = () => {
    handleSubmit();
  };
  useEffect(() => {
    setData(myData);
  }, []);

  return (
    <div className={classes.main}>
      <KeyboardEventHandler
        handleKeys={["all"]}
        handleFocusableElements
        onKeyEvent={(key, e) => setKeyboard(true)}
      />

      <div style={{ padding: "0px 20px" }}>
        <p className={classes.title}>Remaining Time</p>

        <Timer
          min={examTime.min}
          sec={examTime.sec}
          timeOutFunction={timeOutFunction}
        />

        <Grid container spacing={1}>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={2}></Grid>
          <Grid item xs={12} sm={8.8} md={8} lg={8} xl={8}>
            <div
              style={{ background: "#fff", borderRadius: "5px" }}
              className={classes.slickStyle}
            >
              <Slider
                {...settings}
                ref={(slider) => (customSlider.current = slider)}
              >
                {data?.map((item, i) => (
                  <div key={i}>
                    <div className={classes.divPadding}>
                      <h2 style={{ margin: 0, fontWeight: 400 }}>
                        Question No: {i + 1}
                      </h2>

                      <SyntaxHighlighter
                        language="javascript"
                        wrapLines={true}
                        wrapLongLines={true}
                        style={arta}
                        customStyle={{
                          padding: "30px 20px",
                          borderRadius: "5px",
                          minHeight: "270px",
                        }}
                      >
                        {item.title}
                      </SyntaxHighlighter>
                      <Grid container spacing={2}>
                        {item.options.map((el, index) => {
                          return (
                            <Grid item xs={12} sm={6} key={index}>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                className={classes.optionStyle}
                                style={{
                                  background:
                                    item.selectedOption === el.id
                                      ? "#079992"
                                      : "",
                                  color:
                                    item.selectedOption === el.id
                                      ? "#d1ffe3"
                                      : "",
                                }}
                                value={item.selectedOption}
                                onChange={() => handleChange(i, el.id)}
                              >
                                <FormControlLabel
                                  value={el.id}
                                  control={<Radio color="info" />}
                                  label={el.option}
                                />
                              </RadioGroup>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <br />
            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "5px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={() => customSlider.current.slickPrev()}
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={() => customSlider.current.slickNext()}
                  >
                    Next
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    className={classes.buttonStyle}
                    onClick={handleCheckPaper}
                  >
                    Submit Question
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
            <Grid
              container
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "5px",
              }}
            >
              <Grid container columnSpacing={1}>
                <Grid item xs={12}>
                  <h4
                    style={{
                      color: "#079992",
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    Queation No:
                  </h4>
                </Grid>
                {data?.map((item, i) => (
                  <Grid item xs={3} sm={6} md={6} lg={4} key={i}>
                    <Button
                      fullWidth
                      variant="outlined"
                      className={`${classes.buttonStyle} ${
                        activeSlideNo === i ? classes.activeStyle : ""
                      } `}
                      style={{
                        marginBottom: "10px",
                      }}
                      onClick={() => customSlider.current.slickGoTo(i)}
                    >
                      {i + 1}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className={classes.DialogContentStyle}>
            <DialogContentText
              id="alert-dialog-description"
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#888888",
                lineHeight: "40px",
              }}
            >
              {checkMessage.length > 0 ? (
                checkMessage
              ) : (
                <>
                  You haven't answered <br />
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#676767",
                      wordBreak: "break-all",
                    }}
                  >
                    {remainingQuestionNo.join(", ")}
                  </span>
                  <br /> number question
                  {remainingQuestionNo.length > 1 ? "s" : ""}.
                </>
              )}
            </DialogContentText>
          </DialogContent>

          <DialogActions
            style={{
              justifyContent: "center",
              background: "#079992",
              padding: 0,
            }}
          >
            <Button
              size="large"
              fullWidth
              onClick={handleClose}
              className={classes.dialogButton}
            >
              Continue Exam
            </Button>
            <Button
              size="large"
              fullWidth
              onClick={handleSubmit}
              autoFocus
              className={classes.dialogButton}
            >
              Confirm Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={keyboard}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className={classes.DialogContentStyle}>
            <DialogContentText
              id="alert-dialog-description"
              className={classes.noteStyle}
            >
              <ReportIcon style={{ fontSize: "120px", color: "#f6b93b" }} />
              <br />
              1. Please, don't use keyboard.
              <br />
              2. Please, don't use any unethical practice.
              <br />
            </DialogContentText>
          </DialogContent>

          <DialogActions
            style={{
              justifyContent: "center",
              background: "#079992",
              padding: 0,
            }}
          >
            <Button
              fullWidth
              onClick={handleClose}
              autoFocus
              className={classes.dialogButton}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default QuestionPaper;
