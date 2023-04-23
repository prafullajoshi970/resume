import React from  "react"

function App() {
  
  //       <hr/>
	// 	<section>
	// 		<h2>Experience</h2>
	// 		<h3>Software Intern</h3>
	// 		<p>June 2022 - Present</p>
	// 		<ul>
	// 			<li>Develop and maintain web applications using ReactJs</li>
	// 			<li>Collaborate with team members to identify and solve technical challenges</li>
	// 			<li>Contribute to the development of Realtime web Applications</li>
	// 		</ul>
			
	// 	</section>
  //       <hr/>
	// 	<section>
	// 		<h2>Education</h2>
	// 		<h3>Bachelor of Electrinics and Telecommunication, University of Pune</h3>
  //         </section>
		  

  return (
   React.createElement('div',{className:''},

  //  div1
   React.createElement('div',{className:"header"},
   React.createElement('h1' ,{},'Prafulla Joshi'),
   React.createElement('p',{},'Software developer'),
   ),

React.createElement('hr'),
   React.createElement('div',{},
   React.createElement('h2',{},'Summary'),
   React.createElement('p',{},'Highly motivated and results-driven software engineer with over 5 years of experience in developing web applications. Strong problem-solving skills and ability to work effectively in a team environment.')),
   
   React.createElement('hr'),
   React.createElement('div',{},
   React.createElement('h2',{},'Skills'),
   React.createElement('li',{},'Proficient in HTML, CSS, and JavaScript'),
   React.createElement('li',{},'Strong understanding of web development best practices'),
   React.createElement('li',{},'Experience with ReactJs'),
   React.createElement('li',{},'Excellent problem-solving and analytical skills'),
   ),

   React.createElement('hr'),
   React.createElement('div',{},
   React.createElement('h2',{},'Experience'),
   React.createElement('h3',{},'Software Intern'),
   React.createElement('p',{},'June 2022 - Present'),
   React.createElement('li',{},'Develop and maintain web applications using ReactJs'),
   React.createElement('li',{},'Collaborate with team members to identify and solve technical challenges'),
   React.createElement('li',{},'Contribute to the development of Realtime web Applications'),

   ),

   React.createElement('hr'),
   React.createElement('div',{},
   React.createElement('h2',{},'Education'),
   React.createElement('p',{},'Bachelor of Electrinics and Telecommunication, University of Pune'),
   
   ),
   
   )

  );
}

export default App;
