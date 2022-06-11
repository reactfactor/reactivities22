import { Profile } from "./profile";

export interface Activity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    city: string;
    venue: string;
    hostUsername: string; //V171
    isCancelled: boolean; //V171
    isGoing: boolean;//V173
    isHost: boolean;//V173
    host?: Profile;    //V173
    attendees: Profile[]; //V171
}

export class Activity implements Activity {
    constructor(init?: ActivityFormValues) {
        Object.assign(this, init); // assign all fields to Activity 
    }
}
export class ActivityFormValues {
    id?: string = undefined;
    title: string ='';
    category: string = '';
    description: string = '';
    date: Date | null = null;
    city: string ='';
    venue: string = '';
    
    constructor(activity?: ActivityFormValues) {
        if (activity) {
            this.id = activity.id;
            this.title = activity.title;
            this.category = activity.category;
            this.description = activity.description;
            this.date = activity.date;
            this.city = activity.city;
            this.venue = activity.venue;
        }
    }
}
