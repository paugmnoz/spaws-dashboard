import { observable, action, computed } from 'mobx';


class AuthStore{
    @observable username: string;
    @observable password: string;
    @observable handleChangeEmail:any;
    @observable handleChangePass:any;

 }

 export const authstore = new AuthStore;