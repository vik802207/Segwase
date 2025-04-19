# Segwise CSV Viewer

A full-stack web application to upload CSV files, parse them on the backend, and display searchable, sortable, and filterable tables on the frontend. Built using **React**, **Express**, and **Multer** for handling file uploads.

## 🚀 Features

- 📤 **Upload multiple CSV files**: Users can upload multiple CSV files at once.
- 🔁 **Backend parsing**: CSV files are parsed using the **csvtojson** package to convert them into JSON format.
- 📦 **Data storage**: Parsed data is stored in **localStorage** for easy access and viewing.
- 🔍 **Global search**: Perform a global search across all fields of the CSV data.
- 🎛️ **Dynamic filters**: Automatically generates dynamic filters based on CSV column headers for advanced filtering.
- 📈 **Interactive table**: Displays data in a responsive, sortable, and filterable table.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **File Handling**: Multer
- **CSV Parsing**: csvtojson
- **Storage**: localStorage
- **Styling**: Custom CSS (Responsive)

## 📥 Installation

### Frontend Setup:

1. Clone the repository:
   git clone https://github.com/vik802207/segwise-csv-viewer.git
   cd segwise
   npm start


## 📸 Screenshots

### Upload Page:
- Upload CSV files from your computer.

![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(338).png?raw=true)

### Data Table Page:
- Filter and search dynamically.

![Data Table Page](path-to-data-table-page-image)

## 📝 How It Works

1. **Upload one or more .csv files** from the Upload page.
2. Files are sent to the **Express backend** using **axios**.
3. The backend uses **csvtojson** to convert the CSV files into JSON.
4. The final parsed data is returned and saved in **browser localStorage**.
5. The **data table page** loads this data:
   - Dynamically generates filter dropdowns from the column names.
   - Allows **global search** and filtering.
   - Displays all data in a **styled table**.

## 🧪 Example CSV Structure

Here is an example of the CSV format that works with the application:

country,os,ad_network,impressions,clicks
US,Android,Facebook,1000,50
UK,iOS,Google,1500,70
IN,Android,Facebook,2000,90

## 🌐 Live Demo

🚀 **Live App** – Deployed frontend (Netlify) + backend (Render)  
## [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://magical-cat-74ec58.netlify.app/)
Replace with your actual deployed URLs

## 👨‍💻 Author

**Vikash Gupta**  
📍 **IIIT Nagpur**  
💼 **Frontend Engineer** • **DSA Enthusiast**  
🔗 [LinkedIn](#) | [Portfolio](#)  

## 🪪 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.


   
