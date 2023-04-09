#  Respondent Travel profile

## What is the use of this Repo

This Project is a ReactJS (Vite) Project which demonstrates the following
1. Creating a Component in React
2. Displaying output data from JSON based on user input
3. Communicating between parent and child component
4. Using Tailwind along with React
5. Using Basic Routing in React

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs


## Live Application URL

The Application is deployed in https://transport-work-lq7geqofn-bruhnav.vercel.app/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run dev
```

The Application Runs on **http://127.0.0.1:5173/**

## **Application design**

![Alt text](./Blank%20diagram.jpeg "App Design")

## *Components*

1. **Rows** Component : This component is used to render a row of **JSX** with multiple columns, with each column representing a different attribute or value. This component expects 5 **props** that can be passed from the parent component to customize the content of each column.

2. **Options** Component : This component is used to render a single radio button option within the form. The props object can be passed from the parent component to customize the label and value of the radio button. 

3. **Header** Component: This component contains the important links including Home, Documentation, and Link to the repository

## *Context*

1. **States** Context: Contains all the states, methods and function that are needed by the app, The StatesContext forms the main link of communication between the the home page and the Next page.

## *Pages*

1. **Home** Page: This file displays the first part of the project which displays two question to the user, when the user chooses the feedback for both the question that feedback is then stored as state in context and on clicking submit the second page is displayed.

2. **ModeChoice** Page: This file displays the second page of the project which displays a table with following information for the corresponding mode of travel:
 
    * Total travel time spent while inside the vehicle(s)
    * Total travel time spent outside vehicle(s)
    * Possible delay due to traffic congestion or other uncertainties
    * Total one-way cost of travel
    * Extent of crowding in the vehicle
    * Mode choice table: Service type

The mode of travel in column 4th and 5th depends on the feedback given by the user in page 1. The data shown in the table comes from the corresponding JSON files available in the Data folder 


## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**Vite** : Refer to https://vitejs.dev/ to understand the concepts of ViteJS

**TailwindCSS** : Refer to https://tailwindcss.com/ to understand how to use Tailwind CSS

**React Icons** : Refer to https://react-icons.github.io/react-icons to understand how to use React Icons