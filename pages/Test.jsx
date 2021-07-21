// import React, { useState } from 'react'

// export const  test = () => {
  
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [filter,setFilter] = useState('全て')

  
//   const Fighters =[{sex:"男性",name:"堀口"},{sex:"女性",name:"浜崎"},{sex:"男性",name:"井上"},{sex:"男性",name:"那須川"},{sex:"男性",name:"DJ"}]

//   const newFighters = Fighters.filter(fighter=>{
//     if(filter === 'すべて')return fighter
//     if(filter === '男性')return fighter.sex ==='男性'
//     if(filter === '女性')return fighter.sex === '女性'
//   })
  

//   return (
//     <>
//       <p>これは試験的に導入したコンポーネントです</p>
//       <select
//         defaultValue="全て"
//         onChange={(e) => setFilter(e.target.value)}
//         >
//         <option value="全て">全て</option>
//         <option value="男性">男性</option>
//         <option value="女性">女性</option>
//       </select>

//       <ul>
//       {newFighters.map((fighter,index)=>{
//           return(
//               <li key={index}>
//                 {index}人目のfighterは{fighter.name}です
//                 </li>
              
//               ) 
//             })}
//             </ul>
//     </>
//   )
// }

// export default test
