import { authConstants } from '../_constants';

export const authUrl = `https://login.microsoftonline.com/${authConstants.TENANT_ID}/oauth2/authorize?client_id=${authConstants.APPLICATION_ID}&response_type=id_token&redirect_uri=http://localhost:8080/login&response_mode=form_post&scope=openid&state=gustav&nonce=tesla`;