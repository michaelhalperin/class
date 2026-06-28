# Exercises — GitHub Remote

---

## Exercise 1 — What Is a Remote, Really?

### Goal
Understand the difference between a local Repository and a remote Repository, and why you need a connection between them.

### Scenario
You have a local Repository that works great on your computer, with a full commit history. So far, all of this work exists only on this computer.

### Tasks
1. In your own words, explain what a Remote is, and what the difference is between it and the local Repository on your computer.
2. What is the conventional, widely used name for a project's primary Remote, and why is having such a convention important?
3. Explain: Why can a project still be useful and effective without a Remote at all (for example, in a small, temporary personal exercise)?

### Comprehension Questions
- Does Git itself (the local tool) automatically "know" about GitHub's existence, or do you need to connect them explicitly?
- What is the main problem that a Remote solves, according to the course material?

---
---

## Exercise 2 — Connecting an Existing Local Repository to GitHub

### Scenario
You developed a project over the course of a week, with several commits saved locally. Now you want to upload it to GitHub for the first time. You created an empty Repository named `my-project` in your GitHub account and received the appropriate URL for it.

### Tasks
1. Write the command that connects your local Repository to the empty Repository on GitHub, under the conventional name.
2. Write the command that sends all existing history (all commits) from your computer to GitHub.
3. Explain: What would happen if you tried to run the second command (item 2) **before** running the first command (item 1)?

### Thought Question
What is the difference between `git remote add origin <url>` and `git push`? Which one "connects" and which one "sends"?

---
---

## Exercise 3 — Joining an Existing Project

### Scenario
You were accepted to work on a team that already manages an existing project on GitHub. The project already exists there with a long history of work, but you don't have any copy of it on your computer yet.

### Tasks
1. Which command would you run to get a full copy of the project (including all history) onto your computer, directly from GitHub?
2. After that command, the team continues working and pushing new changes to GitHub all the time. Which command would you run every morning before starting work to get those new changes onto your computer?
3. Explain the difference between the command from item 1 and the command from item 2 — when do you use each one?

### Comprehension Question
According to the course material, what can happen if you don't sync your work frequently using the appropriate command for pulling changes?

---
---

## Exercise 4 — Methods for Connecting to GitHub

### Scenario
You want to connect to GitHub from your computer, but you're not sure which methods exist and how they work.

### Tasks
1. What are the two main methods for connecting to GitHub, according to the course material?
2. What is the advantage of SSH Keys over entering a password every time?
3. What is a Personal Access Token, and which connection method (of the two you listed in item 1) uses it?

### Thought Question
Imagine you work on three different computers (personal, work, and laptop). What does that mean for setting up SSH Keys on each of them?

---
---

## Exercise 5 — Capstone Exercise: A Full Workday with a Remote

### Scenario
This is your first day working on a new shared project. You need to carry out the entire process, from setting up the connection to GitHub through day-to-day work with the team.

### Tasks
Write, in order, all the commands (and required explanations) for each of the following steps:

1. **Starting from an existing remote Repository** — Your team already created a Repository named `team-app` on GitHub. Get it onto your computer.
2. **Checking the Remote connection** — After getting the project, you want to verify that a proper Remote connection was configured (you don't need to know the exact command, but describe in words what you would want to check).
3. **Daily work — getting updates** — Every morning, before starting work, what command would you run to make sure you have the most up-to-date version of the project?
4. **Daily work — sending changes** — After making changes and a local commit, which command would you run to send your work back to GitHub so the whole team can see it?
5. **An additional personal project** — Separately, you also have a new personal project in `my-notes` that has not been uploaded to GitHub at all yet. Describe the two steps required to connect and upload it for the first time.

### Summary Questions
- What is the essential difference between `git clone` and `git remote add origin` + `git push`? In which different situations do you use each?
- What is "Upstream", and why is it important when working with `git push` and `git pull`?
- According to the course material, in which cases is it worth connecting a Remote at the very start of a project, even if you're working on it alone?

### Bonus
Explain briefly: Why is GitHub (and similar services) considered a good **backup** tool for a project, and not just a collaboration tool between developers?
