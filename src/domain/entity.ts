// example entities

import { v4 as uuidv4 } from 'uuid';

export interface IProfile {
    id: string;
    tgId: string;
    fullName: string;
    userName: string;
    status: string;
    pricePerHour: number;
    isPremium: boolean;
    advancedAccount: boolean;
    registeredAt: Date;
    lastPayedDate: string | Date;
    jobPreferences?: string;
    subjects?: Array<String>;
}


export class NewProfile implements IProfile {
    id: string;
    tgId: string;
    fullName: string;
    userName: string;
    status: string;
    pricePerHour: number;
    isPremium: boolean;
    advancedAccount: boolean;
    registeredAt: Date;
    lastPayedDate: string | Date;
    jobPreferences?: string;
    subjects?: Array<String>;

    constructor(tgId: number,
                fullName: string,
                userName: string,
                pricePerHour: number,
                isPremium: boolean,
                jobPreferences?: string,
                subjects?: Array<String>
    ) 
    {
        this.id = uuidv4().toString();
        this.tgId = btoa(tgId.toString());
        this.fullName = fullName;
        this.userName = userName;
        this.pricePerHour = pricePerHour;
        this.isPremium = isPremium;
        this.advancedAccount = false;
        this.registeredAt = new Date();
        this.lastPayedDate = "None";
        this.jobPreferences = (jobPreferences === null) ? null : jobPreferences;
        this.subjects = (subjects === null) ? null : subjects;
    }
}


export class Profile implements IProfile {
    readonly id: string;
    readonly tgId: string;
    readonly fullName: string;
    readonly userName: string;
    readonly status: string;
    readonly pricePerHour: number;
    readonly isPremium: boolean;
    readonly advancedAccount: boolean;
    readonly registeredAt: Date;
    readonly lastPayedDate: string | Date;
    readonly jobPreferences?: string;
    readonly subjects?: Array<String>;
    tgUrl: string;

    constructor(id: string,
                tgId: string, 
                fullName: string, 
                username: string,
                pricePerHour: number,
                isPremium: boolean,
                advancedAccount: boolean,
                registeredAt: Date,
                subjects: Array<String>,
                jobPreferences?: string) 
        {
            this.id = id;
            this.tgId = tgId;
            this.fullName = fullName;
            this.userName = username;
            this.pricePerHour = pricePerHour;
            this.isPremium = isPremium;
            this.advancedAccount = advancedAccount;
            this.registeredAt = registeredAt;
            this.jobPreferences = jobPreferences;
            this.subjects = subjects;
            this.tgUrl = this.createTelegramUrl(username);
        }

        private createTelegramUrl(username: string) {
            return "https://t.me/" + username;
        } 
}