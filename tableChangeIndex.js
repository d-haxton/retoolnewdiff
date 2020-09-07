import * as table3 from './table3';
import * as companiesTable from './companiesTable';
/* @type {string} */
const id = `tableChangeIndex`;

/* @type {string} */
const type = `datasource`;

/* @type {string} */
const subtype = `JavascriptQuery`;

/* @type {string} */
const resourceName = `JavascriptQuery`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-07-20T16:04:25.545Z`;

/* @type {string} */
const updatedAt = `2020-08-27T23:36:15.406Z`;

class Template {
  queryRefreshTime = ``;
  queryDisabledMessage = ``;
  successMessage = ``;
  queryDisabled = ``;
  playgroundQuerySaveId = 0;
  resourceNameOverride = ``;
  runWhenModelUpdates = false;
  query() {
    companiesTable.selectRow(16);
    table3.selectRow(16);
    //return companiesTable.data.findIndex( ({id}) => id === urlparams.hash.selectedId);
  }
  playgroundQueryUuid = ``;
  playgroundQueryId = 0;
  privateParams = [];

  triggersOnSuccess = [];

  runWhenPageLoadsDelay = ``;
  showSuccessConfetti = false;
  isImported = false;
  showSuccessToaster = true;
  cacheKeyTtl = ``;
  triggersOnFailure = [];

  errorTransformer() {
    // type your code here
    // example: return data.find(element => element.isError)
    return data.error;
  }
  isFetching = false;
  queryTriggerDelay = `0`;
  watchedParams = [];

  enableErrorTransformer = false;
  timestamp = 0;
  enableTransformer = false;
  runWhenPageLoads = false;
  transformer() {
    // type your code here
    // example: return formatDataAsArray(data).filter(row => row.quantity > 20)
    return data;
  }
  queryTimeout = `10000`;
  requireConfirmation = false;
  enableCaching = false;
  queryThrottleTime = `750`;
  notificationDuration = ``;
}
