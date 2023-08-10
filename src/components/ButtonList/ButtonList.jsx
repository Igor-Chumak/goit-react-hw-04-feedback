import PropTypes from 'prop-types';
import { ButtonBox, Button } from './ButtonList.styled';

export const ButtonList = ({ options, onLeaveFeedback }) => {
  const handleOnClick = e => {
    return onLeaveFeedback(e.currentTarget.name);
  };

  return (
    <div>
      <ButtonBox>
        {options.map(({ nameId, buttonName, btnColor, btnBgColor }) => (
          <Button
            type="button"
            name={nameId}
            style={{ color: btnColor, backgroundColor: btnBgColor }}
            key={nameId}
            onClick={handleOnClick}
          >
            {buttonName}
          </Button>
        ))}
      </ButtonBox>
    </div>
  );
};

ButtonList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      nameId: PropTypes.string.isRequired,
      buttonName: PropTypes.string.isRequired,
      btnColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
