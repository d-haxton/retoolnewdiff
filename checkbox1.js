/* @type {string} */
const id = `checkbox1`;

/* @type {string} */
const type = `widget`;

/* @type {string} */
const subtype = `CheckboxWidget`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-09-05T20:00:05.732Z`;

/* @type {string} */
const updatedAt = `2020-09-05T20:00:05.732Z`;

/** @typedef {Object} Position2
 * @property {Number} col
 * @property {String} container
 * @property {Number} height
 * @property {Number} row
 * @property {String} subcontainer
 * @property {Number} tabNum
 * @property {Number} width
 */
class Position2 {
  container = ``;
  subcontainer = ``;
  row = 12;
  col = 4;
  height = 1;
  width = 2;
  tabNum = 0;
}

class Template {
  label = `Checkbox label`;
  value = false;
  disabled = ``;
  onCheckQuery = ``;
  onUncheckQuery = ``;
}
