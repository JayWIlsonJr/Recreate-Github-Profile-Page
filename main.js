function renderTemplate(templateId, model, container) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
};


$.getJSON('https://api.github.com/users/jaywilsonjr').done(function(user) {
  renderTemplate('#sidebarImageSection', user, '.imageHolder');
});
