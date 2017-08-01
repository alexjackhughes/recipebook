// Limits scope to just this template:
Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar(false)
});

// This is all the methods directly related to this template:
Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

// This manages clicks on this template:
Template.Recipe.events({
    'click .toggle-on': function() {
        Meteor.call('toggleMenuOn', this._id, this._inMenu);
    },
    'click .toggle-off': function() {
        Meteor.call('toggleMenuOff', this._id, this._inMenu);
    },
    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil': function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set(!template.editMode.get());
    }
});
