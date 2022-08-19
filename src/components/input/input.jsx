import PropTypes from "prop-types";

export default function Input({ label, value, changeHandler }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        id={label.toLowerCase()}
        type="number"
        className="w-36 rounded border"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
