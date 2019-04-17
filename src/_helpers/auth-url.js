import { authConstants } from '../_constants';
let uniqid = require('uniqid');

/**
 * STATE: A value included in the request that is returned in the token response. 
 * It can be a string of any content that you wish. A randomly generated 
 * unique value is typically used for preventing cross-site request forgery 
 * attacks. The state is also used to encode information about the user's 
 * state in the app before the authentication request occurred, such as the 
 * page or view they were on.
 */

let state = uniqid();
localStorage.setItem('state', state);
export const authUrl = `https://login.microsoftonline.com/${authConstants.TENANT_ID}/oauth2/authorize?client_id=${authConstants.APPLICATION_ID}&response_type=id_token&redirect_uri=${authConstants.REDIRECT_URI}&response_mode=form_post&scope=openid&state=${state}&nonce=${authConstants.NONCE}`;