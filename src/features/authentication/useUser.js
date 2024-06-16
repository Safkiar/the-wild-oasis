import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    //  function that will be called to fetch the data.
    // useQuery: Automatically refetches data in the background based on configuration (e.g., when the component mounts, when the window refocuses).
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
