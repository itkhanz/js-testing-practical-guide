import { generateReportData, storeData } from "./mocks-spies/data.js";
import log from "./mocks-spies/util/logger.js";

const data = generateReportData(log);
storeData(data);
