# Node.js Greetings Command-line Tool

This project implements a Node.js command-line tool that allows users to generate personalized greeting messages based on specified arguments.

## Task Description

Create a Node.js Greetings command-line tool that accepts various arguments to customize greetings.

- Accept a `--name` or `-n` argument for the name.
- Accept a `--level` or `-lvl` argument to specify the verbosity level (1 or 2).
- Accept an optional `--greeting` or `-g` argument for a custom greeting message.
- Accept a `--language` or `-l` argument to specify the language of the greeting (default language is English).

Additional settings:

- If a custom greeting isn’t provided, use a default greeting value (e.g., 'Hello').
- If a custom name isn’t provided, use a default name value (e.g., 'guest').

Level stands for log level. For example,

- if it was `--level 1`, the log can be as simple as 'Hello guest'.
- If set as `--level 2`, the log can contain more information like 'Hello guest (Date and Time: 2024-01-01 12:34:56)'.

## Installation

- Clone the repository
- Navigate into the project directory
- Install dependencies <pre>
  `npm install`

## Usage

- To generate a greeting message, run the following command: <pre>
  `node index.js --name Bob --greeting "Hey, welcome to Node.js school" --level 1`

## Getting Help

- For additional options and details, use the --help flag: <pre>
  `node index.js --help`
