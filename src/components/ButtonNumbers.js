import Button from "./Button";

export default function ButtonNumbers({
  selectedNum,
  pastNum,
  operator,
  handleSelectedNum,
  handlePastNum,
  handleOperator,
}) {
  function addNumToScreen(e) {
    if (
      selectedNum.length >= 10 ||
      (e.target.value === "0" && selectedNum.length === 0)
    )
      return;
    handleSelectedNum((num) => num + e.target.value);
  }

  function addCommaToScreen() {
    if (
      selectedNum === "" ||
      selectedNum.length >= 10 ||
      +selectedNum > 999999999999 ||
      selectedNum === Infinity
    )
      return;
    handleSelectedNum((num) => num + ".");
  }

  function resetScreen() {
    handleSelectedNum("");
    handlePastNum("");
    handleOperator("reset");
  }

  function deleteNumInScreen() {
    if (+selectedNum > 999999999999 || selectedNum === Infinity) return;
    handleSelectedNum((num) => String(num).slice(0, -1));
    handlePastNum(String(selectedNum).slice(0, -1));
  }

  function addOperators(e) {
    if (
      selectedNum === "" ||
      +selectedNum > 999999999999 ||
      selectedNum === Infinity
    )
      return;
    handleOperator(e.target.value);

    if (pastNum === "") handlePastNum(Number(selectedNum));
    else
      switch (operator) {
        case "plus":
          handlePastNum((num) => Number(num) + Number(selectedNum));
          break;

        case "minus":
          handlePastNum((num) => Number(num) - Number(selectedNum));
          break;

        case "divide":
          handlePastNum((num) => Number(num) / Number(selectedNum));
          break;

        case "multiply":
          handlePastNum((num) => Number(num) * Number(selectedNum));
          break;

        default:
          break;
      }

    handleSelectedNum("");
  }

  function equalsOperator(e) {
    switch (operator) {
      case "plus":
        handleSelectedNum((num) => Number(pastNum) + Number(num));
        handlePastNum((num) => Number(num) + Number(selectedNum));
        break;

      case "minus":
        handleSelectedNum((num) => Number(pastNum) - Number(num));
        handlePastNum((num) => Number(num) - Number(selectedNum));
        break;

      case "divide":
        handleSelectedNum((num) => Number(pastNum) / Number(num));
        handlePastNum((num) => Number(num) / Number(selectedNum));
        break;

      case "multiply":
        handleSelectedNum((num) => Number(pastNum) * Number(num));
        handlePastNum((num) => Number(num) * Number(selectedNum));
        break;

      default:
        break;
    }

    handleOperator("equals");
  }

  return (
    <div className="numpad">
      <Button handleClick={addNumToScreen} className="btn-main" value={7}>
        7
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={8}>
        8
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={9}>
        9
      </Button>
      <Button
        handleClick={deleteNumInScreen}
        className="btn-secondary"
        value="del"
      >
        DEL
      </Button>

      <Button handleClick={addNumToScreen} className="btn-main" value={4}>
        4
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={5}>
        5
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={6}>
        6
      </Button>
      <Button handleClick={addOperators} className="btn-main" value="plus">
        +
      </Button>

      <Button handleClick={addNumToScreen} className="btn-main" value={1}>
        1
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={2}>
        2
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={3}>
        3
      </Button>
      <Button handleClick={addOperators} className="btn-main" value="minus">
        -
      </Button>

      <Button handleClick={addCommaToScreen} className="btn-main" value="comma">
        .
      </Button>
      <Button handleClick={addNumToScreen} className="btn-main" value={0}>
        0
      </Button>
      <Button handleClick={addOperators} className="btn-main" value="divide">
        /
      </Button>
      <Button handleClick={addOperators} className="btn-main" value="multiply">
        x
      </Button>

      <Button
        handleClick={resetScreen}
        className="btn-secondary btn-reset"
        value="reset"
      >
        RESET
      </Button>
      <Button
        handleClick={equalsOperator}
        className="btn-tertiary btn-equals"
        value="equals"
      >
        =
      </Button>
    </div>
  );
}
