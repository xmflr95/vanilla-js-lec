const dayjs = window.dayjs;
const dayjsRelativeTime = window.dayjs_plugin_relativeTime;
dayjs.extend(dayjsRelativeTime);

// import * as webVitals from './web-vitals.js';
import * as webVitals from 'https://unpkg.com/web-vitals@4.2.3/dist/web-vitals.js';

export { dayjs, webVitals };