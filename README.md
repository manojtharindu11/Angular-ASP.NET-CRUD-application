# Angular .NET Full Stack CRUD Application

This project is a full-stack CRUD (Create, Read, Update, Delete) application built using Angular for the frontend and ASP.NET Core for the backend. The backend connects to an MSSQL database, and all database operations are managed through Entity Framework Core (EF Core).

## Features

- **Create:** Add new records to the MSSQL database.
- **Read:** Retrieve and display records from the database.
- **Update:** Modify existing records.
- **Delete:** Remove records from the database.


- **Backend:** ASP.NET Core API with EF Core for data access.
- **Frontend:** Angular application for interacting with the API.

## Technology Stack

- **Frontend:** Angular
- **Backend:** ASP.NET Core
- **Database:** MSSQL with Entity Framework Core (EF Core)

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Angular CLI](https://angular.io/cli) installed
- [.NET SDK](https://dotnet.microsoft.com/download) installed
- MSSQL Server installed and configured

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/angular-dotnet-crud.git
   cd angular-dotnet-crud
   ```

2. **Backend Setup:**

   - Navigate to the backend project folder:

     ```bash
     cd backend
     ```

   - Restore .NET dependencies:

     ```bash
     dotnet restore
     ```

   - Update `appsettings.json` with your MSSQL connection string:

     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=your_server;Database=your_database;User Id=your_username;Password=your_password;"
     }
     ```

   - Apply migrations and update the database:

     ```bash
     dotnet ef database update
     ```

   - Run the backend:

     ```bash
     dotnet run
     ```

3. **Frontend Setup:**

   - Navigate to the frontend project folder:

     ```bash
     cd frontend
     ```

   - Install Angular dependencies:

     ```bash
     npm install
     ```

   - Run the frontend:

     ```bash
     ng serve
     ```

   - Open your browser and navigate to `http://localhost:4200`.

## Resources

- [YouTube Tutorial](https://youtu.be/CdE6rVfPJ9I?si=M8dcNZhJLhjCEoug): A helpful guide that covers building this full-stack CRUD application.
