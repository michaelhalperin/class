# Exercises — Git Branches

---

## Exercise 1 — What Is a Branch, Really?

### Goal
Understand the concept of a Branch and why it is needed.

### Scenario
You are working on a project where the main branch is called `main`, and it contains stable code that already runs in production. You were assigned to develop a new feature — a user profile screen — that will take several days, and during that time the code may be broken or half-finished.

### Tasks
1. In your own words, explain what a Branch is, and why you should not develop the feature directly on `main`.
2. What is the difference between `main` (or `master`) and a Feature Branch?
3. According to the course material: when you create a new Branch, does Git "duplicate" all project files into a separate copy? Justify your answer.

### Comprehension Questions
- If you create a new Branch named `feature/profile-page` from `main`, and work on it — will the changes you make affect the code on `main`?
- What does it mean that a Branch is a "lightweight pointer" to commit history?

---
---

## Exercise 2 — Creating a Branch and Switching Between It and main

### Scenario
You are currently on `main`, and you need to start working on a bug fix named `login-error`.

### Tasks
1. Write a single command that creates a new Branch named `fix/login-error` **and** switches to it in one step.
2. Suppose the Branch `fix/login-error` already exists (no need to create it again), and you are currently on `main` — which command (the modern one, according to the course material) would you use to switch to it?
3. After switching to `fix/login-error` and making changes and a commit there, you want to go back to `main` to check something. Which command would you run?

### Thought Question
What is the difference between `git checkout -b` and `git switch -c`? Do they perform exactly the same action?

---
---

## Exercise 3 — HEAD and Where It Points

### Scenario
You have a Repository with two Branches: `main` and `feature/cart`. You are currently on `feature/cart`, and you just made a new commit named "Add quantity selector".

### Tasks
1. In your own words, explain what HEAD is, and where it points right now (after the commit described above).
2. If you switch back to `main` using `git switch main`, what will happen to HEAD?
3. True or false: HEAD always points to `main`, no matter which Branch you are on. Explain.

### Comprehension Question
Imagine that `main` and `feature/cart` diverged a week ago, and since then each has received its own separate commits. What is this situation called according to the course material, and why can it cause problems later?

---
---

## Exercise 4 — Merging Branches

### Scenario
You finished developing a feature on the Branch `feature/signup-form`, tested that it works as expected, and now you want to integrate it back into `main`.

### Tasks
1. What is the first command you need to run **before** `git merge` — that is, which Branch should you be on when "merging a feature into it"?
2. Write the full sequence of commands: switch to `main`, then merge `feature/signup-form` into it.
3. After a successful merge, the Branch `feature/signup-form` still exists but is no longer needed. Which command (according to the course material) is used to delete it?
4. Explain why it is common practice to delete a Feature Branch after a successful merge, rather than leaving it open forever.

### Thought Question
What would happen if you tried to merge `feature/signup-form` into `main`, but you were currently standing on `feature/signup-form` itself and not on `main`? In which direction would the merge happen?

---
---

## Exercise 5 — Capstone Exercise: Full Team Workflow with Branches

### Scenario
You and a coworker (another developer) are working on the same project. The main branch is `main`. You were assigned to develop a "user notifications" feature (`notifications`), and at the same time your partner is working on a separate bug fix on their own Branch — without your work affecting each other.

### Tasks
Write, in order, all the commands (and required explanations) for each of the following steps:

1. **Getting started** — You are on `main`. Create a new Branch named `feature/notifications` and switch to it in one step.
2. **Working on the feature** — You made code changes and added a commit with the message "Add notification bell icon".
3. **Checking branch status** — Before continuing, you want to see which Branches currently exist in the project (to verify the new Branch was created successfully). Which command do you use?
4. **Temporary return to main** — The team lead asks you to check something urgent on `main`. Switch to it without deleting the work you did on `feature/notifications`.
5. **Return to work and merge** — You went back to `feature/notifications`, finished development, and passed testing. Write the full sequence: switch to `main`, merge the feature, and delete the Branch that is no longer needed.

### Summary Questions
- Why did your work on `feature/notifications` not interfere with your partner's work on their Branch, even though you both worked on the same Repository in parallel?
- What would have been the risk if you both worked directly on `main` without separate Branches?
- According to the course material, what is one case where creating a separate Branch might be "unnecessary overhead"?

### Bonus
The course material mentions **Divergent History** — a situation where `main` and `feature/notifications` evolved in different directions since they split (for example, new commits were also made on `main` while you worked on the Feature Branch). Explain: why can such a situation make performing `git merge` "smoothly" more difficult, and which keyword (from the course material) describes this phenomenon?
