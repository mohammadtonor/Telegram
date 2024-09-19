import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/Providers/AuthProvider";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href={"/(home)"} />;
  }

  return <Stack />;
}
