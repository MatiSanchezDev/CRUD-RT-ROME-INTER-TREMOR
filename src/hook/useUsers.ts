import { addNewUser, deleteUserById } from "../store/users/userSlices";
import { useAppDispatch, useAppSelector } from "./store";

export interface User {
   name: string;
   email: string;
   github: string;
}

export interface userWithId extends User {
   id: string;
}

export const useUsers = () => {
   const users = useAppSelector((state) => state.users);
   const dispatch = useAppDispatch();

   const handleRemoveUser = (user: string) => {
      dispatch(deleteUserById(user));
   };

   const addUser = ({ name, email, github }: User) => {
      dispatch(addNewUser({ name, email, github }));
   };

   return {
      handleRemoveUser,
      users,
      addUser,
   };
};
