const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);

    const params = {
        Bucket: 'myprojectbkt',
        Key: `${Date.now()}_${Your Name}_${Your Email}.json`,
        Body: JSON.stringify({ Your Name, Your Email, Subject, Message }),
        ContentType: 'application/json'
    };

    try {
        await s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ Message: 'Form data saved successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
