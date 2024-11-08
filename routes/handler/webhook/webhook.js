const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_ORDER_PAYMENT } = process.env;

const api = apiAdapter(URL_SERVICE_ORDER_PAYMENT);

module.exports = async (req, res) => {
    try {
        const webhook = await api.post(`/api/webhook`, req.body);
        return res.json(webhook.data);
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;
            return res.status(status).json(data);
        } else {
            return res.status(500).json({ message: "Server Error" });
        }
    }
};
