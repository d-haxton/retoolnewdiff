/* @type {string} */
const id = `instrumentation7`;

/* @type {string} */
const type = `instrumentation`;

/* @type {string} */
const subtype = `Instrumentation`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-09-02T00:00:24.660Z`;

/* @type {string} */
const updatedAt = `2020-09-02T00:00:24.660Z`;

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
