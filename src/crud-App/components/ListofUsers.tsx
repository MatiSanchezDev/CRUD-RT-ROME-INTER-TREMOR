import {
   Card,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeaderCell,
   TableRow,
} from "@tremor/react";
import { toast } from "sonner";
import { useUsers } from "../../hook/useUsers";
export function ListOfUsers() {
   const { users, handleRemoveUser } = useUsers();

   return (
      <Card className="w-[70%] animate-fade animate-once animate-duration-[1000ms] animate-delay-200 animate-ease-out">
         <Table className="animate-fade-right animate-once animate-duration-[1000ms] animate-delay-200 animate-ease-out">
            <TableHead>
               <TableRow>
                  <TableHeaderCell>Id</TableHeaderCell>
                  <TableHeaderCell>Nombre</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Acciones</TableHeaderCell>
               </TableRow>
            </TableHead>

            <TableBody>
               {users.map((item) => (
                  <TableRow key={item.name}>
                     <TableCell>{item.id}</TableCell>
                     <TableCell
                        style={{
                           display: "flex",
                           alignItems: "center",
                        }}
                     >
                        <img
                           style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              marginRight: "8px",
                           }}
                           src={`https://unavatar.io/github/${item.github}`}
                           alt={item.name}
                        />
                        {item.name}
                     </TableCell>
                     <TableCell>{item.email}</TableCell>
                     <TableCell>
                        <button type="button">
                           <a
                              href={`https://github.com/${item.github}`}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div>
                                 <svg
                                    aria-hidden="true"
                                    className="octicon octicon-mark-github"
                                    height="24"
                                    version="1.1"
                                    viewBox="0 0 16 16"
                                    width="24"
                                    role="icon"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       role="icon"
                                       d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                    />
                                 </svg>
                              </div>
                           </a>
                        </button>
                        <button
                           onClick={() => {
                              toast("Usuario Eliminado");
                              handleRemoveUser(item.id.toString());
                           }}
                           type="button"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                              role="icon"
                              aria-label="Remove element"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                           </svg>
                        </button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </Card>
   );
}
