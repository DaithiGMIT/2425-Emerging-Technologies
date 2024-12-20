# Emerging Technologies Project

This repository contains my coursework for the **Emerging Technologies** module at [ATU](https://www.gmit.ie/). The project showcases my ability to research, implement, and demonstrate emerging computing technologies through a series of tasks and a practical implementation project.

---

## Overview

The purpose of this project is to:
1. Research and contextualize an emerging technology.
2. Implement a solution to a computing problem using new tools and techniques.
3. Demonstrate progress and outcomes in a well-structured GitHub repository.

---

## Repository Structure

- `trigrams.ipynb`: Contains the solutions for the four tasks related to trigram modeling and analysis.
- `trigrams.json`: The exported trigram model in JSON format.
- `eliza/`: Directory containing the ELIZA chatbot project.
  - `index.html`: Main chatbot page.
  - `style.css`: CSS for chatbot styling.
  - `eliza.js`: JavaScript logic for the chatbot.
- `words.txt`: A file used to validate generated text against English words.
- `README.md`: This file, providing an overview of the project.
- `.gitignore`: Ensures unnecessary files are excluded from the repository.

---

## Tasks

### Task 1: Third-order Letter Approximation Model
Using text from [Project Gutenberg](https://www.gutenberg.org/), I created a trigram model of the English language. The model captures sequences of three characters and their frequencies.

Example output:

```json
{"IT ": 2, "T I": 3, " IS": 2, "IS ": 1, ...}
```

### Task 2: Third-order Letter Approximation Generation
Using the trigram model, I generated a 10,000-character string starting with "TH". The model uses the last two characters to probabilistically determine the next character, reflecting natural English patterns.

### Task 3: Analyze the Model
The generated text was analyzed against `words.txt`. The analysis determined the percentage of generated words that are valid English words.

One version of Results:
- Total words: **1848**
- Valid English words: **687**
- Percentage Valid: **37.18%**.

The Basic Trigram model generated from only 5 books was able too suprisingly genreate a valid english word in almost a third of the time which really goes to show the generation power of a true LLM.

### Task 4: Export the Model as JSON
The trigram model was exported as a JSON file (`trigrams.json`) for reuse. This file can be found in the root directory.

---

## ELIZA Chatbot Project

The ELIZA chatbot was implemented as a simple, client-side web application using **HTML**, **CSS**, and **JavaScript**.

### Features:
- User input is dynamically processed, and responses are generated based on pre-defined patterns.
- Responses include dynamic placeholders to reflect parts of the user’s input.
- Chat history is displayed in a scrollable interface.

### Deployment:
The chatbot is hosted on **GitHub Pages**. [Live Demo Link](https://daithigmit.github.io/2425-Emerging-Technologies/eliza/)

---

## Key Learnings

1. Explored and implemented text generation using a trigram model.
2. Developed an appreciation for natural language processing techniques.
3. Built a functional chatbot interface using web development technologies.
4. Deployed a project to GitHub Pages.

---

## How to Run

### Trigram Tasks:
To run the `trigrams.ipynb` notebook:
1. Clone the repository:
   ```bash
   git clone https://github.com/DaithiGMIT/2425-Emerging-Technologies
   
   cd 2425-Emerging-Technologies
   
   2. Open `trigrams.ipynb` in Jupyter Notebook or any compatible environment.

### ELIZA Chatbot:
1. Clone the repository and navigate to the `eliza` directory.
2. Open `index.html` in any modern web browser to use the chatbot.

3. Alternatively, simply visit the [Live Demo Link](https://daithigmit.github.io/2425-Emerging-Technologies/eliza/)