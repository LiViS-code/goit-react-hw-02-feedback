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

// let totalFeedback = 0;
class Feedback extends Component {
  controlBtn = [
    { key: "id-1", name: "good" },
    { key: "id-2", name: "neutral" },
    { key: "id-3", name: "bad" },
  ];

  totalFeedback = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (k) => {
    this.totalFeedback = this.countTotalFeedback() + 1;
    return this.setState({ [k]: this.state[k] + 1 });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  render() {
    const { totalFeedback, controlBtn, handleIncrement } = this;
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
            Total: <Value>{totalFeedback}</Value>
          </FeedbackItem>
        </ListFeedback>
      </Container>
    );
  }
}

export default Feedback;
