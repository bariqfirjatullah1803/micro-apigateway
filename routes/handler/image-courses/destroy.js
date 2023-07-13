const apiAdapter = require("../../apiAdapter");
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const imageCourses = await api.delete(`/api/image-courses/${id}`);
        return res.json(imageCourses.data);
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