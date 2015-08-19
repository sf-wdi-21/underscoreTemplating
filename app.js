// same as `$(document).ready`, it will only run once the document loads
$(function(){
  //create our octocat template
  octocatTemplate = _.template($('#octocat-template').html());
  // data is defined in data.js
  octocats = data.octocats;
  // get our template to give us an html string for each octocat
  octocats.forEach(function(octocat){
    // give our template some data and get html from it
    var octocatHtml = octocatTemplate(octocat);
    // append resulting html to the placeholder area
    $("#octocats-placeholder").append(octocatHtml);
  });
});