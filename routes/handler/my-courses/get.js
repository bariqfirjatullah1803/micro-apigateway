const apiAdapter = require("../../apiAdapter");
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;

        const myCourse = await api.get(`/api/my-courses`, {
            params: {
                user_id: userId
            }
        });
        return res.json(myCourse.data);
    } catch (error) {
        if (error.response) {
            const {
                status,
                data
            } = error.response;
            return res.status(status).json(data);
        } else {
            return res.status(500).json({
                message: "Server Error"
            });
        }
    }
};