import { createContext, useContext } from "react";
import ActivityStore from "./activitystore";
import CommonStore from "./commonStore";
import UserStore from "./UserStore";
import ModalStore from "./modalStore";
import ProfileStrore from "./profileStore";
import CommentStore from "./commentStore";

interface Store{
 activityStore:ActivityStore;
 commonStore:CommonStore;
 userStore : UserStore;
 modalStore :ModalStore;
 profileStore:ProfileStrore
 commentStore :CommentStore;
}

export const store:Store={
    activityStore:new ActivityStore(),
    commonStore: new CommonStore(),
    userStore : new UserStore(),
    modalStore : new ModalStore(),
    profileStore:new ProfileStrore(),
    commentStore : new CommentStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}