import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
const URL =
  "https://api.encar.com/search/car/list/general?count=true&q=(And.(And.Year.range(202100..202299)._.Hidden.N._.SeatColor.%EA%B2%80%EC%A0%95%EC%83%89+%EA%B3%84%EC%97%B4._.Color.%EA%B2%80%EC%A0%95%EC%83%89._.Mileage.range(..40000)._.(C.CarType.Y._.(C.Manufacturer.%EA%B8%B0%EC%95%84._.(C.ModelGroup.%EB%AA%A8%ED%95%98%EB%B9%84._.(C.Model.%EB%AA%A8%ED%95%98%EB%B9%84+%EB%8D%94+%EB%A7%88%EC%8A%A4%ED%84%B0._.(C.BadgeGroup.%EB%94%94%EC%A0%A4+4WD._.Badge.%EB%94%94%EC%A0%A4+3_.0+4WD+6%EC%9D%B8%EC%8A%B9.))))))_.AdType.A.)&sr=%7CModifiedDate%7C0%7C8";
function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
        },
      })

      .then((data) => setData(data.data))
      .catch(() => setError("err"))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <div> loading</div>;
  if (error) return <div>error</div>;
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {data.SearchResults.map((item) => {
        return <div>{item.Id}</div>;
      })}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
