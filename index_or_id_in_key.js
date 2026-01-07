✅ What is wrong with using index as key?

React uses key to identify items across renders.

When you use:

key={index}


and the list changes (insert, delete, reorder):

Indexes shift

React thinks items are the same when they are not

This causes:

❌ Wrong DOM reuse

❌ State moving to the wrong item

❌ Input values jumping

❌ Broken animations

Example problem

Removing the first item:

Before: A(0) B(1) C(2)
After:  B(0) C(1)


React thinks:

B was A

C was B

🧠 Key interview phrase (use this)

“Index keys break React’s reconciliation when list order changes.”

✅ When is it acceptable to use index as key?

✔ ONLY when all are true:

List is static

Items are never reordered

Items are never inserted or removed

No local state inside list items

Example:

["Mon", "Tue", "Wed"].map((day, i) => (
  <span key={i}>{day}</span>
));

❌ When NOT to use index

Forms

Inputs

Animations

Sortable / filterable lists

Any list with stateful children

🎯 Best practice

Always prefer:

key={item.id} // stable, unique
