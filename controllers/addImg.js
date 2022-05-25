const addImg = require('../models/addImgsModel');
const handleSuccess = require('../service/handleSuccess');
const handleErrorAsync = require('../service/handleErrorAsync');


const addImgs = {
    getImgs: handleErrorAsync(async (req, res) => {
        const addImgs = await addImg.find()
        handleSuccess(res, '資料讀取成功', addImgs);
    }),
}

module.exports = addImgs;