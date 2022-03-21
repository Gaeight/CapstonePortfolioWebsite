import resume1 from "./ResumePG1.JPG"
import resume2 from "./ResumePG2.JPG"
import cl from "./CoverLetter.JPG"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Card, CardGroup} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container class="align-items-center">
        <h1 class="bg-light border rounded w-75 p-2 mx-auto">Welcome to Gabriel Silva's webpage!</h1>
        <h3 class="border rounded w-25 mx-auto bg-light" >Bio</h3>
        <p class="bg-light border rounded w-75 mx-auto p-2">
          Hello! My name is Gabriel Silva and I currently attended George Brown College. I enjoy coding and creating websites like
          like the ony you are on now. On this site you can find things about me when it comes to my credentials and what i have 
          to offer as a Computer Programmer Analyst. I've been coding since 2018 and i'm comfortable with Java, C#, HTML, MERN and 
          more. Please feel free to look around and i hope you enjoy your stay.
        </p>
      </Container>
      <Container>
        <h3 class="border rounded w-25 mx-auto bg-light">Resume</h3>
        <img class="p-1" src={resume1}/>
        <img class="p-2" src={resume2}/>
        <h3 class="border rounded w-25 mx-auto bg-light" >Cover Letter</h3>
        <img src={cl}/> 
        <br/>
        <br/>
        <Button class="p-2" href="https://docs.google.com/document/d/1l_clQ2JwVZSOiLhUCcLk2qV8_jq-HOUDXk7zf1PAdxM/edit?usp=sharing">Preview Resume</Button>
        <br/>
        <br/>
        <Button href="https://docs.google.com/document/d/1mWLB7MM-WRIb7NaoE3GwF92-_HdL7P5Wc8qr1YM2rGE/edit?usp=sharing">Preview Cover Letter</Button>
      </Container>
      <br/>
      <Container>
        <h3 class="border rounded w-25 mx-auto bg-light" >Career Goal</h3>
        <p class="bg-light border rounded w-75 mx-auto p-2">
          Ever since i started high school i always wanted to get into the computers. Either making them or working with them,
          I just always had a passion. From there i started a coding class back in 2018 and it was the first step into my carrer 
          path. It's just so enjoyable and enticing to code and create something out of framework. It's one of the most rewarding 
          things i've ever done. Fast-forward a couple of years now im gradutaing and becoming more adavnced in this field and 
          the things you can do is truly remarkable. Right now i just want to further expand and become an expert in either 
          front-end, back-end development or something Unity Engine. I preferably would want to work on Unity Engine more because
          coding and video games have always been a passion of mine. I just want to make something that people would enjoy playing
          and make memories from. 
        </p>
      </Container>
      <Container>
        <h3 class="border rounded w-25 mx-auto bg-light">Academic Work</h3>
        <CardGroup>
          <Card style={{width: '18rem'}}>
            <Card.Body>
              <Card.Title>GraphQL</Card.Title>
              <Card.Text>For this project we were tasked in creating a GraphQL project and adding the schema and resolvers for it</Card.Text>
              <Button href="https://github.com/Gaeight/101245037_comp3133_assig1">Preview Project</Button>
            </Card.Body>
          </Card>
          <Card style={{width: '18rem'}}>
            <Card.Body>
              <Card.Title>Android App: Hourly Wage Calculator</Card.Title>
              <Card.Text>For an assignment we needed to make an android app that was able to calcualte hourly wage</Card.Text>
              <Button href="https://github.com/Gaeight/AndroidProjectAssignment1">Preview Project</Button>
            </Card.Body>
          </Card>
          <Card style={{width: '18rem'}}>
            <Card.Body>
              <Card.Title>Weather Application</Card.Title>
              <Card.Text>This was something we had to work on in class and we used a weather api and linked it with the application</Card.Text>
              <Button href="https://github.com/Gaeight/101245037_comp3123_labtest2">Preview Project</Button>
            </Card.Body>
          </Card>
          <Card style={{width: '18rem'}}>
            <Card.Body>
              <Card.Title>Chat Application</Card.Title>
              <Card.Text>This is a chat app that we had to make using node.js and a MongoDB database</Card.Text>
              <Button href="https://github.com/Gaeight/101245037_lab_test1_chat_app">Preview Project</Button>
            </Card.Body>
          </Card>
          <Card style={{width: '18rem'}}>
            <Card.Body>
              <Card.Title>Name Entry</Card.Title>
              <Card.Text>For this lab we had to use node to make a form entry application</Card.Text>
              <Button href="https://github.com/Gaeight/labweek10/tree/main/labweek10/src">Preview Project</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <br/>
      <Container>
        <h3 class="bg-light border rounded w-50 mx-auto">Capstone Project: ISolveConnect</h3>
        <div class="d-flex flex-row justify-content-center">
          <div class="p-1"><Button href="https://docs.google.com/document/d/1ny-a9d-4wkxJTTKAz8-fciz673RVVgPmoQVyiNayE7c/edit?usp=sharing">Project Summary</Button></div>
          <div class="p-1"><Button href="https://docs.google.com/document/d/1YUssXVw_2Ko98pVaeIGmHnAZ29whgMAIExIVmrsGu_M/edit?usp=sharing">Project Vision</Button></div>
          <div class="p-1"><Button href="https://docs.google.com/document/d/1CZhKR73V9icxwlqscjs2zA0eS6ImxHk5hWrCnviW2mY/edit?usp=sharing">Project Plan</Button></div>
          <div class="p-1"><Button href="https://docs.google.com/document/d/1CZhKR73V9icxwlqscjs2zA0eS6ImxHk5hWrCnviW2mY/edit?usp=sharing">Wireframes/Mocks ups</Button></div>
        </div>
        <h5 class="bg-light border rounded w-25 mx-auto">Status Report</h5>
        <p class="bg-light border rounded w-75 mx-auto p-2">
          The project is mostly on schedule, development of the website has started and the framework of the project is in place. 
          Our team has been able to communicate thoroughly with one another on what has to be done and what is needed for the next deadline. 
          All team members are on track on their responsibilities and an alpha of the product would be ready for testing. 
        </p>
        <h5 class="bg-light border rounded w-25 mx-auto">Project/Business Requirements</h5>
        <p class="bg-light border rounded w-75 mx-auto p-2">
          For this project we need to make a website that allows freelance programmers to post their work and find potential jobs from it.
          They can view offers or send offers to other freelancers or comapnies and also have the ability to communicate with one another.
          Our customers must also get notifications of any new, sent or pending offers. Customers can rate their experience with others. 
          Customers can create their own webpage to customize what they want on it. They can pay or add payment options either through
          paypal or 3rd party crypto payment options. Companies can have their own verified web pages for other customers to know. Companies
          can hand pick which freelancers they want through their ratings and work they have on their web page. Companies need to get notifications
          of new offers or pending offers coming through. Comapines should also be able to rate the freelancers. 
        </p>
        <h5 class="bg-light border rounded w-25 mx-auto">System Implementation</h5>
        <p class="bg-light border rounded w-75 mx-auto">
          For front-end and back-end we decided to use javascript react and bootstrap. These frameworks are ones that the whole team are 
          familair with. It's also very easy to use and flexible so it will help when it comes to creating the project. The database we decided 
          to use was MySQL and MongoDB because these are both databses we are familar with. Especially MongoDB because of how easy it is to Implement
          and how familair the team is with it.
        </p>
        <h5 class="bg-light border rounded w-25 mx-auto">Requirments and Analysis and Design</h5>
        <p class="bg-light border rounded w-75 mx-auto">
          Currently everything is going as plan we are just finishing up what is needed lastly and thats login. When we implement login we also
          need to add authentication to every page so the website can keep track if the user is logged in order to ensure that not anyone can
          just from page to page. 
        </p>
      </Container>
    </div>
  );
}

export default App;
