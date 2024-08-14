##BookingScreen

This project is a React component that displays a list of bookings with various controls for filtering, sorting, and searching the data. The data is fetched from a local JSON file. Users can also export the filtered and sorted data to a CSV file. Additionally, the component includes a Dark Mode toggle.

Features

- Filter by Status: Filter the bookings by status (`All`, `Confirmed`, `Pending`, `Cancelled`).
- Sort by Date or Mentor: Sort the bookings by date or mentor, in ascending or descending order.
- Search: Search for bookings by ID or mentor name.
- Export to CSV: Export the currently displayed data to a CSV file.
- Dark Mode Toggle: Switch between light and dark modes.

BookingScreen.js

This file contains the React component for displaying and managing the bookings data. It includes:

- State Management: Managing the state for filtering, sorting, searching, and theme toggling.
- Event Handlers: Handling changes to filters, sort options, search input, and dark mode toggle.
- CSV Export: Functionality to export the filtered and sorted data to a CSV file.

BookingScreen.css

This file contains the styles for the `BookingScreen` component, including:

- Layout: Ensures that the filter, sort, and search dropdowns/input fields appear on the same line.
- Interactive Styles: Enhances the user experience with focus styles, hover effects, and dark mode styles.
- Table Styles: Styles the bookings table, including different colors for different booking statuses.

Installation

1. Clone the repository:

    git clone https://github.com/yourusername/BookingScreen.git

2. Navigate to the project directory:

    cd BookingScreen

3. Install the dependencies:

    npm install

4. Start the application:

    npm start

    The application will start on `http://localhost:3000`.

Usage

Once the application is running:

1. Filtering: Use the dropdown to filter bookings by status.
2. Sorting: Select an option from the sort dropdown to order the bookings by date or mentor.
3. Searching: Enter text in the search box to filter bookings by ID or mentor name.
4. Exporting to CSV: Click the "Export to CSV" button to download the current view as a CSV file.
5. Dark Mode: Toggle between light and dark mode using the button at the bottom of the screen.
