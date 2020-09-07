/* @type {string} */
const id = `transformer2`;

/* @type {string} */
const type = `function`;

/* @type {string} */
const subtype = `Function`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-09-01T22:45:28.555Z`;

/* @type {string} */
const updatedAt = `2020-09-01T22:45:28.555Z`;

class Template {
  funcBody() {
    // Tip: Make sure to separate your dependencies into a variable.

    // Correct
    // const data = {{query1.data}}
    // data.map(...)

    // Incorrect
    // {{query1.data}}.map(...)

    return 5;
  }
  value = ``;
}
