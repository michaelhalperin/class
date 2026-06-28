# Exercises — Merge Conflicts & Pull Requests

---

## Exercise 1 — What Is a Merge Conflict, Really?

### Goal
Understand when and why a conflict occurs, and when a merge succeeds automatically.

### Scenario
Two developers, Dana and Yossi, are working on the same file `config.js`. Dana is working on a branch named `feature/dark-mode` and changed line 10 in the file. Yossi is working in parallel on a branch named `feature/api-url` and changed line 35 in the same file.

### Task
1. If Dana and Yossi try to `git merge` both of their branches into `main`, will a merge conflict occur? Explain your reasoning.
2. Now suppose they both changed **line 10** in `config.js`, each to a different value. What will happen when they try to merge?
3. In your own words: what is the difference between a situation where Git "can decide on its own" and one where it "cannot decide"?

### Comprehension Questions
- Is a merge conflict always the result of a mistake or a problem in the code?
- What determines whether a conflict will occur: the change to the file itself, or specifically the line that was changed?

---
---

## Exercise 2 — Conflict Markers and Identifying the Problem

### Scenario
You tried to merge a branch and received a message that Git could not combine the file `settings.py` automatically. When you opened the file, you found unexpected content in the middle of the code.

### Task
1. Describe the three markers (conflict markers) that appear in a file when there is a merge conflict, and the role of each one.
2. Given the following code snippet (for example, after an attempted merge):
```
<<<<<<< HEAD
TIMEOUT = 30
=======
TIMEOUT = 60
>>>>>>> feature/api-url
```
Explain: which value came from the current branch (the one you are on), and which came from the branch you are trying to merge?
3. What is the purpose of **Resolve Conflict**, and what do you actually need to do to the file in order to "finish" the conflict?

### Thought Question
What would happen if you left the conflict markers in the file (such as `<<<<<<<` and `=======`) and committed without removing them at all?

---
---

## Exercise 3 — Pull Request: Structure and Process

### Scenario
You finished developing a feature on a branch named `feature/search-bar`, and you want to integrate it into the project's `main` in an organized way—not by running `git merge` directly from the terminal.

### Task
1. What is a Pull Request (PR), and what is the difference between integrating changes via a PR versus a direct `git merge` with no review?
2. In the context of a Pull Request, what is the difference between **Base Branch** and **Compare Branch**? State what each would be in the scenario described.
3. What is Code Review, and who usually performs it?
4. Before you can click the Merge button, which action (according to the course material) must be completed first?

### Comprehension Question
According to the course material, what is the main advantage that a Pull Request provides that does not exist with a direct `git merge` in the terminal?

---
---

## Exercise 4 — Resolving a Conflict in Practice

### Scenario
You opened a Pull Request that merges `feature/checkout-flow` into `main`, but GitHub shows a message that there is a conflict in the file `cart.js`, and that it must be resolved before you can merge.

### Task
1. Describe, step by step, the process for resolving the conflict: what to do with the file, and how to "mark" to Git that the conflict is resolved.
2. Suppose that after you resolved the conflict in the file and saved it, which Git action is still missing in order to **formally complete** the merge process?
3. Explain: why can resolving a conflict incorrectly (such as accidentally choosing the wrong version) cause "lost changes," according to the course material?

### Thought Question
After you successfully resolved a conflict and clicked the Merge button on the PR, what do you expect to see in the commit history of `main`?

---
---

## Exercise 5 — Summary Exercise: Full Workflow with PR and Conflict

### Scenario
You are working on a team project. You developed a new feature on a branch named `feature/user-avatar`, and in the meantime another team member changed the same area of code on `main`.

### Task
Describe the entire process, step by step:

1. **Opening a PR** — You finished developing `feature/user-avatar`. Describe what you do on GitHub to open a Pull Request, and what should be included in its description.
2. **Requesting a review** — Who do you ask to perform the review, and why is this step important before merging?
3. **Discovering a conflict** — GitHub reports that there is a conflict. Describe the three stages for resolving it (identifying the markers, choosing/combining correctly, completing the merge).
4. **Getting approval and merging** — After a teammate approves the code, which action do you need to take at the end so the changes officially enter `main`?
5. **Cleanup** — After the PR is merged successfully, what should you do with the `feature/user-avatar` branch?

### Summary Questions
- What is the relationship between a merge conflict and a Pull Request—can a conflict occur without a PR, and also without a PR at all?
- According to the course material, what is the main downside of the Pull Request process, and when might it be "unnecessary overhead"?
- Why are the two concepts (merge conflict and Pull Request) considered together the "foundation for safe, high-quality team work"?

### Bonus
Imagine a scenario where two developers changed **completely different functions** in a file (not the same lines at all), but opened two separate PRs to the same `main` in parallel. Is it likely that a conflict will occur? Justify your answer using the precise definition of when a merge conflict occurs.
