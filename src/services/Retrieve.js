const Connection = require('../database/Connection')
module.exports = async (arrFields) => {
    try {
        const query = `SELECT `+
                        `${arrFields} `+
                        `FROM `+
                        `cebpinadayag_books`;

        const results = await Connection(query);

        return results;

    } catch (err) {
        return [];
    }

}