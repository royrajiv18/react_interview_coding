function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <h1>{count}</h1>;
}


/*
What will happen?

👉 The component will go into an infinite render loop and eventually crash with:

“Too many re-renders” / “Maximum update depth exceeded”

2️⃣ Why does this happen?

useEffect runs after every render when count changes

Inside the effect, you call:

setCount(count + 1);


setCount updates count → causes a re-render

Re-render → count changes → effect runs again
🔁 Endless loop

So the cycle is:

render → useEffect → setState → render → ...

3️⃣ How to fix it without removing count from dependencies ✅
✔️ Correct Fix (Senior-level)

Use a conditional update:

React.useEffect(() => {
  if (count === 0) {
    setCount(1);
  }
}, [count]);


This ensures the state update happens only once.

💡 Alternative Correct Fix (Functional Update Pattern)
React.useEffect(() => {
  setCount(prev => prev + 1);
}, []);


⚠️ This works only if the effect should run once, so dependency array must be empty.

“Updating a state inside an effect that depends on the same state causes an infinite render loop unless guarded.”
*/
