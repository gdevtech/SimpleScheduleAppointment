# SimpleScheduleAppointment
This ASP.net MVC contains Tailwind CSS and Alpine JS integration


## Development Preparation

### Local Installation

1. Download [Node](https://nodejs.org/en/) version 10.15+
   > You can also download and setup [NVM](https://github.com/creationix/nvm) if you want to manage multiple versions of node.
2. Check and install Nuget Packages 
    - Microsoft.EntityFrameworkCore
    - Microsoft.EntityFrameworkCore.SqlServer
    - Microsoft.EntityFrameworkCore.Tools
    - AlpineIntegration
3. Open SQL Server nad connect to server name: (localdb)\MSSQLLocalDB
4. Open VS Package Manager Console and run:
    `add-mirgration initalizedDatabase` and also `update-database`
5. SimpleSchedule Database should now be created
