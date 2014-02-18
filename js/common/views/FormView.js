
var FormView = Backbone.View.extend({

    
    events: {
        'click button#submitBtn': 'verify'
    },
    initialize: function () {

        _.bindAll(this, 'render', 'verify'); // remember: every function that uses 'this' as the current object should be in here
       
       

        this.counter = 0;
        this.render();
    },

    render: function () {

        var self = this;

        
        $(this.el).append("<div class=\"table-responsive \" />");
        $('.table-responsive').append("<table id =\"t1\"><tr id=\"tableRow1\"><td><label id=\"movieTypeLbl\" style=\"margin-right:10px;\">Movie Type:</label></td><td><div class=\"form-group\" style=\"margin-top:15px;  width:200px;\"><select class=\"form-control\" id=\"movieType\" style=\"font-weight: lighter;  color: #2679b5;\"><option>Comedy</option><option>Drama</option><option>Play</option><option>Action</option></select></div></td></tr>");
        $('#t1').append("<tr id=\"tableRow2\"><td> <label id=\"movieLangaugeLbl\" style=\"margin-right:10px;\">Movie Langauge:</label></td><td><div class=\"form-group\" style=\"margin-top:15px;  width:200px;\"><select class=\"form-control\" id=\"movieLangauge\" style=\"font-weight: lighter;  color: #2679b5;\"><option>English</option><option>Non-English</option></select></div></td></tr>");
        $('#t1').append("<tr id=\"tableRow3\"><td> <label id=\"movieLocationsLbl\" style=\"margin-right:10px;\">Movie Location:</label></td><td><div class=\"form-group\" style=\"margin-top:15px;  width:200px;\"><select class=\"form-control\" id=\"movieLangauge\" style=\"font-weight: lighter;  color: #2679b5;\"><option>New york</option><option>LA</option><option>Las Vegas</option></select></div></td></tr>");
        $('#t1').append("<tr><td><button class =\"btn btn-info page-header\" id='submitBtn'>Show Details</button></td></tr></table>");
        
    },
    verify: function () {
        var englishLanguage = "English";
        var e = document.getElementById("movieLangauge");
        var selectedLanguage = e.options[e.selectedIndex].value;

        if (selectedLanguage != englishLanguage) {
            Backbone.history.navigate("#nonEnglish", true);
           // window.location.href = 'index.html#nonEnglish';
        }
        else {
            Backbone.history.navigate("#English", true);
           // window.location.href = 'index.html#English';
        }
    }
});



