import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

import styled from "styled-components";

const StyledBooking = styled.div`
  @media (max-width: 850px) {
    width: 90vw;
    header {
      padding: 10px 2px;
    }
    header div {
      font-size: 1.1rem;
      margin-left: 5px;
    }
    section {
      font-size: 0.95rem;
      overflow-x: scroll;
    }

    section span {
      font-size: 0.9rem;
      width: 100px;
    }
  }
  @media (max-width: 750px) {
    section div {
      /* background-color: white; */
      /* padding: 20px 10px; */
      /* padding: 5px 1px; */
    }
  }
`;

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <StyledBooking>
        <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
          <Table.Header>
            <div>Cabin</div>
            <div>Guest</div>
            <div>Dates</div>
            <div>Status</div>
            <div>Amount</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={bookings}
            render={(booking) => (
              <BookingRow key={booking.id} booking={booking} />
            )}
          />

          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </StyledBooking>
    </Menus>
  );
}

export default BookingTable;
