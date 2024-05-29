import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<{
    loading: boolean;
    data: null | string;
    error: null | Error;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://127.0.01:3000/api/anything");
        const object = await response.json();
        setData({
          loading: false,
          data: object.message,
          error: null,
        });
      } catch (e) {
        setData({
          loading: false,
          data: null,
          error: e instanceof Error ? e : new Error("unknown error"),
        });
      }
    })();
  }, []);

  return <h1>{data.loading ? "loading..." : data.data}</h1>;
}

export default App;
