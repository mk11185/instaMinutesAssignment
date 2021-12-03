const moment = require("moment");
const triggerFunction = async (req, res) => {
    try {
        let eventArray = req.body.eventQueue;
        if (!eventArray) {
            return res.status(400).send({ status: "failure", msg: "input the time events" });
        }
        for (let i = 0; i < eventArray.length; i++) {
            const givenDate = moment(new Date(`${eventArray[i].dateTime}`)).format(
                "Y-M-D H:m:s"
            );
            const date = new Date(givenDate);
            const currentDate = new Date();
          
            let diff = date - currentDate;
            let delayTime = diff + eventArray[i].text.length * 1000;

            setTimeout(() => {
                console.log(eventArray[i].text.split("").reverse().join(""))
            }, delayTime);
        }
        res.status(200).send({ status: "success", msg: "all job done" })
    } 
    catch (err) {
        res.status(500).send({ status: "failure", err: err.message });
    }
};
module.exports.triggerFunction = triggerFunction;