"use client";
import { amplifyConfig } from "@/utils/amplify";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyConfig);

const AwsAmpliferProvider = () => null;

export default AwsAmpliferProvider;
