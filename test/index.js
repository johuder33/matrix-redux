import {makeLogin} from '../src/actions/login';
import chai from 'chai';
import createStore from '../src/store/store';
import MatrixClient from '../src/utils/client';
import {fetchRequest} from '../src/utils/utils';

const store = createStore({});

describe('login test', () => {

    it('responde RCTM', function(done){
        const options = {baseUrl: 'https://192.168.0.103:8448', request: fetchRequest};
        const sdk = new MatrixClient(options);
        sdk.client.loginWithPassword('test', '123456', (err, data) => {
            if (err) console.error(err);
            chai.expect(data.access_token).to.exists;
            done();
        });

    });


   it('on make login action', (done) => {
        store.dispatch(makeLogin()).then((data) => {
                chai.expect(data.access_token).to.exists;
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
    });
});