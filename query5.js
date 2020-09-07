import * as checkbox1 from './checkbox1';
/* @type {string} */
const id = `query5`;

/* @type {string} */
const type = `datasource`;

/* @type {string} */
const subtype = `JavascriptQuery`;

/* @type {string} */
const resourceName = `JavascriptQuery`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-09-05T20:00:09.663Z`;

/* @type {string} */
const updatedAt = `2020-09-05T20:00:18.755Z`;

class Template {
  queryRefreshTime = ``;
  queryDisabledMessage = ``;
  successMessage = ``;
  queryDisabled = ``;
  playgroundQuerySaveId = 0;
  resourceNameOverride = ``;
  runWhenModelUpdates = false;
  query() {
    checkbox1.setValue(true);
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
