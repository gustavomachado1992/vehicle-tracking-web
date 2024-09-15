// TODO change URI_API to localhost or to your IP if testing locally
import {TokenService} from '../app/core/services/auth/token.service';

export const env = {
    dev: true,
    production: false,
    get INTEGRATION_URL(): string {
        return 'https://challenge-backend.mobi7.io';
    },
    get URI(): string {
        return 'http://localhost:8081/api';
    }
};
