const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const mentor = await api.put(`/api/mentors/${id}`, req.body);
    return res.json(mentor.data);
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    } else {
      return res.status(500).json({ message: "Server Error" });
    }
  }
};