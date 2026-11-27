function sendError(res, status, code, description) {
    return res.status(status).json({code, description});
}

function parseId(value) {
    const id = Number(value);
    return Number.isInteger(id) && id > 0 ? id: null;
}

module.exports = { sendError, parseId };