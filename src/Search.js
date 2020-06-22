import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './css/components.css'
import Title from './components/Title';
import Card from './components/Card'
import { useLocation } from 'react-router';

function Search(props) {

    let location = useLocation();
    let place = location.state.location
    let type = location.state.industry
    let jobs = location.state.jobs.jobs

  if ( place !== undefined || type !== undefined) {
    return (
        <div className="Search">
          <Header></Header>
          <Title location={place} type={type}></Title>
          <div className="container main row">
            {
                jobs.map((job, i) =>{ 
                    return (
                        <Card 
                        title={job['Company Name']} 
                        role={job['Roles']}
                        i={i}
                        link={job['Where to Apply']} ></Card>
                    )
                })
            }
          </div>
          <Footer></Footer>
        </div>
      );
  }
}

export default Search;