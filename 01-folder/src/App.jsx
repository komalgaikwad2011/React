import React from 'react'
import card from './Components/card'

function App() {
  const jobs = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      name: "Google",
      datePosted: "5 days ago",
      post: "Junior Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/amazon",
      name: "Amazon",
      datePosted: "10 days ago",
      post: "Java Backend Developer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$40/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      name: "Apple",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      name: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/microsoft",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Associate Software Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$48/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/ibm",
      name: "IBM",
      datePosted: "6 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/oracle",
      name: "Oracle",
      datePosted: "2 weeks ago",
      post: "Cloud Software Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/adobe",
      name: "Adobe",
      datePosted: "10 weeks ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      name: "NVIDIA",
      datePosted: "1 month ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map(function (elem) {

        return card({ company: elem.name, brandLogo: elem.brandLogo, datePosted: elem.datePosted, post: elem.post, tag1: elem.tag1, tag2: elem.tag2, pay: elem.pay, location: elem.location })
      })}
    </div>


  )

}

export default App