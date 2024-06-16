import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    // option used to specify a function that will perform a mutation
    onSuccess: () => {
      // callback function that will be executed when the mutation operation  completes successfully.
      queryClient.removeQueries();
      //  it clears all queries from the cache.
      // Zapytania (Queries): Zapytania odnoszą się do żądań danych, które zazwyczaj są pobierane z API.
      // Cache (Pamięć podręczna): Cache to mechanizm przechowywania danych używany do przechowywania wyników wcześniej wykonanych zapytań
      navigate("/login", { replace: true });
      // navigation will replace the current entry in the history stack,
    },
  });

  return { logout, isLoading };
}
