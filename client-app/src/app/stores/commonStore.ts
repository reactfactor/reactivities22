import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
    error: ServerError | null = null;
    // as soon as we logged in -> get the token from localStorage
    token: string | null = window.localStorage.getItem('jwt');

    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if (token) {
                    window.localStorage.setItem('jwt',token)
                } else {
                    window.localStorage.removeItem('jwt')
                }
            }
        )
    }
    setServerError = (error: ServerError) => {
        this.error = error;
    }
    setToken = (token: string | null) => {
        if (token) window.localStorage.setItem('jwt', token);
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

}