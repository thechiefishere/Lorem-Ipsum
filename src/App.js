import { useState } from "react";
import Generator from "./components/Generator";
import data from "./data";

function App() {
  const [text, setData] = useState(data);

  return (
    <main>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <Generator data={text} />
    </main>
  );
}

export default App;
