// const database = require("../../config/database");
// const { v4: uuid } = require("uuid");
const fileServerPath = "/Users/ganduulga/Desktop/project/web/file_server";

const upload = async (request, response, next) => {
    const { file } = request.files;
    const filePath = `${fileServerPath}/image/`;

    const filename = file.name;

    console.log(`${filePath}${filename}`);

    file.mv(`${filePath}${filename}`, (err) => {
        if (err) {
            response
                .status(500)
                .send({ message: "File upload failed", code: 200 });
        }
        response.status(200).send({ message: "File Uploaded", code: 200 });
    });
};

module.exports = {
    upload,
};
