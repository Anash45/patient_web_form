function doPost(e) {
    var ss = SpreadsheetApp.openById('1N6RSlsPdnbsKo6UO1ayGssNmC24ZA7bQV0cLIvyYFXY');
    var sheet = ss.getSheetByName('Sheet1');
    
    // Get the current date and time
    var timestamp = new Date();
  
    // Calculate the new serial number based on the current number of rows
    var serialNumber = sheet.getLastRow() + 0; // Serial number starts from 1
  
    // Parse form data
    var data = e.parameter;
  
    // Insert other data into the spreadsheet
    var rowData = [
      serialNumber,        // Serial Number
      timestamp,           // Date and Time
      data.first_name,
      data.last_name,
      data.birth_date,
      data.age,
      data.sex,
      data.civil_status,
      data.phone_number,
      data.occupation,
      data.email,
      data.address,
      data.symptoms,
      data.pregnancy,
      data.allergies,
      data.bb_infection
    ];
  
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return a success message
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
  }
  