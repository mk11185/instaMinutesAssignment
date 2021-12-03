const moment = require("moment");
const triggerFunction = async (req, res) => {
    try {
        let { eventArray } = req.body;
        if (!eventArray) {
            return res.status(400).send({ status: "failure", message: "input the time events" });
        }

        for (let i = 0; i < eventArray.length; i++) {
            let inputDate = moment(new Date(`${eventArray[i].dateTime}`)).format("YYYY-MM-DD HH:mm:ss.SSS");
            inputDate = new Date(inputDate);
            const currentDate = new Date();

            let executeAfter = inputDate - currentDate;

            if (executeAfter >= 0) {
                setTimeout(() => {
                    console.log(eventArray[i].text.split("").reverse().join(""))
                }, executeAfter + eventArray[i].text.length * 1000);
            }
            else {
                console.log(`event ${i + 1} expires`)
            }
        }
        res.status(200).send({ status: "success", message: "schedled" })
    }
    catch (error) {
        res.status(500).send({ status: "failure", error: error.message });
    }
};
module.exports.triggerFunction = triggerFunction;