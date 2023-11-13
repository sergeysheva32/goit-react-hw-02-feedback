import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, countPositiveFeedbackPercentage }) {
    return (
        <>
            <div className={css.cont}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {countPositiveFeedbackPercentage}</p>
        </div>
            </>
    );
}

