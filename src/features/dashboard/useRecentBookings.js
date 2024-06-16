import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
// subtracts a specified number of days from a given date
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  // ead and manipulate the query parameters in the URL

  const numDays = !searchParams.get("last")
    ? // Checks if the last query parameter is present in the URL:
      7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();
  // alculates a date that is numDays days before the current date and then converts that date to an ISO string format.

  const { isLoading, data: bookings } = useQuery({
    //  fetching, caching, and updating data
    queryFn: () => getBookingsAfterDate(queryDate),
    //  execute when the query runs
    // bookings: The data returned from the getBookingsAfterDate(queryDate)
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
