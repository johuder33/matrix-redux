//import polyfiil from 'es6-promise';
import matrixSDK from 'matrix-js-sdk';


export default class MatrixClient {
    constructor(options) {
        this.client = matrixSDK.createClient(options);
    }

    login(username, passwd, callback) {
        this.client.loginWithPassword(username, passwd, (err, data) => {
            if (err) return callback(err);
            callback(null, data);
        });
    }
};
