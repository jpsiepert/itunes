var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your method you want to call in your controller needs to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
    this.getArtist = function(search) {

    	var deferred = $q.defer();
    	$http({
    		method: "JSONP",
    		url: "https://itunes.apple.com/search?term=" + search.artist+ "&media=" + search.type + "&callback=JSON_CALLBACK"
    	})
    	.then(function(data){
    		//debugger;
    		var mainData = data.data.results;
    		deferred.resolve(mainData);
			})
			return deferred.promise;
    }

    
    
});