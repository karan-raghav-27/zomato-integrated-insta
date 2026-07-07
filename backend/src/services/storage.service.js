const { default: ImageKit, toFile } = require("@imagekit/nodejs");
 
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(fileBuffer, fileName){
    // Essential step: format the buffer for the ImageKit SDK
    const formattedFile = await toFile(fileBuffer, fileName);

    const result = await imagekit.files.upload({
        file: formattedFile,
        fileName: fileName,
    })

    return result;
}
module.exports = {
    uploadFile
};