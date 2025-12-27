import {
  signUp as CognitoSignUp,
  confirmSignUp as CognitoVerifySignUp,
  resendSignUpCode as CognitoResendSignUpCode,
  signIn as CognitoSignIn,
  signOut as CognitoSignOut,
} from "aws-amplify/auth";

const USERNAME_EXISTS_ERROR = "User already exists";

export const signUp = async (
  userName: string,
  email: string,
  password: string,
) => {
  try {
    return await CognitoSignUp({
      username: email,
      password,
      options: {
        autoSignIn: true,
        userAttributes: {
          email,
          name: userName,
        },
      },
    });
  } catch (error) {
    if ((error as Error).message.includes(USERNAME_EXISTS_ERROR)) {
      return await CognitoResendSignUpCode({
        username: email,
        options: {
          autoSignIn: true,
        },
      });
    }
    throw error;
  }
};

export const verifySignUp = async (username: string, code: string) => {
  const { isSignUpComplete } = await CognitoVerifySignUp({
    username: username,
    confirmationCode: code,
    options: {
      autoSignIn: true,
    },
  });

  return { isSignUpComplete };
};

export const signIn = async (email: string, password: string) => {
  return await CognitoSignIn({
    username: email,
    password,
  });
};

export const signOut = async () => {
  return await CognitoSignOut();
};
