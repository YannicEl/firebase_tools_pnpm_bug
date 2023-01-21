import { onCall } from 'firebase-functions/v2/https';

export const handler = onCall(async (req) => {
	console.log(req.data);

	return { hello: 'world' };
});
