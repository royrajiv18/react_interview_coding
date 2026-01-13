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
