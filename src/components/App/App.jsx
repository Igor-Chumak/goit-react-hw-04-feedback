import { useState } from 'react';
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
// import data about types and numbers of feedbacks
import typeFeedbacks from 'data/type_feedback.json';
// import typeFeedbacks from 'data/type_feedback_2.json';

const localStorageKey = 'feedback';
const localStorageTheme = localStorageKey + '_theme';
const stateDefault = {};
typeFeedbacks.map(({ nameId, value }) => (stateDefault[nameId] = value));
const modeThemeInit =
  loadFromLocalStorage(localStorageTheme) === 'dark' ? 'dark' : 'light';

export const App = () => {
  const [feedBack, setFeedBack] = useState(stateDefault);
  const [modeTheme, setModeTheme] = useState(modeThemeInit);

  const handleToggleTheme = () => {
    setModeTheme(prevModeTheme =>
      prevModeTheme === 'light' ? 'dark' : 'light'
    );
    console.log('modeTheme :>> ', modeTheme);
    saveToLocalStorage(localStorageTheme, modeTheme);
  };

  const onLeaveFeedback = e => {
    let stateKey = e.currentTarget.name;
    setFeedBack(prevState => {
      return { ...feedBack, ...{ [stateKey]: prevState[stateKey] + 1 } };
    });
  };

  const countTotalFeedback = () => {
    return Object.keys(feedBack).reduce((previousValue, element) => {
      return previousValue + feedBack[element];
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return feedBack.good > 0
      ? Math.round((feedBack.good / countTotalFeedback()) * 100)
      : 0;
  };

  let total = countTotalFeedback();

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(modeTheme === 'light' ? lightTheme : darkTheme),
      }}
    >
      <GlobalStyles />
      <Header>
        <CreateThemeSwitcher
          handleToggleTheme={handleToggleTheme}
          modeThemeSwitch={modeTheme === 'light' ? true : false}
        />
      </Header>
      <main>
        <Section title="Please leave feedback">
          <ButtonList
            options={typeFeedbacks}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              state={feedBack}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </main>
    </ThemeProvider>
  );
};

function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
