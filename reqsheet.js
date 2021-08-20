//:SHEETTOUPDATE:, :G1:, :A1:

function fillRow(mysheet, row, column, reqssheet) {
  var reqData = SpreadsheetApp.openById(reqssheet);
  var reqSheet = reqData.getSheets()[0];
  var reqVals = reqSheet.getRange(9, 4, 1, 2).getValues();
  pushData = [Utilities.formatDate(new Date(), "GMT+0", "dd/MM/yyyy"), reqVals[0][0], reqVals[0][1], reqVals[0][1]/reqVals[0][0]];
  reqVals = reqSheet.getRange(12, 4).getValue();
  pushData.push(reqVals, reqVals/pushData[1], pushData[1]-pushData[2]-reqVals);
  pushData.push(pushData[6]/pushData[1]);

  Logger.log(pushData);
  mysheet.getRange(row + 1, column, 1, pushData.length).setValues([pushData]);
}

function updateReqSheet() {
  var ss = SpreadsheetApp.openById(SHEETTOUPDATE);
  var statsSheet = ss.getSheetByName("Requests");
  var lastRow = statsSheet.getLastRow();

  fillRow(statsSheet, lastRow, 1, G1);
  fillRow(statsSheet, lastRow, 10, A1);
}
