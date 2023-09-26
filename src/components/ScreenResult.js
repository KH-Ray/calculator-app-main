export default function ScreenResult({ result, pastNum, operator }) {
  let historyNum;

  switch (operator) {
    case "plus":
      historyNum = `${pastNum} + `;
      break;

    case "minus":
      historyNum = `${pastNum} - `;
      break;

    case "divide":
      historyNum = `${pastNum} / `;
      break;

    case "multiply":
      historyNum = `${pastNum} x `;
      break;

    case "reset":
      historyNum = "";
      break;

    default:
      break;
  }

  return (
    <div className="screen-result">
      <span className="screen-result-past-number">{historyNum}</span>
      <span className="screen-result-number">
        {result === Infinity || +result > 999999999999
          ? "Error"
          : result.length === undefined
          ? String(+result.toFixed(10))
          : String(result)}
      </span>
    </div>
  );
}
