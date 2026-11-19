
// import Image from "next/image"
// export default function page(){
//   return(
//     <div>
//     <Image
//     src="/favicon.ico"
//     alt="img"
//     height="50"
//     width="50"
//     />
//     <p></p>
//     <p>student</p>
//     <p>contact : 47877-86873</p>
//     </div>
    
//   )
// }
//props: (property) props are the arguements passed into 
//react components,props are passed to components via HTML 
//attributes .props stands for properties.

// function User({name , age, email}){
//   return(
//     <>d
//     <p> hello , iam {name}</p>
//     <p> my age: {age}</p>
//     <p> my email : {email}</p>
//     </>
//   )
// }
//rendering list: displaying multiple pieces of data from an array
//let arr= [23,24,25]
//map,reduce,filter
//export default function page(){
 // const arr=["apple","banana","orange"]

//  export default function page(){
//  const fruit =["apple","banana","orange"]
//  return(
//   <div>
//    {fruit.map((fruit) => (
//     <h3>{fruit}</h3>
//    ))}
//   </div>
//  )
//   }

  // export default function page() {
  //   const student=[
  //      {id: 1, name: "rahul", age: 20},
  //      {id: 2, name: "anita", age: 21},
  //      {id: 3, name: "kiran", age: 22},
  //   ];
  //   return(
  //     <div>
  //       {student.map((student) => (
  //         <div key={student.id}>
  //          <h3>{student.name}</h3>
  //          <p>age: {student.age}</p>
  //         </div>
  //       ))}
  //     </div>
  //   )
    
  // }

 
  // function Greeting ({isLoggedIn}) {
  //   let isLoggedIn v= false
  //   return
  //   <h1>{isLoggedIn ? "welcome back" : "please sign in"}
  //   </h1>;
  // }
  // HW:-
  //ternary operator
  //props :try basic questions
  //rendering links
  //map function injs and react compo
//   const conferenceData = {
//   name: "React Summit 2026",
//   maxCapacity: 5,
//   attendees: [
//     { id: 1, name: "Alice Johnson", role: "Speaker", isCheckedIn: true, isVIP: true },
//     { id: 2, name: "Bob Smith", role: "Attendee", isCheckedIn: false, isVIP: false },
//     { id: 3, name: "Charlie Davis", role: "Volunteer", isCheckedIn: true, isVIP: false },
//     { id: 4, name: "Diana Prince", role: "Speaker", isCheckedIn: false, isVIP: true },
//     { id: 5, name: "Evan Wright", role: "Attendee", isCheckedIn: true, isVIP: false },
//   ]
// };


// export default function Home() {
//   return (
//     <div className="app">
//       <h1>{conferenceData.name} Dashboard</h1>
//       {/* TODO: Add components and logic here */}
//     </div>
//   );
// }

//state management
// import State from "./state";

// export default function Home() {
//   return(
//     <>
//     <State />
//     </>
//   )
// }
// "use Client"
// import {useState} from "react"
// export default function  form(){
//   return(
//     <div>
//       <input type="text" placeholder="enter your name"/>
//       <br />
//       <input type="text" placeholder="enter your email"/>
//       <br />
//       <button>submit</button>
//     </div>
//   )
// }

// import State from './state'
// import Navbar from "./navbar";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="hero">

//         <img
//           src="/waste-bins.jpg"
//           alt="Colorful waste bins"
//           className="hero-image"
//         />

//         <h1>Let's Make Our City Cleaner!</h1>

//         <p>
//           Report waste in public places and help
//           keep your surroundings clean.
//         </p>

//         <a href="/report" className="report-btn">
//           Report Waste
//         </a>
//       </section>

//       {/* About Section */}
//       <section className="about" id="about">
//         <h2>About CleanCity</h2>

//         <p>
//           CleanCity is a smart waste management
//           platform that helps people report waste
//           problems and keep their surroundings clean.
//         </p>
//       </section>

//       {/* Services Section */}
//       <section className="services" id="services">
//         <h2>Our Services</h2>

//         <div className="service-container">

//           <div className="service-card">
//             <h3>🗑 Waste Reporting</h3>
//             <p>Report garbage in public places.</p>
//           </div>

//           <div className="service-card">
//             <h3>📋 Complaint Tracking</h3>
//             <p>Track the status of your complaints.</p>
//           </div>

//           <div className="service-card">
//             <h3>🚛 Waste Collection</h3>
//             <p>Support timely waste removal.</p>
//           </div>

//           <div className="service-card">
//             <h3>🌱 Clean Environment</h3>
//             <p>Promote a cleaner and greener city.</p>
//           </div>

//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <p>© 2026 CleanCity. Keep Our City Clean!</p>
//       </footer>

//     </main>
//   );
// }


// "use client";

// import { useState } from "react";
// import "./app.css";

// export default function Home() {
//   const [active, setActive] = useState("Home");

//   return (
//     <div className="main">

//       <header>
//         <h2>CleanCity</h2>

//         <nav>
//           <button onClick={() => setActive("Home")}>Home</button>
//           <button onClick={() => setActive("About")}>About</button>
//           <button onClick={() => setActive("Login")}>Login</button>
//         </nav>
//       </header>

//       <div className="content">

//         {active === "Home" && (
//           <section className="home">
//             <h1>A Cleaner City Starts With You!</h1>
//             <p>
//               Keep our surroundings clean and make our city
//               a better place to live.
//             </p>
//             <h3>Reduce Waste. Reuse More. Recycle Better.</h3>
//           </section>
//         )}

//         {active === "About" && (
//           <section className="about">
//             <h1>About Us</h1>
//             <p>
//               CleanCity is a waste management system that
//               encourages people to keep their surroundings clean.
//             </p>
//             <h3>Our Objectives</h3>
//             <ul>
//               <li>Reduce waste in our surroundings.</li>
//               <li>Promote waste segregation.</li>
//               <li>Encourage recycling and reuse.</li>
//               <li>Create a cleaner and greener environment.</li>
//             </ul>
//           </section>
//         )}

//         {active === "Login" && (
//           <section className="login">
//             <h1>Login</h1>
//             <p>Welcome to CleanCity</p>

//             <form>
//               <input type="text" placeholder="Enter Username" />
//               <input type="password" placeholder="Enter Password" />
//               <button type="button">Login</button>
//             </form>
//           </section>
//         )}

//       </div>

//     </div>
//   );
// }

// 
"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Home");

  return (
    <div className="main">

      <header>
        <h2>CleanCity</h2>

        <nav>
          <button onClick={() => setActive("Home")}>Home</button>
          <button onClick={() => setActive("About")}>About</button>
          <button onClick={() => setActive("Login")}>Login</button>
        </nav>
      </header>

      <div className="content">

        {active === "Home" && (
          <section className="home">
            <h1>A Cleaner City Starts With You!</h1>
            <p>
              Keep our surroundings clean and make our city
              a better place to live.
            </p>
            <h3>Reduce Waste. Reuse More. Recycle Better.</h3>
          </section>
        )}

        {active === "About" && (
          <section className="about">
            <h1>About Us</h1>
            <p>
              CleanCity is a waste management system that
              encourages people to keep their surroundings clean.
            </p>

            <h3>Our Objectives</h3>
            <ul>
              <li>Reduce waste in our surroundings.</li>
              <li>Promote waste segregation.</li>
              <li>Encourage recycling and reuse.</li>
              <li>Create a cleaner environment.</li>
            </ul>
          </section>
        )}

        {active === "Login" && (
          <section className="login">
            <h1>Login</h1>
            <p>Welcome to CleanCity</p>

            <form>
              <input type="text" placeholder="Enter Username" />
              <input type="password" placeholder="Enter Password" />
              <button type="button">Login</button>
            </form>
          </section>
        )}

      </div>
    </div>
  );
}

