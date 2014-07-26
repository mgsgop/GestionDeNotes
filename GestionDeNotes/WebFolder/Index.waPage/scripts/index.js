
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var button4 = {};	// @button
	var button5 = {};	// @button
	var button6 = {};	// @button
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		waf.sources.Etudiants1.filterQuery("Nom=:1",'qString'+'*');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants.filterQuery("Nom=:1",'qString'+'*');
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants2.filterQuery("Nom=:1",'qString'+"*");
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants3.filterQuery("Nom=:1",'qString'+"*");
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		waf.sources.Etudiants4.filterQuery("Nom=:1",'qString'+"*");
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
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock
