import { registerMetricsComponent } from './metrics.js';

const app = () => {
    registerMetricsComponent();
};

document.addEventListener('DOMContentLoaded', app);