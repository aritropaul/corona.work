import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './css/components.css'
import Title from './components/Title';
import Card from './components/Card'
import { useLocation } from 'react-router';

function Search() {

    let location = useLocation();
    let place = location.state.location
    let type = location.state.type
    let industry = location.state.industry
    let jobs = location.state.jobs.jobs

  if ( place !== undefined || type !== undefined) {
    if (jobs.length > 0) {
        return (
            <div className="Search">
              <Header></Header>
              <Title location={place} type={industry}></Title>
              <div className="container main row">
                {
                    jobs.map((job, i) =>{ 
                        return (
                            <Card 
                            title={job['Company Name']} 
                            role={job['Roles']}
                            i={i}
                            type={job['Type']}
                            link={job['Where to apply']} ></Card>
                        )
                    })
                }
              </div>
              <Footer></Footer>
            </div>
        );
    }
    else {
        return (
            <div className="Search">
              <Header></Header>
              <Title location={place} type={type}></Title>
              <div className="container main row">
                <h5> <span role="img" aria-label="embarrased"> 😳 </span>&nbsp; Sorry there are no such jobs available right now.</h5>
              </div>
              <Footer></Footer>
            </div>
        );
    }
  }
}

export default Search;