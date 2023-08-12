import { useState } from "react";
import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SwitchLocale from "./components/SwitchLocale/SwitchLocale";
import "./App.css";

function App() {
  useLingui();

  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt={t`Vite 徽标`} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt={t`React 徽标`} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <SwitchLocale />
      <div className="card">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t`请输入`}
        />
        <p>
          <Trans>输入的值为 {value || "-"}</Trans>
        </p>
        <p>
          <Trans>
            编辑 <code>src/App.tsx</code> 并保存到测试 HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        <Trans>点击 Vite 和 React 徽标以了解更多信息</Trans>
      </p>
    </>
  );
}

export default App;
