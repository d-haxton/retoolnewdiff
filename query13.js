import * as query5 from './query5';
import * as query4 from './query4';
/* @type {string} */
const id = `query13`;

/* @type {string} */
const type = `datasource`;

/* @type {string} */
const subtype = `SqlQuery`;

/* @type {string} */
const resourceName = `[dev] internal_retool (readonly)`;

/* @type {string} */
const container = ``;

/* @type {string} */
const createdAt = `2020-07-20T16:19:02.022Z`;

/* @type {string} */
const updatedAt = `2020-09-05T20:00:38.460Z`;

class Template {
  queryRefreshTime = ``;
  databasePasswordOverride = ``;
  queryDisabledMessage = ``;
  successMessage = ``;
  queryDisabled = ``;
  playgroundQuerySaveId = 0;
  resourceNameOverride = ``;
  runWhenModelUpdates = true;
  query = `select * from audit_trail_events order by id ASC`;
  playgroundQueryUuid = ``;
  playgroundQueryId = 0;
  privateParams = [];

  triggersOnSuccess = [query4];

  runWhenPageLoadsDelay = ``;
  warningCodes = [];

  showSuccessConfetti = false;
  isImported = false;
  showSuccessToaster = true;
  dataArray = [];

  cacheKeyTtl = ``;
  triggersOnFailure = [query4, query5];

  shouldUseLegacySql = false;
  errorTransformer() {
    // type your code here
    // example: return data.find(element => element.isError)
    return data.error;
  }
  databaseNameOverride = ``;
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
  databaseUsernameOverride = ``;
  shouldEnableBatchQuerying = false;
  queryThrottleTime = `750`;
  notificationDuration = ``;
}
