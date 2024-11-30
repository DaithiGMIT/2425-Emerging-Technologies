# Emerging Technologies Project

This repository contains my coursework for the **Emerging Technologies** module at [ATU](https://www.gmit.ie/). The project aims to showcase my ability to research, implement, and demonstrate emerging computing technologies through a series of tasks and a small implementation project.

---

## Overview

The purpose of this project is to:
1. Research and contextualize an emerging technology.
2. Implement a solution to a computing problem using new tools and techniques.
3. Demonstrate progress and outcomes in a well-structured GitHub repository.

---

## Repository Structure

- `trigrams.ipynb`: Will contain the solutions for the four tasks.
- `trigrams.json`: Will contain the exported trigram model in JSON format.
- `eliza/`: Directory that will contain the ELIZA chatbot project.
  - `index.html`: Main chatbot page.
  - `style.css`: CSS for chatbot styling.
  - `eliza.js`: JavaScript logic for the chatbot.
- `words.txt`: A file used to validate generated text against English words.
- `README.md`: This file, providing an overview of the project.
- `.gitignore`: Ensures unnecessary files are excluded from the repository.

---

## Tasks

### Task 1: Third-order Letter Approximation Model
Using text from [Project Gutenberg](https://www.gutenberg.org/), I will create a trigram model of the English language.

Example output:
```json
{"IT ": 2, "T I": 3, " IS": 2, "IS ": 1, ...}
```

### Task 2: Third-order Letter Approximation Generation
Using the trigram model, I will generate a 10,000-character string. Starting with "TH".

### Task 3: Analyze the Model
I will generate text against `words.txt`, calculating the percentage of words in the text that matched valid English words.

### Task 4: Export the Model as JSON
The trigram model will be exported as a JSON file (`trigrams.json`) for reuse.

---

## ELIZA Chatbot Project

The ELIZA chatbot will be implemented as a simple, client-side web application.

### Deployment:
The chatbot will be hosted on GitHub Pages. [Link will be here when complete]

---

## Key Learnings

1. Learning Outcomes will be posted here as project progresses

## How to Run

Clone the repository:
   ```bash
   git clone https://github.com/DaithiGMIT/2425-Emerging-Technologies
   cd 2425-Emerging-Technologies

