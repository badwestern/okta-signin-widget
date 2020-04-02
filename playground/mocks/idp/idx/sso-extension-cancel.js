const templateHelper = require('../../../config/templateHelper');
const identifyWithAppleSSOExtensionFallback = require('./data/identify-with-apple-sso-extension-fallback');

module.exports = templateHelper({
  path: '/idp/idx/authenticators/sso_extension/transactions/:transactionId/verify/cancel',
  method: 'POST',
  status: 200,
  template: identifyWithAppleSSOExtensionFallback
});

