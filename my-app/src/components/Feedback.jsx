import React, { Component } from "react";
import {
  Container,
  Title,
  Button,
  ListButton,
  ListFeedback,
  StatisticsTitle,
  FeedbackItem,
  ListButtonItem,
  Value,
} from "./Feedback.styled";
class Feedback extends Component {
  controlBtn = [
    { key: "id-1", name: "good" },
    { key: "id-2", name: "neutral" },
    { key: "id-3", name: "bad" },
  ];

  totalFeedback = 0;
  positiveFeedbackPercentage = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (k) => {
    this.setState((state) => ({ [k]: state[k] + 1 }));
  };

  countTotalFeedback() {
    this.totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return this.totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    this.positiveFeedbackPercentage =
      this.totalFeedback === 0
        ? 0
        : Math.round((this.state.good / this.totalFeedback) * 100);
    return this.positiveFeedbackPercentage;
  }

  render() {
    const { controlBtn, handleIncrement } = this;

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Title>Please leave feedback</Title>

        <ListButton>
          {controlBtn.map(({ key, name }) => (
            <ListButtonItem key={key}>
              <Button type="button" onClick={() => handleIncrement(name)}>
                {name}
              </Button>
            </ListButtonItem>
          ))}
        </ListButton>

        <StatisticsTitle>Statistics</StatisticsTitle>

        <ListFeedback>
          {controlBtn.map(({ key, name }) => (
            <FeedbackItem key={key}>
              {`${name}:`} <Value>{this.state[name]}</Value>
            </FeedbackItem>
          ))}

          <FeedbackItem>
            Total: <Value>{this.totalFeedback}</Value>
          </FeedbackItem>

          <FeedbackItem>
            Positive feedback: <Value>{this.positiveFeedbackPercentage}%</Value>
          </FeedbackItem>
        </ListFeedback>
      </Container>
    );
  }
}

export default Feedback;
