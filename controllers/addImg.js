const addImg = require('../models/addImgsModel');
const handleSuccess = require('../service/handleSuccess');
const handleErrorAsync = require('../service/handleErrorAsync');


const addImgs = {
    getImgs: handleErrorAsync(async (req, res) => {
        const addImgs = await addImg.find()
        handleSuccess(res, '資料讀取成功', addImgs);
    }),
    createImgs: handleErrorAsync(async (req, res, next) => {
        const data = req.body;
        const image = await addImg.create(data)
        handleSuccess(res, 200, image);
    }),
}

module.exports = addImgs;