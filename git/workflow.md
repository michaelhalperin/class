# Exercises — Git Workflow

---

## Exercise 1 — Branch Structure in a Project

### Goal
Understand the idea of main, develop, and feature branches, and why a shared structure is needed.

### Scenario
Your team is starting a new project and wants to decide in advance what branch structure the project will use: only `main` with feature branches, or both `main` and `develop` between them.

### Task
1. In your own words, explain the difference between `main` and `develop`, according to the course material.
2. From which branch (according to the course material) is a feature branch usually created?
3. Given that your project is a small learning project with two people, should you use the full structure (main + develop), or is a single `main` with feature branches enough? Justify your answer according to the course material.

### Comprehension Questions
- What is the unique role of the `develop` branch that does not exist in `main`?
- What is the main problem that a Git workflow solves, according to the course material?

---
---

## Exercise 2 — git stash: Temporarily Saving Work

### Scenario
You are in the middle of developing a feature on a branch named `feature/checkout`. You have made changes in several files but have **not** committed yet. Suddenly you are asked to switch to fix an urgent bug on `main`, but you do not want to lose your partial work, and you also do not want to commit incomplete work.

### Task
1. Which command would you run to "set aside" your unfinished changes without committing?
2. After you fixed the bug on `main` and returned to `feature/checkout`, which command would you run to restore the saved changes back into your working tree?
3. Explain: what is the difference between `git stash` and making a regular commit on unfinished work?

### Thought Question
What would happen if you tried to switch branches (`git switch main`) **without** running `git stash` first, when you have uncommitted changes that conflict with the code on `main`?

---
---

## Exercise 3 — git revert vs. git reset

### Scenario
You made a commit with the message "Update payment logic" and pushed it to the remote. A day later you discovered that this commit breaks important functionality, and you want to undo it.

### Task
1. Since this commit **has already been pushed to the remote**, which command (according to the course material) is recommended to undo it, and what is the reasoning behind that choice?
2. Explain: what is the essential difference between `git revert` and `git reset` in terms of their effect on history?
3. Suppose, by contrast, that you made a wrong commit **but never pushed it**—it is still only local. Which of the two commands (revert / reset) is more appropriate in that case, according to the course material?

### Comprehension Question
According to the course material, why is it "especially important" to use `git revert` (and not `reset`) when a commit has already been pushed to the remote?

---
---

## Exercise 4 — Conventional Commits

### Scenario
You are writing commit messages throughout a workday, and you performed the following actions: (a) added a new "SMS notifications" feature, (b) fixed a bug that caused a crash on the login screen, (c) updated a package (dependency) version in the project—an action that is neither a feature nor a bug fix.

### Task
1. For each of the three actions (a, b, c), write an appropriate commit message according to the Conventional Commits standard, with the correct prefix (`feat`, `fix`, or `chore`).
2. In your own words: why does a consistent standard like Conventional Commits help the team, and not only the individual developer who wrote the commit?
3. Which prefix (among the three mentioned in the course material) would you use if you only changed comments in the code, without changing behavior at all? Justify your choice.

### Thought Question
Imagine you need to search the commit history for all bug fixes made in the last month. How does the Conventional Commits standard make that task easier for you?

---
---

## Exercise 5 — Summary Exercise: A Full Workday with Git Workflow

### Scenario
This is a regular workday on a team that uses `main` and `develop`, with separate feature branches for each piece of development, and the Conventional Commits standard.

### Task
Describe, in order, all the actions (commands and explanations) for each of the following steps:

1. **Starting a feature** — You received a task to develop a "export reports to PDF" feature. From which branch will you create the new feature branch (`feature/pdf-export`), according to the accepted structure in the course material?
2. **Interruption mid-work** — In the middle of development, before you committed, you are asked to check something urgent on `develop`. Save your partial work aside.
3. **Returning to work** — You returned from checking on `develop` and want to continue from where you left off. Restore the saved work.
4. **Saving a checkpoint** — You finished the feature. Write an appropriate commit message according to Conventional Commits.
5. **Mistake and undo** — After some time, you notice that the latest commit (which has already been pushed to the remote) introduced an error. Describe the correct command to undo it without damaging history.

### Summary Questions
- What is the logical order of branches in this process: where does `feature/pdf-export` "meet" `develop`, and where does `develop` "meet" `main`?
- What is the difference between using `git stash` and simply making another commit ("WIP" / work in progress) as a way to save unfinished work?
- According to the course material, when is a full workflow with `develop` considered "too complex," and what is recommended in that case?

### Bonus
Briefly explain how the three concepts—`git stash`, `git revert`, and Conventional Commits—together contribute to consistency and clarity in the project's history, even in complex team work with many developers.
