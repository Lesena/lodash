'use strict';
$(function (){

   function RD(){
       //exchange token 
   $.getJSON("https://brootle.github.io/js_19_20_lodash/data.json")
        .done(function (data, textStatus, jqXHR) {
		     localStorage.setItem('users', JSON.stringify(data));
			 })
	     .fail(function (jqXHR, textStatus, errorThrown) {

            
             console.log(errorThrown.toString());
         });
		 }
		 RD();
		  var users = localStorage.getItem('users'); // get JSON formatted string from local storage

    users = JSON.parse(users); // convert JSON format string to JavaScript object   

    console.log(users); 
	var skills = _.mapValues(users, 'skills');
    var skillsList = []; 
	_.forOwn(skills, function(value, key) {
        skillsList = _.concat(skillsList,value);
    });

    skillsList = _.sortBy(_.uniq(skillsList));
    console.log(skillsList);
	
    var usersByFriends = new Object;
    usersByFriends = _.sortBy(users, [function(o) { return o.friends.length; }]);
    console.log(usersByFriends); // print new sorted Object
    var usersByFriendsList = [];
    usersByFriendsList = _.toArray(_.mapValues(usersByFriends, 'name'));
    console.log(usersByFriendsList);
 
    var friendsNames = _.mapValues(users, 'friends');
    var friendsNamesList = []; 

    _.forOwn(friendsNames, function(value, key) {
        friendsNamesList = _.concat(friendsNamesList, (_.values(_.mapValues(value, 'name'))));
    });    

    friendsNamesList = _.sortBy(_.uniq(friendsNamesList));
    console.log(friendsNamesList);
   
})
