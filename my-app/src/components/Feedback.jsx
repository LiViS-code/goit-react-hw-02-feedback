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
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const name = e.currentTarget.name;
    return this.setState({ [name]: this.state[name] + 1 });
  };

  render() {
    const handleIncrement = this.handleIncrement;
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Title>Please leave feedback</Title>

        <ListButton>
          <ListButtonItem>
            <Button type="button" name="good" onClick={handleIncrement}>
              Good
            </Button>
          </ListButtonItem>

          <ListButtonItem>
            <Button type="button" name="neutral" onClick={handleIncrement}>
              Neutral
            </Button>
          </ListButtonItem>

          <ListButtonItem>
            <Button type="button" name="bad" onClick={handleIncrement}>
              Bad
            </Button>
          </ListButtonItem>
        </ListButton>

        <StatisticsTitle>Statistics</StatisticsTitle>

        <ListFeedback>
          <FeedbackItem>
            Good: <Value>{good}</Value>
          </FeedbackItem>

          <FeedbackItem>
            Neutral: <Value>{neutral}</Value>
          </FeedbackItem>

          <FeedbackItem>
            Bad: <Value>{bad}</Value>
          </FeedbackItem>
        </ListFeedback>
      </Container>
    );
  }
}

export default Feedback;
