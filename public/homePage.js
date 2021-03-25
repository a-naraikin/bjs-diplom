'use strict'

const logoutButton = new LogoutButton();

logoutButton.action = () => {
  ApiConnector.logout(response => {
    if (response.success) {
      location.reload();
    }
  })
}

ApiConnector.current(response => {
  if (response.success){
    ProfileWidget.showProfile(response.data);
  }
});

const ratesBoard = new RatesBoard();

function getRates(){
  ApiConnector.getStocks(response => {
    if (response.success){
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
    }
  });
}

getRates();
setTimeout(getRates, 1000 * 60);