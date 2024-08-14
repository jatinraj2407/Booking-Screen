import React, { useState, useEffect } from 'react';
import bookingData from '../data/bookings.json'; // Import the local JSON file
import './BookingScreen.css'; // Import the CSS file

const BookingScreen = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const [sortOption, setSortOption] = useState({ field: 'date', order: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    setBookings(bookingData);
  }, []);

  const handleFilterChange = (event) => {
    setFilteredStatus(event.target.value);
  };

  const handleSortChange = (event) => {
    const [field, order] = event.target.value.split('-');
    setSortOption({ field, order });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const exportToCSV = () => {
    const csvContent = [
      ['ID', 'Date', 'Time', 'Mentor', 'Status'],
      ...filteredAndFilteredBookings.map(b => [b.id, b.date, b.time, b.mentor, b.status])
    ]
    .map(e => e.join(','))
    .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'bookings.csv';
    link.click();
  };

  const filteredAndFilteredBookings = bookings
    .filter(booking =>
      booking.id.toString().includes(searchTerm) ||
      booking.mentor.toLowerCase().includes(searchTerm)
    )
    .filter(booking => filteredStatus === 'all' || booking.status === filteredStatus)
    .sort((a, b) => {
      const valueA = a[sortOption.field];
      const valueB = b[sortOption.field];

      if (valueA < valueB) return sortOption.order === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOption.order === 'asc' ? 1 : -1;
      return 0;
    });

  return (
    <div className={`booking-screen ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="shiny-text"><u>Booking Screen</u></h1>
      <div className="header-controls">
        <div className="filter-container">
          <label htmlFor="status-filter">Filter by status:</label>
          <select id="status-filter" value={filteredStatus} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="sort-container">
          <label htmlFor="sort-options">Sort by:</label>
          <select id="sort-options" value={`${sortOption.field}-${sortOption.order}`} onChange={handleSortChange}>
            <option value="date-asc">Date Ascending</option>
            <option value="date-desc">Date Descending</option>
            <option value="time-asc">Time Ascending</option>
            <option value="time-desc">Time Descending</option>
            <option value="mentor-asc">Mentor Ascending</option>
            <option value="mentor-desc">Mentor Descending</option>
          </select>
        </div>
        <div className="search-container">
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by ID or Mentor"
          />
        </div>
        <button onClick={exportToCSV} className="export-button">Export to CSV</button>
      </div>
      <table className="booking-table">
        <thead>
          <tr>
            {['ID', 'Date', 'Time', 'Mentor', 'Status'].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAndFilteredBookings.map((booking) => (
            <tr key={booking.id}>
              {['id', 'date', 'time', 'mentor', 'status'].map((field, index) => (
                <td key={index} className={booking.status}>{booking[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="dark-mode-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default BookingScreen;
