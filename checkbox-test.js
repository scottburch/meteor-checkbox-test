
if (Meteor.isClient) {
    var count = 0;
    Meteor.startup(function() {
        Session.set('count', count++);
    });

    _.extend(Template.form, {
        count: function() {
            return Session.get('count');
        },
        events: {
            'click #update' : function () {
                Session.set('count', count++);
            }
        }
    });
}

