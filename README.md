# quizmaster

Quizmaster is a general javascript 10 question quiz.

## Purpose

QuizMaster is an interactive front-end web app where users enter a username and answer 10 multiple-choice questions one at a time. It gives instant feedback, tracks the score, and shows a final result with a restart option. Responsive, accessible, and built with HTML, CSS, and JavaScript.

## Value to Users

- Bullet points on what users get out of it.

## Features

### Username Entry

![Screenshot](assets/images/screenshot-username.png)
Description + value.

### Quiz Screen

![Screenshot](assets/images/screenshot-quiz.png)
Description + value.

### Results Screen

![Screenshot](assets/images/screenshot-results.png)
Description + value.

## Found bugs

1. browser extension causing script-src to be blocked and for console.log to not work
2. Console output hidden by active DevTools filter (not a code issue)

### Description:

While verifying the server connection via console.log("Connected!"), the expected log message did not appear in the DevTools Console. The code executed correctly — the message was being filtered out by an active text filter in the Console's filter input box. Clearing the filter (Backspace) immediately revealed the Connected! log.

### Steps to reproduce:

Open the page with DevTools Console visible.

Type any text into the Console filter input (e.g. accidentally click and type).

Reload the page so console.log("Connected!") fires.

Observe: Connected! does not appear.

Clear the filter input.

Observe: Connected! appears as expected.

### Root cause:

DevTools Console filter was active and hiding non-matching log entries. Not an application or CSP bug.

### Resolution:

Clear the Console filter. No code change required.

Severity: None — developer tooling / investigation artifact.

## Deployment

Deployed via GitHub Pages.
Steps: Settings → Pages → Source: main branch → Save.

## Attributions

- [Code source / tutorial] — link
- Icons from [https://favicon.io/emoji-favicons/joystick
  goo]
- Fonts from [https://fonts.google.com/]

## Technologies Used

- HTML5, CSS3, JavaScript (ES6), deepseek ai
