// How to create a new collection of Mongo Documents:
Recipes = new Mongo.Collection('recipes');

// OnGoWorks handles security without Insecure
Recipes.permit(['insert', 'update', 'remove']).ifLoggedIn();

// Rules:
Recipes.allow({
    // If signed in, you're allowed to post recipe:
    insert: function(userId, doc) {
        return !!userId;
    },
    // If signed in, Allows you to update recipe:
    update: function(userId, doc) {
        return !!userId;
    }
});

// Schemas:
Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Description"
    },
    ingredients: {
        // By making field an array, adds multiple fields
        type: [Ingredient]
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    },
    inMenu: {
        type: Boolean,
        defaultValue: false, // should be auto value right?
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    toggleMenuOn: function(id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: true
            }
        });
    },
    toggleMenuOff: function(id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: false
            }
        });
    },
    deleteRecipe: function(id) {
        Recipes.remove(id);
    }
});

// Add Schemas:
Recipes.attachSchema( RecipeSchema );
