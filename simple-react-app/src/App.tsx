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
        const response = await fetch(`${import.meta.env.BASE_URL}api/anything`);
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
