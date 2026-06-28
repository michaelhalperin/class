# Exercises — Git Basics

---

## Exercise 1 — Setting Up Your First Repository

### Goal
Understand what a Repository is and what the `git init` command does.

### Scenario
You have a project folder named `my-app` with the files `index.js` and `utils.js`. So far, this folder is a regular folder on your computer, and Git is not tracking it.

### Tasks
1. In your own words, explain the difference between a regular folder and a Repository.
2. Write the command you need to run to start Git tracking in the `my-app` folder.
3. After running the command, which new (hidden) folder is created in the project, and why is it important?

### Comprehension Questions
- Does `git init` save your files somewhere remote (like GitHub)?
- Can you run `git init` in a folder that already has files, or only in an empty folder?

---
---

## Exercise 2 — From Three Areas to a Checkpoint

### Goal
Understand Git's three "areas": Working Directory, Staging Area, and Commit History.

### Scenario
You created a new file named `about.js` inside the project folder. The file exists on your computer, but nothing has happened with it from Git's perspective yet.

### Tasks
1. Draw (or describe in words) a diagram of the three areas the `about.js` file passes through from the moment it is created until it is saved in history.
2. Write the two commands (in the correct order) you need to run to move `about.js` from the Working Directory to a permanent checkpoint in history. Include an appropriate commit message.
3. Explain: What is the difference between a file in the Staging Area and a file in the Working Directory only?

### Thought Question
What would happen if Git had no Staging Area, and `git commit` saved all changed files in the Working Directory directly? What advantages would you lose?

---
---

## Exercise 3 — Checking Status and History

### Scenario
You have been working on the project for several days and made several commits. Right now you have both files that have changed but are not saved yet, and new files that are not in the Staging Area yet.

### Tasks
1. Which command would you run to quickly see which files have changed, and which stage they are in (Working Directory / Staging Area)?
2. Which command would you run to see the full commit history of the project?
3. Given two commits with the commit hashes `a1b2c3d` and `e4f5g6h`, which command would you use to see exactly which lines of code changed between those two commits?
4. What is the essential difference between what `git status` shows and what `git log` shows?

### Comprehension Question
Do `git diff` and `git log` show the same kind of information, or is there an essential difference between the two commands?

---
---

## Exercise 4 — The .gitignore File

### Scenario
Your project has the following folders and files:
```
my-app/
├── index.js
├── package.json
├── node_modules/      (large folder created automatically by npm)
├── .env               (file with passwords and personal settings)
└── README.md
```

### Tasks
1. Which files/folders from the list above should **not** be tracked by Git? Justify each one separately.
2. Write proposed content for a `.gitignore` file that ignores the files/folders you listed in the previous item.
3. What would happen if you accidentally committed the `.env` file and pushed it to a public GitHub repository?

### Thought Question
If a file is already in commit history (meaning it already went through `git add` + `git commit` in the past), does adding it to `.gitignore` now remove it from existing history? Explain.

---
---

## Exercise 5 — Capstone Exercise: A Full Workday with Git

### Scenario
This is your first workday on a new software project. You need to carry out the entire process from start to finish, step by step.

### Tasks
Write, in order, all the commands (and required explanations) for each of the following steps:

1. **Getting started** — You have a folder named `task-manager` with a single file `app.js` inside it. Start Git tracking on the folder.
2. **Initial status check** — Check the current state of the project from Git's perspective (which files exist, what their status is).
3. **Creating .gitignore** — Assume that during development a folder named `node_modules` (dependencies installed by npm) and a file `secrets.json` with API keys will be created. Create an appropriate `.gitignore` file *before* making the first commit.
4. **Saving the first checkpoint** — Move `app.js` to the Staging Area and make a commit with an appropriate message.
5. **Continued work** — You added a new function to `app.js`. Check what changed (using the appropriate command to show exact changes), then save a second commit with a relevant message.
6. **Reviewing history** — At the end of the day, display the full commit history you created.

### Summary Questions
- What is the logical (and necessary) order of operations: `git add`, `git commit`, `git init`?
- What role did the Staging Area play throughout this process?
- What is the "remote" mentioned in the general definition of Git, and did we use it in this exercise?

### Bonus
For every commit Git saves, it assigns a unique **Commit Hash**. Explain: What is the purpose of this hash, and why can't you simply use a serial number (1, 2, 3...) instead?
