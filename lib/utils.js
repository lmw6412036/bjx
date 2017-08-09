const axios = require("axios");
exports.getData = function (pn) {
    return axios.get("http://dy.api.duominuo.com/pdc", {
        params: {
            partnerId: "b5418afdb7b311ee0bf56e0153a6a2e0",
            token: "44eeac9cc1fb19eeccc2efe7266f9615",
            apiId: "55",
            pn: pn,
            rn: 30
        }
    }).then((res) => {
        if (res.status == 200) {
            return res.data
        }
    }).then((res) => {
        return res.result.data;
    })
}