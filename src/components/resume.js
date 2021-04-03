import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img from '../img/Sudarshan-img.jpeg';
import { Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import Certifications from './Certifications';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className='resume-left-col' col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                className='avatar-img'
                src={img}
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Sudarshan Suryaprakash</h2>
            <h4 style={{ color: 'grey' }}>Developer | Programmer </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Strong background in Computer Science. Extreme interest and skill
              at Full Stack Development. Interest in non-fiction books. Interest
              in Management and Marketing sciences.
            </p>
            <p>
              {' '}
              Currently persuing a Masters of Science degree in Management.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

            <h5>Phone</h5>
            <p>07392785497</p>
            <h5>Email</h5>
            <p>sudarshansprakash@gmail.com</p>
            <h5>Web</h5>
            <a
              href='https://sudarshansuryaprakash.github.io/JobApplication'
              rel='noopener noreferrer'
              target='_blank'
            >
              HTML website
            </a>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>

          <Cell className='resume-right-col' col={8}>
            <h2>Skills</h2>
            <Skills skill='Javascript' progress={95} />
            <Skills skill='HTML5/CSS3' progress={90} />
            <Skills skill='Sass' progress={90} />
            <Skills skill='Node and Express' progress={80} />
            <Skills skill='React' progress={70} />
            <Skills skill='React Native' progress={70} />
            <Skills skill='Python' progress={80} />
            <Skills skill='Java' progress={90} />
            <Skills skill='Git, Github & Version Control' progress={80} />
            <Skills skill='RestAPI' progress={80} />
            <Button style={{ background: 'black' }}>
              <Link
                to='/projects'
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Projects
              </Link>
            </Button>

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Software Education, Experience & Certifications</h2>

            <Education
              startYear={2015}
              endYear={2019}
              schoolName='Ramaiah University of Applied Sciences'
              degree='Bachelor of Technology in Comupter Science and Engineering'
              schoolDescription='
              Favourite Modules: Data Structures and Algorithms, Web Architecture and Application Development, Discrete Mathematics, Advanced Programming Concepts, Design and Analysis of Algorithms,
              Software Development Fundamentals, Data Communication, Formal Languages and Automata Theory, Computer Networks, Database Systems, Data Mining, Data Analytics
              '
            />
            <Experience
              startYear='6/2018'
              endYear='8/2018'
              jobName='Software Intern'
              company='Sysnet Associates India Private Limited'
              jobDescription='Obtained requirements from clients and delivered them to the senior developer. 
Communicated between customers and developers to ensure they understood requirements correctly.
Used attention to detail to document requirements obtained from the customer. 
Documented deliverables and delivered features obtained from the developer.
              '
            />
            <h3 style={{ margin: 'auto', textAlign: 'center' }}>
              Certifications
            </h3>

            <Certifications
              name='The complete 2020 web development bootcamp'
              description='Learnt the fundamentals of web development including HTML, CSS, Javascript,
Node, RestAPIs,
Database Management with NoSQL (MongoDB) and SQL (MySQL),
Basic React
Website Security'
              no={1}
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-6002ffd7-d320-481a-844b-fdcfe023be1c.pdf'
            />
            <Certifications
              name='Javascript Algorithms and Data Structures Masterclass'
              description='The Fundamentals - not in Java (done during bachelors), not in C (done too during bachelors), but in Javascript!'
              no={1}
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-641e1c86-d451-4fc2-8d10-ba038a4cf376.pdf'
            />
            <Certifications
              name='The Complete React Native + Hooks Course [2020 Edition]'
              description='Cross platform app development using the latest technology which is backed and maintained by the best software developers in the market!'
              no={1}
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-48a6aa78-3cde-4be1-9d84-4a36bb474ff4.pdf'
            />
            <Certifications
              name='Modern React with Redux [2020 Update]'
              no={2}
              description='Learnt the core concepts of React and Redux from the very basics to advanced concepts.'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-48d4ddd4-8376-4c2c-8d6e-338f6dbe3e6d.pdf'
            />
            <Certifications
              name='Automate the Boring Stuff with Python Programming'
              description='Applied already present knowledge of python to automate manual computer tasks'
              no={1}
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-1e838133-a0f6-47a5-9cf4-74a6bd9b3b31.pdf'
            />
            <Certifications
              name='Advanced CSS and Sass: Flexbox, Grid, Animations and More!'
              description='Vanilla Front End development taken to the next level!'
              no={2}
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-8c889a17-464e-468b-9d2c-3de4836fb8f6.pdf'
            />
            <Certifications
              name='Node.js, Express, MongoDB & More: The Complete Bootcamp 2020'
              description='Advanced concepts in the Backend'
              no={1}
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-b3364c84-686d-424b-a662-e6f592c17273.pdf'
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Business Education & Experience</h2>

            <Education
              startYear={2020}
              endYear={2022}
              schoolName='Brunel University London'
              degree='MSc Management with extended placement'
              schoolDescription='
              Favourite modules: Strategic Management, Knowledge Management, Financial Resourse Management, Understarstanding Business and Management Research.
              '
            />

            <Experience
              startYear='1/2019'
              endYear='12/2019'
              jobName='Marketing Executive'
              company='Sysnet Associates India Private Limited'
              jobDescription='Promoted brand awareness through SEO and attractive web design.
  Produced engaging online marketing campaigns. 
Spearhead creation of blogs and social media content. 
Managed new product and content releases. 
 Worked effectively in heavily cross-functional, fast-paced environment. 
Managed, mentored and developed a team of 3 interns. 
Analysed the performance of all marketing programs to identify best opportunities for optimization.'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
