function renderTemplate(templateId, model, container) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
};


$.getJSON('https://api.github.com/users/jaywilsonjr').done(function(user) {
      $.getJSON('https://api.github.com/users/jaywilsonjr/starred').done(function(starred) {
            $.getJSON('https://api.github.com/users/jaywilsonjr/repos').done(function(repo) {
          user.starred = starred.length;
          renderTemplate('#sidebarImageSection', user, '.imageHolder');
          renderTemplate('#header', user, '.nav_two_avatar');
          

          _.each(repo, function(item){
            console.log(item.name)
            renderTemplate('#repos', item, '.repos_area')
          });
          }); 
      });
});
