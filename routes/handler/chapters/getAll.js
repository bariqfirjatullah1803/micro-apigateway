const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const chapters = await api.get('/api/chapters',{
            params:{
                ...req.query
            }
        });
        return res.json(chapters.data);
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;
            return res.status(status).json(data);
        } else {
            return res.status(500).json({ message: 'Server Error' });
        }
    }
}