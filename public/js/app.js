App = Ember.Application.create();

App.Router.map(function() {
    this.resource('list');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('list');
    }
});

App.ListRoute = Ember.Route.extend({
    model: function() {
        return App.List.find();
    }
});

App.ListController = Ember.ArrayController.extend({
    toggleProperty: function(){
        console.log(this.get('store').toString())
    }
});

App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.RESTAdapter'
});

App.List = DS.Model.extend({
    name : DS.attr('string'),
    priority : DS.attr('string'),
    shop : DS.attr('string'),
    note : DS.attr('string'),
    area : DS.attr('string')
});

App.List.FIXTURES = [
    {
        id: 1,
        name: 'Smoked mackerel',
        priority: 'low',
        shop: 'Whole Food Market',
        note: 'Awesome fish!!!',
        area: 'fish'
    },
    {
        id: 111,
        name: 'Smoked mackerel high',
        priority: 'high',
        shop: 'Whole Food Market',
        note: 'Awesome fish!!!',
        area: 'fish'
    },
    {
        id: 2,
        name: 'Vegan cheese',
        priority: 'low',
        shop: 'Whole Food Market',
        area: 'vegetables'
    },
    {
        id: 222,
        name: 'Vegan cheese high',
        priority: 'high',
        shop: 'Whole Food Market',
        area: 'vegetables'
    },
    {
        id: 3,
        name: 'Bagel',
        priority: 'low',
        shop: 'Tesco',
        area: 'fish'
    },
    {
        id: 4,
        name: 'Bulmers',
        priority: 'low',
        shop: 'Tesco',
        area: 'meat'
    },
    {
        id: 444,
        name: 'Bulmers high',
        priority: 'high',
        shop: 'Tesco',
        area: 'meat'
    },
    {
        id: 5,
        name: 'Fresh fish',
        priority: 'low',
        shop: 'Whole Food Market',
        area: 'cleaning'
    },
    {
        id: 555,
        name: 'Fresh fish high',
        priority: 'high',
        shop: 'Whole Food Market',
        area: 'cleaning'
    },
    {
        id: 6,
        name: 'Potatoes',
        priority: 'low',
        shop: 'Green grocer Southfields',
        area: 'vegetables'
    }
];