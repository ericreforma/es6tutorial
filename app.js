// Babel and Webpack Tutorial found here https://www.youtube.com/watch?v=X5wTsHRsbIA

// ES6 Tutorial
// https://www.youtube.com/watch?v=RBLIm5LMrmc&index=4&list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv

// classes and inheritance
class User{
	constructor(username, email, password){
		this.username = username;
		this.email = email;
		this.password = password;
	}
	register(){
		console.log(this.username + ' is registered');
	}
	static countUsers(){
		console.log('there are 50 users');
	}
}

let NewUser = new User('Eric', 'sample@example.com', 'mypassword');
NewUser.register();

User.countUsers();

class Member extends User{
	constructor(username, email, password, myPackage){
		super(username, email, password);
		this.myPackage = myPackage;
	}

	getPackage(){
		console.log(this.username + ' is subscribe to standard package');
	}
}

let eric = new Member('Eric', 'email@sample.com', 'mypassword', 'mypackage');

eric.register();

// Template LIterals