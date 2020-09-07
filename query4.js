import * as query13 from './query13';
/* @type {string} */
const id = `query4`;

/* @type {string} */
const type = `datasource`;

/* @type {string} */
const subtype = `JavascriptQuery`;

/* @type {string} */
const resourceName = `JavascriptQuery`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-08-25T23:28:07.521Z`;

/* @type {string} */
const updatedAt = `2020-09-05T19:58:59.180Z`;

class Template {
  queryRefreshTime = ``;
  queryDisabledMessage = ``;
  successMessage = ``;
  queryDisabled = ``;
  playgroundQuerySaveId = 0;
  resourceNameOverride = ``;
  runWhenModelUpdates = false;
  query() {
    if (query13.isFetching) {
      return [];
    }
    return query13.data;
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
