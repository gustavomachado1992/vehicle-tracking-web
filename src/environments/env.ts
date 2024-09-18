
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
