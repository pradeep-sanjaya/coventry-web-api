var dateFormat = require('dateformat');

module.exports = {
    dateTime: () => {
        dt = new Date();
        utc = dt.getTime() + (dt.getTimezoneOffset() * 60000);
        dt = new Date(utc + (3600000 * +5.30));
        return {
            date: dateFormat(dt, "yyyy-mm-dd"),
            time: dateFormat(dt, "h:MM:ss TT")
        }
    }
}