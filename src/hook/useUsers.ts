import { deleteUserById } from "../store/users/userSlices";
import { useAppDispatch, useAppSelector } from "./store";

export const useUsers = () => {
   const users = useAppSelector((state) => state.users);
   const dispatch = useAppDispatch();

   const handleRemoveUser = (user: string) => {
      dispatch(deleteUserById(user));
   };

   return {
      handleRemoveUser,
      users,
   };
};
