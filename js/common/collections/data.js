
var nonEnglishDataCollection = Backbone.Collection.extend({
    model: nonEnglishDataModel,
    url: 'json/OtherMovie.json'
});     
var EnglishDataCollection = Backbone.Collection.extend({
    model: EnglishDataModel,
    url: 'json/EnglishMovie.json'
});

