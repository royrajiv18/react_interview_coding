import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    setCount(count + 1);
    console.log("Effect:", count);
  }, []);

  console.log("Render:", count);

  return <div>{count}</div>;
}

export default Counter;

/*
✅ Console output (order matters)
Render: 0
Effect: 0
Render: 1

✅ Final rendered value
1

✅ Why this happens (deep dive)
1️⃣ Initial render

useState(0) → count = 0

Component renders

console.log("Render:", 0);


➡️ Output: Render: 0

2️⃣ useEffect runs (after first paint)

Dependency array is [], so it runs once.

Inside effect:

setCount(count + 1); // setCount(1)
setCount(count + 1); // setCount(1) again
console.log("Effect:", count); // count is still 0

🔑 Key points:

React batches state updates inside effects

count is from the closure of the first render

Both setCount(count + 1) resolve to setCount(1)

Second update overwrites, not increments

➡️ Output: Effect: 0

3️⃣ Re-render after effect

State goes from 0 → 1

Component re-renders

console.log("Render:", 1);


➡️ Output: Render: 1

❌ Common misconception

Many expect count to become 2.

Why it doesn’t:

setState is async

State updates are queued

Using the same stale value twice

✅ Correct / Production-grade fix
✔ Use functional updates
useEffect(() => {
  setCount(c => c + 1);
  setCount(c => c + 1);
}, []);

✅ Result

Final value: 2

Each update receives the latest state

🧠 Interview takeaway (important)

Whenever the new state depends on the previous state, always use functional updates.
*/
