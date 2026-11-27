const fs = require('node:fs');
const path = require('node:path');

function load(fileName) {
    const filePath = path.join(__dirname, 'mock-data', fileName);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

const db = {
    activityTypes: load('activity-types.json'),
    monitors: load('monitors.json'),
    activities: load('activities.json'),
};

function nextId(list) {
    return list.length === 0 ? 1 : Math.max(...list.map((item) => item.id)) + 1;
}

module.exports = { db, nextId };