import React, { useState } from "react";
import { AnswerList } from "../../components/AnswerList/AnswerList";
import classes from "./WonderNumber.module.css";
import { Link } from "react-router-dom";
import Coin from "../../Images/coin.png";

const getCoin = () => {
  let allScores = localStorage.getItem("scores");
  allScores++;
  localStorage.setItem("scores", allScores);
};

export const WonderNumber = () => {
  const nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [answer, setAnswer] = useState();

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

    if (num1 + num2 === ans) {
      setAnswer("success");
      getCoin();
    } else {
      setAnswer("error");
    }

    setTimeout(() => {
      setNum1(Math.floor(Math.random() * 10) + 1);
      setNum2(Math.floor(Math.random() * 10) + 1);

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
            {localStorage.scores ? localStorage.scores : 0}{" "}
          </p>{" "}
          <img alt="coin" src={Coin} className={coinCls.join(" ")} />{" "}
        </div>{" "}
      </div>
      <div className={classes.EduludoWrapper}>
        <h1 className={classes.Example}>
          {num1} + {num2}
        </h1>
        <i className={cls.join(" ")}> </i>
        <AnswerList nums={nums} onAnswerClick={onAnswerClickHandler} />
      </div>
    </div>
  );
};
