import { fetchAuthSession } from "aws-amplify/auth";

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const getCommonHeaders = async () => {
  const session = await fetchAuthSession();

  const idToken = session.tokens?.idToken;

  if (!idToken) {
    throw new Error("No ID token found");
  }

  return {
    Authorization: `Bearer ${idToken}`,
    "Content-Type": "application/json",
  };
};

export const handleApiResponse = async <T>(
  response: Response,
): Promise<T | null> => {
  if (!response.ok) {
    console.log("response", response);
    const error = await response.json();
    throw new ApiError(error.message);
  }

  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  return JSON.parse(responseText);
};
