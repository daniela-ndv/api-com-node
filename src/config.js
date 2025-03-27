global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, boas-vindas à Node Store!';

module.exports = {
    connectionString: 'mongodb://admin:admin@localhost:27017/node-store?authSource=admin',
    sendgridKey: 'SUA CHAVE AQUI',
    containerConnectionString: 'DBA'
}