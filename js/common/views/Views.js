var UserTableRowView = Backbone.View.extend({
    template: _.template("<td> <%=director_name%></td><td> <%=movie_name%> </td><td><%=location%></td>"),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    
        return this;
    }
});



var indexRow = 0;
var TableView = Backbone.View.extend({
    initialize: function (options) {

        var _this = this;

        this.$el.append(
        "<center><span class='loading'><img src=\"images/loadingImage.gif\" alt=\"Loading...\" class=\"img-responsive\" style=\"margin: 0 auto;\"></span></center>");
        this.model.on('reset', function () {
            _this.$el.constructor(".loading").remove(); 
            _this.render();
        });
    },

    render: function () {

        var self = this;
        this.rowViews = {}; 
        container = $('<div/>');
      
        var containerBox = $("<div class=\"col-lg-12\">").append("<align=\"right\"><div id =\"div-wrap\" class=\"DivWrap\" style=\"margin-top:20px\" /> ");
        
        containerBox.find('.DivWrap').append("<div class=\"table-responsive \" id =\"tableWrap\"/>");

        containerBox.find('.table-responsive').append("<h3>  Details </h3> <table id=\"tableContent\" class=\"table table-striped table-condensed display\" />");
        containerBox.find('.table').append("<thead> <tr> <th>Director Name </th><th> Movie Name</th><th> City</th></tr></thead>");

        this.model.each(function (model, index, data) {
            var UrowView = new UserTableRowView({
                tagName: 'tr',
                model: model    

            })
            containerBox.find('.table').append(UrowView.render().$el);

            container.append(containerBox);

            indexRow++;
            
        });
        

        this.$el.append(container.children());

       

    }
});
