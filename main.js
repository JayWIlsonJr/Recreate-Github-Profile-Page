function renderTemplate(templateId, model, container) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
};


$.getJSON('https://api.github.com/users/jaywilsonjr').done(function(user) {
      $.getJSON('https://api.github.com/users/jaywilsonjr/starred').done(function(starred) {
          user.starred = starred.length;
          renderTemplate('#sidebarImageSection', user, '.imageHolder');
          renderTemplate('#header', user, '.nav_two_avatar');   
      });
});
