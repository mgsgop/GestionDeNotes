
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button10 = {};	// @button
	var button9 = {};	// @button
	var button8 = {};	// @button
	var button7 = {};	// @button
	var button1 = {};	// @button
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants.filterQuery("Nom=:1",qString +"*");
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants3.filterQuery("Nom=:1",qString +"*");
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants2.filterQuery("Nom=:1",qString +"*");
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants1.filterQuery("Nom=:1",qString +"*");
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants.filterQuery("Nom=:1",qString +"*");
	};// @lock

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
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock
