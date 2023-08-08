import PropTypes from 'prop-types';
import style from './CreateThemeSwitcher.module.css';

export const CreateThemeSwitcher = ({ handleToggleTheme, modeThemeSwitch }) => {
  return (
    <div className={style.switchBox}>
      {/* <span className={style.themeName}>Night</span> */}
      <label className={style.switch}>
        <input
          type="checkbox"
          onChange={handleToggleTheme}
          checked={modeThemeSwitch}
        />
        <span className={style.slider}></span>
      </label>
      {/* <span className={style.themeName}>Day</span> */}
    </div>
  );
};

CreateThemeSwitcher.propTypes = {
  handleToggleTheme: PropTypes.func.isRequired,
  modeThemeSwitch: PropTypes.bool.isRequired,
};
