import React from 'react';

import ChallengeThree from './components/ChallengeThree.js';

function Challenge (){
  return(
    <div>
      <ChallengeThree/>
    </div>
  )
 }

export default Challenge


// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import UserTable from ''

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const onSubmit = data => console.log(data);

//   return (

//     <form onSubmit={handleSubmit(onSubmit)}>

//       <input type="text" placeholder="Nombre" name="Nombre" ref={register} value={name} onInput={e => setName(e.target.value)} />
//       <input type="text" placeholder="Descripción" name="Descripcion" ref={register} value={description} onInput={ed => setDescription(ed.target.value)} />
//       <input type="submit" />
//       <table className="table table-bordered table-dark mt-5" >
//         <body>
//           <th scope="col-3 right">Nombre</th>
//           <th scope="col">Descripcion</th>
//           <tr>
//             <UserTable />
//           </tr>
//         </body>
//       </table>
//     </form>
//   )
// }
