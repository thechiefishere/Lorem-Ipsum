import { useState } from "react";

const Generator = ({ data }) => {
  const [toDisplay, setToDisplay] = useState("");
  const [num, setNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let numOfParagraphs = num;
    if (numOfParagraphs < 0) numOfParagraphs = 1;
    else if (numOfParagraphs > 8) numOfParagraphs = 8;

    const minData = data.filter((text, index) => {
      return index < numOfParagraphs;
    });

    let paragraphs = "";
    minData.forEach((phrase) => {
      paragraphs += phrase += "\n";
    });

    setToDisplay(paragraphs);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label for="num">Paragraphs:</label>
        <input
          type="number"
          id="num"
          name="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <div>{toDisplay}</div>
    </section>
  );
};

export default Generator;
