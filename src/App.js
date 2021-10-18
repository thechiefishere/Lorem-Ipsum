import { useState } from "react";
import Generator from "./components/Generator";
import data from "./data";

function App() {
  const [text, setData] = useState(data);

  return (
    <main>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <Generator data={text} />
    </main>
  );
}

export default App;
