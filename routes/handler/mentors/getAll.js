const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    // console.log(api.get('/api/mentors'));
    try {
        const mentors = await api.get('/api/mentors');
        return res.json(mentors.data);
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;
            return res.status(status).json(data);
        } else {
            return res.status(500).json({ message: 'Server Error' });
        }
    }
}