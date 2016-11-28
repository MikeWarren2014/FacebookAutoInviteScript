// Facebook auto-invite script
// Author: Michael Warren
// Author contact: mwarren04011990@gmail.com
// Date: October 17, 2016
// TODO: include jQuery somehow. jQuery will not be undefined if successful.
// TODO: this StackOverflow question, http://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console , contains two ways to do that.
// Before running this script, copy and paste from http://code.jquery.com/jquery-latest.min.js into your Developer Console.
var $ = jQuery,
	// names of people you don't want to invite go here. They must be spelled out perfectly or this won't work. Right now, excludeList is set with prompt
	excludeList = trim(prompt("Enter list of Facebook names of people you wish to exclude from invite, delimited by \",\". You need not enter the full name unless there are two or more people of the same name on your friends' list.", "Sam Smith, Joe Sample"))
		.split(/\s*,\s*/), 	
	comparisonTypes = {
		exactMatch: function(str, arrayOfStrings) { 
			return $.inArray(str, arrayOfStrings); 
		},
		indexOfElementContaining : function(str, arrayOfStrings) { 
			var i = -1;
			$(arrayOfStrings).each(function(index, element) {
				if (element.toLowerCase().contains(str.toLowerCase())) 
				{
					return (i = index);
				}
			});
			return i;
		}
	},
	inputs = $('.uiButton._1sm').filter(function() {
		return (comparisonTypes.indexOfElementContaining($(this).parents('._42ef').find('.text').text(), excludeList) == -1);
	});
inputs.each(function() { $(this).click(); });
