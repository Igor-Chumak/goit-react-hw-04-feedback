import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ButtonList,
  Statistics,
  Notification,
} from 'components';
import typeFeedbacks from 'data/type_feedback.json';
// import typeFeedbacks from 'data/type_feedback_2.json';

const stateDefault = {};
typeFeedbacks.map(({ nameId, value }) => (stateDefault[nameId] = value));

export class App extends Component {
  state = {
    ...stateDefault,
    modeTheme: 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  onLeaveFeedback = e => {
    let stateKey = e.currentTarget.name;
    this.setState(prevState => {
      return { [stateKey]: prevState[stateKey] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((previousValue, element) => {
      return typeof this.state[element] === 'number'
        ? previousValue + this.state[element]
        : previousValue;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    let total = this.countTotalFeedback();
    return (
      <ThemeProvider
        theme={{
          ...theme,
          ...(this.state.modeTheme === 'light' ? lightTheme : darkTheme),
        }}
      >
        <GlobalStyles />
        <Header>
          <CreateThemeSwitcher
            handleToggleTheme={this.handleToggleTheme}
            modeTheme={this.state.modeTheme === 'light' ? false : true}
          />
        </Header>
        <main>
          <Section title="Please leave feedback">
            <ButtonList
              options={typeFeedbacks}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                state={this.state}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </main>
      </ThemeProvider>
    );
  }
}
