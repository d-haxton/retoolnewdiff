/* @type {string} */
const id = `text1`;

/* @type {string} */
const type = `widget`;

/* @type {string} */
const subtype = `TextWidget`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-07-20T16:39:38.999Z`;

/* @type {string} */
const updatedAt = `2020-08-26T05:26:53.872Z`;

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
  row = 0;
  col = 0;
  height = 1;
  width = 3;
  tabNum = 0;
}

class Template {
  horizontalAlign = `left`;
  truncateOverflow = false;
  verticalAlign = `center`;
  scrollOverflow = false;
  tooltipText = ``;
  value = `### Default column to sort by setting used

`;
  renderAsHtml = false;
  backgroundColor = `#0000`;
  textColor = `#312929`;
  renderAsMarkdown = true;
}
