import { Button, Card, TextInput, Title } from "@tremor/react";
import { toast } from "sonner";
import { useUsers } from "../../hook";

export const CreateNewUser = () => {
   const { addUser } = useUsers();
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const github = formData.get("github") as string;

      if (!name || !email || !github) {
         toast.error("Faltan campos por completar");
         return;
      }

      addUser({ name, email, github });
      toast.success("Guardado Correctamente");
      form.reset();
   };

   return (
      <Card className="max-w-[70%] min-w-[30%] mt-10 animate-fade animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-out">
         <Title className="mb-3">Create New User</Title>
         <form onSubmit={handleSubmit}>
            <TextInput name="name" placeholder="Aquí tu nombre" />
            <TextInput name="email" placeholder="Aquí tu Email" />
            <TextInput name="github" placeholder="Aquí tu Github" />
            <div>
               <Button type="submit" style={{ marginTop: "16px" }}>
                  Crear usuario
               </Button>
               {/* <span>
                  {result === "ok" && (
                     <Badge className="text-md md:text-xl text-green-700 ml-3 bg-green-300 rounded-lg animate-fade animate-once animate-duration-[200ms] animate-delay-200 animate-ease-out">
                        Guardado Correctamente
                     </Badge>
                  )}
                  {result === "ko" && (
                     <Badge className="text-sm md:text-xl text-red-700 ml-3 bg-red-300 rounded-lg animate-fade animate-once animate-duration-[200ms] animate-delay-200 animate-ease-out">
                        Faltan campos por completar
                     </Badge>
                  )}
               </span> */}
            </div>
         </form>
      </Card>
   );
};
