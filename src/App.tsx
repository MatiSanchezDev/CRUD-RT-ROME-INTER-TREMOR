import { Toaster } from "sonner";
import { CreateNewUser, ListOfUsers } from "./crud-App";

export const App = () => {
   return (
      <div>
         <div className="flex flex-col justify-center items-center m-10">
            <h1 className="animate-fade animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-out text-4xl md:text-6xl mb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
               Lista de usuarios
            </h1>
            <ListOfUsers />
            <CreateNewUser />
            <Toaster position="top-center" richColors expand={false} />
         </div>
      </div>
   );
};
