
var ApplicationRouter = Backbone.Router.extend({
    routes: {

        "nonEnglish": "nonEnglishDetails",
        "English": "EnglishDetails",
        "": "defaultForm"

    },


    defaultForm: function(){
    var formView = new FormView({
        el: $('#bodyForm')
            });
    },

    nonEnglishDetails: function () {
        var uData = new nonEnglishDataCollection();
       
       $('#containerDetails').html("");

       $('#bodyForm').css('display', 'block');
        $('#containerDetails').css('display', 'block');
        
       var tableView = new TableView({
            el: $('#containerDetails'),
            model: uData// DataCollection()
        });
        uData.fetch();
       

    },

    EnglishDetails: function() {
        var uData = new EnglishDataCollection();
       
    $('#containerDetails').html("");
       
    $('#containerDetails').css('display', 'block');
        
    var tableView = new TableView({
        el: $('#containerDetails'),
        model: uData// DataCollection()
    });
    uData.fetch();
       

    }


    

});

 