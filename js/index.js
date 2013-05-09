var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('serverName');
		

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
		$("#" + parentElement).html("Server: ");
		$.urlParam = function(name){
		  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(top.window.location.href); 
		  return (results !== null) ? results[1] : 0;
		}

		$("#" + parentElement).html("Servidor: " + $.urlParam("server"));
		
    }
};

