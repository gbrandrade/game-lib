import PropType from "prop-types";

TextInput.propTypes = {
  name: PropType.string,
  labelText: PropType.string,
  value: PropType.string,
  setValue: PropType.func,
};

export default function TextInput({ name, labelText, value, setValue }) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
