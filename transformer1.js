/* @type {string} */
const id = `transformer1`;

/* @type {string} */
const type = `function`;

/* @type {string} */
const subtype = `Function`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-09-01T22:44:37.745Z`;

/* @type {string} */
const updatedAt = `2020-09-01T22:44:37.745Z`;

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
