// fix it using useMemo
function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveValue = heavyCalculation(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <p>Result: {expensiveValue}</p>
    </>
  );
}

function heavyCalculation(num) {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += num;
  }
  return total;
}

// ANSWER

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveValue = React.useMemo(() => {
    return heavyCalculation(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <p>Result: {expensiveValue}</p>
    </>
  );
}
/*
one liners for interview - 
“useMemo memoizes values, not functions.”
“It’s a performance optimization, not a semantic guarantee.”
“Premature memoization is worse than recomputation.”
*/

