import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

export const fetchBookings = () => dispatch => (
  BookingApiUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
);

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const deleteBooking = id => dispatch => (
  BookingApiUtil.deleteBooking(id)
    .then(() => dispatch(removeBooking(id)))
);