import * as query13 from './query13';
/* @type {string} */
const id = `companiesTable`;

/* @type {string} */
const type = `widget`;

/* @type {string} */
const subtype = `TableWidget`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-06-16T19:51:18.435Z`;

/* @type {string} */
const updatedAt = `2020-08-27T23:36:43.977Z`;

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
  col = 0;
  height = 8;
  width = 6;
  tabNum = 0;
}

class Template {
  showCustomButton = false;
  saveChangesDisabled = ``;
  columnWidths = [
    {id: 'name', value: 197.25},
    {id: 'address', value: 542},
    {id: 'organizationId', value: 100},
  ];

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
  downloadRawData = false;
  showFetchingIndicator = true;
  serverPaginated = false;
  data = `${query13.data}`;
  actionButtons = [];

  actionButtonSelectsRow = true;
  selectRowByDefault = true;
  defaultSortByColumn = `responseTimeMs`;
  paginationOffset = 0;
  sortedDesc = false;
  customButtonName = ``;
  pageSize = 6;
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
  showClearSelection = false;
  columns = [
    'id',
    'name',
    'status',
    'hash',
    'createdBy',
    'createdAt',
    'updatedAt',
    'updatedBy',
    'legacyCompanyId',
    'legacyAgencyId',
    'netsuiteCompanyId',
    'address',
    'poRequired',
    'registeredNumber',
    'netsuiteAccountNumber',
    'accountsPayableEmail',
    'commercialManager',
    'vatNumber',
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
    'metadata',
  ];

  calculatedColumns = [];

  showPaginationOnTop = false;
  nextAfterCursor = ``;
  useCompactMode = false;
}
