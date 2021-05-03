
btnFindLysts.onclick=function(){
  ChangeForm(recipeSelection)
}

btnStoresNearMe.onclick=function(){
  ChangeForm(tempMap)
}

btnAddLysts.onclick=function(){
  ChangeForm(recipeConfirmation)
}

drpStores.onclick=function(){
  drpStores.clear()
  drpStores.addItem("target")
  drpStores.addItem("walmart")
  drpStores.addItem("wohlners")
  
  if (drpStores.selection == "target") {
    ChangeForm(target)
  }
  if (drpStores.selection == "walmart") {
    ChangeForm(walmart)
  }
  if (drpStores.selection == "wohlners") {
    ChangeForm(wohnlers)
  }
}
