import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

const CLIENT_ID = '148964458336-2m80irc3fd8n52rtipveofsgc7n5dkm9.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

async function getAuthToken() {
  const auth = new GoogleAuth({
    clientId: CLIENT_ID,
    scopes: SCOPES,
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();

  return token;
}

async function getMessages() {
  const token = await getAuthToken();

  const gmail = google.gmail({ version: 'v1', auth: token });

  const response = await gmail.users.messages.list({
    userId: 'me',
  });

  return response.data.messages;
}

export default {
  getMessages,
};
