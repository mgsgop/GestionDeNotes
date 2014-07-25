
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants4.filterQuery("Niveau=:1","LAUREAT");
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants3.filterQuery("Niveau=:1","INE3");
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants2.filterQuery("Niveau=:1","INE2");
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants1.filterQuery("Niveau=:1","INE1");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock
