import { authConstants } from '../_constants';

export const authUrl = `https://login.microsoftonline.com/${authConstants.TENANT_ID}/oauth2/authorize?client_id=${authConstants.APPLICATION_ID}&response_type=id_token&redirect_uri=${authConstants.REDIRECT_URI}/login&response_mode=form_post&scope=openid&state=${authConstants.STATE}&nonce=${authConstants.NONCE}`;