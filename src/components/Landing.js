import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

import { motion } from "framer-motion"
import { useHistory } from 'react-router'

function Landing() {

    let history = useHistory();

    const jobTypes = [
        "Full-Time",
        "Part-Time",
        "Internship",
        "Remote",
        "Contract"
    ]

    const jobIndustry = [
        "Agriculture & Dairy",
        "Apparel & Fashion",
        "Architecture/Interior Design",
        "Automotive",
        "Aviation",
        "BPO / ITES",
        "Banking",
        "Biotechnology",
        "Business Software",
        "Chemicals / Petrochemicals",
        "Communications",
        "Computer Software",
        "Construction",
        "Consulting & Services",
        "Consumer Goods",
        "Consumer Services",
        "Consumer Tech",
        "Creative Arts / Design",
        "E-Commerce",
        "Ecommerce",
        "Education Management",
        "Education Tech",
        "Education",
        "Energy",
        "Engineering",
        "Financial Services",
        "Fintech",
        "Food & Dining",
        "Food Processing",
        "Furniture",
        "Gems & Jewellery",
        "Government Administration",
        "Government",
        "HR Tech",
        "Health & Fitness",
        "Healthcare",
        "Hospitality",
        "Human Resources",
        "IT Infrastructure",
        "IT Services",
        "IT",
        "Information Technology",
        "KPO/ Research/ Analytics",
        "Legal",
        "Logistics & Supply Chain",
        "Management Consulting",
        "Manufacturing",
        "Maritime",
        "Marketing & Advertising",
        "Marketing and Advertising",
        "Media & Entertainment",
        "Mining",
        "NGO / Social Services",
        "Others",
        "Packaging",
        "Pharmaceuticals",
        "Public Relations",
        "Publishing",
        "Real Estate",
        "Recruitment",
        "Retail",
        "Security / Law Enforcement",
        "Skill Development",
        "Social Enterprises",
        "Telecom",
        "Textiles / Garments",
        "Tourism",
        "Trade",
        "Transportation",
        "Wellness/Fitness/Sports",
        "Writing & Editing"
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
        if (type === "") {
            fetch('https://covid-work.herokuapp.com/search?location='+value)
            .then(response => response.json())
            .then(data => history.push({
                pathname: '/search', 
                state: {location: value, jobs: data}
            }));
        }
        else {
            fetch('https://covid-work.herokuapp.com/search?location='+value+'&type='+type)
            .then(response => response.json())
            .then(data => history.push({
                pathname: '/search', 
                state: {location: value, type: type, jobs: data}
            }));
        }
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
                    required
                ></input>
                <select value={type} onChange = { e => setType(e.target.value)}className="three columns">
                    <option value="" disabled selected>Job Type</option>
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