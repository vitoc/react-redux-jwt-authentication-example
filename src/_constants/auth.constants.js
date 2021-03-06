// Fill with your values :)

export const authConstants = {
    TENANT_ID: '4ca6f56d-30d2-43b7-a68c-2589673312de',
    APPLICATION_ID: 'b7adfe6a-e3c8-4a5a-a854-8a6400819be9',
    REDIRECT_URI: 'https://node-jwt.azurewebsites.net/token', // The node-jwt-authentication-api endpoint
    // REDIRECT_URI: 'http://localhost:4000/token', // Locally, the example node-jwt* defaults to port 4000
    /**
     * NONCE: A value included in the request, generated by the app, that is 
     * included in the resulting id_token as a claim. The app can then verify 
     * this value to mitigate token replay attacks. The value is typically a 
     * randomized, unique string or GUID that can be used to identify the 
     * origin of the request.
     */
    NONCE: 'tesla'
};
