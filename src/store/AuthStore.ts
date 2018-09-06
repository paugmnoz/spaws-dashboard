import { observable, action, computed } from 'mobx';


class AuthStore{
    @observable username: string = null;
    @observable password: string = null;
    @observable userRetrieved : any;

    @observable handleChangeEmail:any;
    @observable handleChangePass:any;

    @observable redirectDash: boolean = false ;

    

    @action handleUsername(username: string) {
        this.username = username;
    }

    @action handlePassword(password: string) {
        this.password = password;
    }

    users = observable([
    ]);

    @action register() {
        let storedArray = JSON.parse(localStorage.getItem('userArray'));
        let userArray = [];

        let user = {
            userName: this.username,
            userPassword: this.password,
        };
        console.log(user);
        userArray.push(user);

        let totalArray = userArray;

        ((storedArray != null) ? totalArray = storedArray.concat(userArray) : totalArray = userArray);


        localStorage.setItem('userArray', JSON.stringify(totalArray));
        storedArray = JSON.parse(localStorage.getItem('userArray'))

        this.users = storedArray;
    }

    @action login() {

        let user = {
            userName: this.username,
            userPassword: this.password
        };
        
        let userRetrieved;
        this.users = JSON.parse(localStorage.getItem('userArray'));
        console.log(this.users);

        if (this.users.some((elem) => elem.userName === user.userName)) {
            console.log('encontre alguno');
            if (this.users.some(elem => elem.userPassword === user.userPassword)) {
                userRetrieved =
                    this.users.find(elem => elem.userName === user.userName
                        && elem.userPassword === user.userPassword);
                    console.log(userRetrieved + "asdasd");
                if (typeof userRetrieved != "undefined") {
                    console.log ("You are in: " + userRetrieved.userName);
                    this.userRetrieved = userRetrieved;
                    localStorage.setItem('userRetrieved', JSON.stringify(userRetrieved));
                    this.redirectDash = true;
                }
            } else {
                console.log("Authentication error: The email and the password doesn't match.");

            }

        } else {
            console.log("Authentication error: This email isn't registered.");
        }
    }
 }

 export const authstore = new AuthStore;