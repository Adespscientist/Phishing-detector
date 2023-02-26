import * as AppAuth from 'expo-app-auth';

const authConfig = {
  issuer: 'https://accounts.google.com',
  scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
  clientId: '148964458336-2m80irc3fd8n52rtipveofsgc7n5dkm9.apps.googleusercontent.com',
  redirectUrl: 'com.yourappname://oauth2callback',
};

export const authAsync = async () => {
  const { type, accessToken, refreshToken } = await AppAuth.authAsync(authConfig);
  if (type === 'success') {
    return { accessToken, refreshToken };
  } else {
    throw new Error('Authentication failed');
  }
};
