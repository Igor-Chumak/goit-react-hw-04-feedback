import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticItem,
  StatisticItemTotal,
  StatisticItemPositive,
} from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { state, total, positivePercentage } = this.props;
    return (
      <StatisticsBox>
        {Object.keys(state).map(
          stateKey =>
            typeof state[stateKey] === 'number' && (
              <StatisticItem key={stateKey}>
                {stateKey} : {state[stateKey]}
              </StatisticItem>
            )
        )}
        <StatisticItemTotal>Total : {total}</StatisticItemTotal>
        <StatisticItemPositive>
          Positive feedback : {positivePercentage} %
        </StatisticItemPositive>
      </StatisticsBox>
    );
  }
}
