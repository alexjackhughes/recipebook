// When you log in, redirects to this page:
Accounts.onLogin(function () {
    FlowRouter.go('recipe-book');
});

// When you log out, redirects to this page:
Accounts.onLogout(function() {
    FlowRouter.go('home');
});

// If user isn't logged in, only allows you to view this page
FlowRouter.triggers.enter([function(context, redirect){
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

// Home:
FlowRouter.route('/', {
    name: 'home',
    action() {
        // automatically redirects when user is logged in
        if(Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        //GAnaltics.pageview();
        BlazeLayout.render('HomeLayout'); // Looks for file name
    }
});

// Recipes:
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        //GAnaltics.pageview(); // Adds Google Analytics
        BlazeLayout.render('MainLayout', {main: 'Recipes'}); // Looks for file name
    }
});

// Individual Recipes
FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'}); // Looks for file name
    }
});

// Menu:
FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

// ShoppingList:
// Menu:
FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
});
