import css from "./FeedBackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            className={css.glow_on_hover}
          >
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}