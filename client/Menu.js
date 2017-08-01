// Subscribe to Recipes Mongo collection:
Template.Menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

// Methods for interacting with data, i.e. domain logic of application
Template.Menu.helpers({
    // find only inMenu true items
    recipes: ()=> {
        return Recipes.find({inMenu: true});
    }
});
