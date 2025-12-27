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

export const handleApiResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json();
    throw new ApiError(error.message);
  }

  return await response.json();
};
