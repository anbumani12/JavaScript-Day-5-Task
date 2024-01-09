//Q1
//JSON using for loop
var jsonArray = [
    {
      "name": "Joe",
      "age": 30,
      "city": "New York"
    },
    {
      "name": "Anbu",
      "age": 25,
      "city": "coimbatore"
    },
    {
      "name": "john",
      "age": 35,
      "city": "Chennai"
    }
  ];
  for (var i=0;i<jsonArray.length;i=i+1){
    var person = jsonArray[i];
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city); 
  }

//JSON using for in loop

var jsonArray = [
    {
      "name": "Joe",
      "age": 30,
      "city": "New York"
    },
    {
      "name": "Anbu",
      "age": 25,
      "city": "coimbatore"
    },
    {
      "name": "john",
      "age": 35,
      "city": "Chennai"
    }
  ];
  for (let key in jsonArray) {
    var person = jsonArray[key];
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  }

//JSON using for of loop

var jsonArray = [
    {
      "name": "Joe",
      "age": 30,
      "city": "New York"
    },
    {
      "name": "Anbu",
      "age": 25,
      "city": "coimbatore"
    },
    {
      "name": "john",
      "age": 35,
      "city": "Chennai"
    }
  ];
  for (let person of jsonArray) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  }

//JSON using for each loop

var jsonArray = [
    {
      "name": "Joe",
      "age": 30,
      "city": "New York"
    },
    {
      "name": "Anbu",
      "age": 25,
      "city": "coimbatore"
    },
    {
      "name": "john",
      "age": 35,
      "city": "Chennai"
    }
  ];
  
  jsonArray.forEach(function(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  });
  

//Q2 Create your own resume data in JSON format

const resumeData = {
    name: "Anbumani",
    contact: {
      email: "anbumani15012002@email.com",
      phone: "+91 9361589969",
      address: "No5 Prasanna vinayagar kovil street,First lane mylapore, Chennai-600 004,Tamilnadu,"
    },
    summary: "Experienced Full stack developer with a passion for creating innovative apps. Skilled in web app development.",
    education: [
      {
        degree: "Bachelor of engineering in Mechanical",
        university: "University college of Engineering, Arni",
        graduation_year: 2021
      }
    ],
    experience: [
      {
        position: "senior full stack developer",
        company: "zoho.",
        start_date: "2021-08-01",
        end_date: "2023-07-31",
        responsibilities: [
          "Led a team of developers in the design and implementation of web applications.",
          "Collaborated with clients to gather requirements and provide technical projects."
        ]
      }
    ],
    skills: {
      programming_languages: ["JavaScript"],
      web_technologies: ["HTML/CSS", "React", "Node.js"],
      databases: ["SQL", "MongoDB"],
      tools: ["Git", "Github"],
      languages: ["English & Tamil"]
    },
    certifications: [
      "Certified from GUVI",
      "AWS Certified Developer - Associate"
    ],
    interests: [
      "Full stack app development",
      "Open-source app development"
    ]
  };
  
  console.log(resumeData);
  