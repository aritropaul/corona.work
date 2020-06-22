import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

import { motion } from "framer-motion"
import { useHistory } from 'react-router'

function Landing() {

    let history = useHistory();

    const jobTypes = [
        "Agriculture & Dairy",
        "Architecture/Interior Design",
        "Automotive",
        "Aviation",
        "BPO / ITES",
        "Business Software",
        "Chemicals / Petrochemicals",
        "Communications",
        "Construction",
        "Consulting & Services",
        "Consumer Goods",
        "Consumer Tech",
        "Creative Arts / Design",
        "Ecommerce",
        "Education",
        "Education Tech",
        "Energy",
        "Engineering",
        "Financial Services",
        "Fintech",
        "Food & Dining",
        "Food Processing",
        "Gems & Jewellery",
        "Government",
        "Healthcare",
        "Hospitality",
        "HR Tech",
        "Information Technology",
        "IT Infrastructure",
        "KPO/ Research/ Analytics",
        "Legal",
        "Logistics & Supply Chain",
        "Manufacturing",
        "Marketing & Advertising",
        "Media & Entertainment",
        "Mining",
        "NGO / Social Services",
        "Packaging",
        "Pharmaceuticals",
        "Real Estate",
        "Recruitment",
        "Retail",
        "Security / Law Enforcement",
        "Skill Development",
        "Social Enterprises",
        "selrlZ2Rul3obQETY",
        "Telecom",
        "Textiles / Garments",
        "Tourism",
        "Trade",
        "Wellness/Fitness/Sports",
        "Others",
        "Education",
        "Consumer Services",
        "IT Infrastructure",
        "Architecture/Interior Design",
        "Publishing",
        "E-Commerce",
        "Chemicals / Petrochemicals",
        "Maritime",
        "Government Administration",
        "Financial Services",
        "Marketing and Advertising",
        "Computer Software",
        "Chemicals / Petrochemicals",
        "Biotechnology",
        "Furniture",
        "Pharmaceuticals",
        "Marketing and Advertising",
        "Computer Software",
        "IT Services",
        "Banking",
        "Apparel & Fashion",
        "Financial Services",
        "IT Services",
        "Health & Fitness",
        "NGO / Social Services",
        "Agriculture & Dairy",
        "Human Resources",
        "IT",
        "Public Relations",
        "Education Management",
        "Logistics & Supply Chain",
        "Writing & Editing",
        "Pharmaceuticals",
        "Education",
        "Transportation",
        "Management Consulting"
    ]

    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i*0.1,
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 50
            },
          }),
        hidden: { opacity: 0, y: 200}
    }

    const [value, setValue] = React.useState("");
    const [type, setType] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://covid-work.herokuapp.com/search?location='+value+'&industry='+type)
        .then(response => response.json())
        .then(data => history.push({
            pathname: '/search', 
            state: {location: value, industry: type, jobs: data}
        }));    
    }

    return(
        <div className="container landing">
            <motion.h1 className="heading"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={variants}> Who said nobody's hiring? </motion.h1>
            <motion.div className="search"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={variants}>
            <form onSubmit={handleSubmit}>
                <input
                    name="location"
                    className="locationField four columns"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Search for a location"
                ></input>
                <select value={type} onChange = { e => setType(e.target.value)}className="three columns">
                    <option value="" disabled selected>Select your Field</option>
                    {
                        jobTypes.map((type) => {
                            return(
                                <option value={type}>{type}</option>
                            )
                        })
                    }
                </select>
                <input className="three columns" type="submit" value="Find Jobs"/>
            </form>
            </motion.div>
        </div>
    )
}

export default Landing