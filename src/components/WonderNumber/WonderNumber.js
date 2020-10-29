import React, { useState } from "react";
import { AnswerList } from "../../components/AnswerList/AnswerList";
import classes from "./WonderNumber.module.css";
import { Link } from "react-router-dom";
import Coin from "../../Images/coin.png";

const getCoin = () => {
  let scores = localStorage.getItem('scores')
  let coins = scores ? scores : 0
  return coins 
};


const generateMathProblem = () => {
  let num1 = (Math.floor(Math.random() * 10) + 1);
  let num2 = (Math.floor(Math.random() * 10) + 1);
  let res = num1+num2
  
  let obj = {
    text: `${num1} + ${num2}`,
    numbers: [num1, num2],
    results: res
  }
console.log(obj);
  return obj
  }



export const WonderNumber = () => {

  const nums = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ];


  const [answer, setAnswer] = useState();
  const math = generateMathProblem()
  const results = math.results
  const cls = [classes.Eduludo];
  const coinCls = [
    classes.Eduludo,
    classes.CoinImg,
    answer === "success" ? classes.addCoin1 : null,
  ];
  
  
  if (answer === "error") {
    cls.push(`fas fa-frown ${classes.error} ${classes.fadeOut}`);
  } else if (answer === "success") {
    cls.push(`fas fa-smile ${classes.success} ${classes.fadeOut}`);
  }

  const onAnswerClickHandler = (ans) => {

    if (answer) {
      return;
    }

    if (results === ans) {
      setAnswer("success");

      let allScores = localStorage.getItem("scores");
      allScores++;
      localStorage.setItem("scores", allScores);

    } else {
      setAnswer("error");
    }

    setTimeout(() => {
      setAnswer(null);
    }, 2000);
 
  };


  return (

    <div className={classes.Eduludo}>
      <div className={classes.HeaderFlex}>
        <div>
          <Link to="/">
            <button
              onClick={() => {
                localStorage.clear();
              }}
              className={classes.goBackButton}
            >
              {" "}
              Go back{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
        <div className={classes.Coins}>
          <p data-testid="counter" className={classes.CoinsCount}>
            {" "}
            {getCoin()}{" "}
          </p>{" "}
          <img alt="coin" src={Coin} className={coinCls.join(" ")} />{" "}
        </div>{" "}
      </div>
      <div className={classes.EduludoWrapper}>
        <h1 className={classes.Example}>
          {math.text}
        </h1>
        <i className={cls.join(" ")}> </i>
        <AnswerList nums={nums} onAnswerClick={onAnswerClickHandler} />
      </div>
    </div>
  );
};
