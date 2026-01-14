function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Effect:", count);
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

/*
Effect: 0
runs only once due to Empty dependency array [] → effect runs only once
to make it log on every change - 
React.useEffect(() => {
  console.log("Effect:", count);
}, [count]);

*/
