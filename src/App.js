import "./css/Main.css";
import "./css/Header.css";
import "./css/ScreenResult.css";
import "./css/Numpad.css";
import "./css/Queries.css";

import Header from "./components/Header";
import ScreenResult from "./components/ScreenResult";
import Numpad from "./components/Numpad";
import ButtonNumbers from "./components/ButtonNumbers";

import { useState } from "react";

export default function App() {
  const [selectedNum, setSelectedNum] = useState("");
  const [pastNum, setPastNum] = useState("");
  const [operator, setOperator] = useState("");
  const [theme, setTheme] = useState("");

  return (
    <main className="main">
      <Header />
      <ScreenResult
        result={selectedNum}
        pastNum={pastNum}
        operator={operator}
      />
      <Numpad>
        <ButtonNumbers
          selectedNum={selectedNum}
          pastNum={pastNum}
          operator={operator}
          handleSelectedNum={setSelectedNum}
          handlePastNum={setPastNum}
          handleOperator={setOperator}
        />
      </Numpad>
    </main>
  );
}
