"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9422e5ab-c8c1-4e29-96af-6abff5feccac");
  }, []);
  return null;
};
