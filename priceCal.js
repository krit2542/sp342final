function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  if(eventId == 1){
	 tickprice = 91.25;
  }else if (eventId == 2){
	 tickprice = 79.88;
  }else if (eventId == 3){
	 tickprice = 83.12
  }else if (eventId == 4){
  tickprice = 100}
			  
		  let net = ticknum * tickprice
  
  
  
  
  
  
  return net;
}


