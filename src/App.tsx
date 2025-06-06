import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.m-park.co.kr/home/api/v1/wb/searchmycar/carlistinfo/get?maker=A2&model=B64&modelDetail=C3513

`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div
              style={{
                border: "1px solid red",
                padding: "10px",
                margin: "10px",
              }}
              key={item.carNo}
            >
              {" "}
              {item.carNo} {item.carName} <div> {item.demoNo} demo nomver</div>
            </div>
          );
        })}
    </>
  );
}

export default App;
