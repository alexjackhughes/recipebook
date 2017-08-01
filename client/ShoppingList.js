// Subscribe to Recipes Mongo collection:
Template.ShoppingList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

// Methods for interacting with data, i.e. domain logic of application
Template.ShoppingList.helpers({
    // find only inMenu true items
    shoppingList: ()=> {
        return Recipes.find({inMenu: true});
    }
});
