import * as query13 from './query13';
/* @type {string} */
const id = `table3`;

/* @type {string} */
const type = `widget`;

/* @type {string} */
const subtype = `TableWidget`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-07-20T16:19:46.726Z`;

/* @type {string} */
const updatedAt = `2020-09-07T06:20:44.922Z`;

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
  row = 3;
  col = 6;
  height = 8;
  width = 6;
  tabNum = 0;
}

class Template {
  showCustomButton = false;
  saveChangesDisabled = ``;
  columnWidths = [];

  columnWidthsMobile = [];

  hasNextAfterCursor = ``;
  onRowAdded = ``;
  alwaysShowPaginator = false;
  allowMultiRowSelect = false;
  showFilterButton = true;
  nextBeforeCursor = ``;
  selectedPageIndex = `0`;
  actionButtonColumnName = `Actions`;
  filterStackType = `and`;
  downloadRawData = true;
  showFetchingIndicator = true;
  serverPaginated = false;
  data = `${query13.data}`;
  actionButtons = [];

  actionButtonSelectsRow = true;
  selectRowByDefault = true;
  defaultSortByColumn = ``;
  paginationOffset = 0;
  sortedDesc = false;
  customButtonName = ``;
  pageSize = 11;
  useDynamicColumnSettings = false;
  actionButtonPosition = `left`;
  bulkUpdateAction = ``;
  afterCursor = ``;
  onCustomButtonPressQueryName = ``;
  sortedColumn = ``;
  beforeCursor = ``;
  serverPaginationType = `limitOffsetBased`;
  onRowSelect = ``;
  showDownloadButton = true;
  selectedIndex = `${Number(urlparams.hash.selectRow)}`;
  defaultSortDescending = false;
  totalRowCount = ``;
  recordUpdates = [];

  filters = [];

  showClearSelection = false;
  columns = [
    'Title',
    'Description',
    'Sales',
    'id',
    'name',
    'email',
    'sales',
    'actor_id',
    'first_name',
    'last_name',
    'last_update',
    'userId',
    'organizationId',
    'userAgent',
    'ipAddress',
    'geoLocation',
    'responseTimeMs',
    'actionType',
    'pageName',
    'queryName',
    'resourceName',
    'createdAt',
    'updatedAt',
    'metadata',
  ];

  calculatedColumns = [];

  showPaginationOnTop = false;
  nextAfterCursor = ``;
  useCompactMode = true;
}
