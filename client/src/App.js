import './App.css';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

//import components
import Title from './title.svg';
import RedSun from './red_sun.svg';
import YellowSun from './yellow_sun.svg';

//import MUI
import { DataGrid } from '@mui/x-data-grid';

// This is the query I'm working with
// The first errors I kept getting were:
// "Preflight response is not successful", "Fetch API cannot load https://graphql.org/swapi-graphql due to access control checks.",
// and "Failed to load resource: Preflight response is not successful"
//
//I searched the errors on stackoverflow and found it had to do with CORS, so then I went intp my index.js file and added fetchOptions
//to the Http Link. I set mode to 'no-cors' and that error was gone, but i got a new error:
// "JSON Parse error: Unexpected EOF"
const ALL_PERSONS = gql`
{
  allPeople {
    edges {
      node {
        id
        name
        birthYear
        gender
        homeworld {
          name
        }
        species {
          name
        }
      }
    }
  }
}
`;

function App() {
  //query
  const { loading, error, data} = useQuery(ALL_PERSONS);

  //data
  const columns = [
    { field: 'name', headerName: 'Name', width: 145, headerClassName: 'super-app-theme--header', },
    { field: 'birthYear', headerName: 'Birth Year', width: 145, headerClassName: 'super-app-theme--header', },
    { field: 'gender', headerName: 'Gender', width: 145, headerClassName: 'super-app-theme--header', },
    { field: 'homeworld', headerName: 'Homeworld', width: 145, headerClassName: 'super-app-theme--header', },
    { field: 'species', headerName: 'Species', width: 145, headerClassName: 'super-app-theme--header', },
  ];
  
  //Dummy data to fill the table in the meantime
  const rows = [
    { id: 1, name: 'Luke Skywalker', birthYear: '19BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 2, name: 'C-3PO', birthYear: '112BBY', gender: 'N/A', homeworld: 'Tatooinee', species: 'Droid' },
    { id: 3, name: 'R2-D2', birthYear: '33BBY', gender: 'N/A', homeworld: 'Naboo', species: 'Droid' },
    { id: 4, name: 'Darth Vader', birthYear: '41.9BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 5, name: 'Leia Organa', birthYear: '19BBY', gender: 'Female', homeworld: 'Alderaan', species: 'Human' },
    { id: 6, name: 'Obi-Wan Kenobi', birthYear: '57BBY', gender: 'Male', homeworld: 'Stewjon', species: 'Human' },
    { id: 7, name: 'Anakin Skywalker', birthYear: '41.9BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 8, name: 'Chewbacca', birthYear: '200BBY', gender: 'Male', homeworld: 'Kashyyyk', species: 'Wookie' },
    { id: 9, name: 'Han Solo', birthYear: '29BBY', gender: 'Male', homeworld: 'Corellia', species: 'Human' },
    { id: 1, name: 'Luke Skywalker', birthYear: '19BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 2, name: 'C-3PO', birthYear: '112BBY', gender: 'N/A', homeworld: 'Tatooinee', species: 'Droid' },
    { id: 3, name: 'R2-D2', birthYear: '33BBY', gender: 'N/A', homeworld: 'Naboo', species: 'Droid' },
    { id: 4, name: 'Darth Vader', birthYear: '41.9BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 5, name: 'Leia Organa', birthYear: '19BBY', gender: 'Female', homeworld: 'Alderaan', species: 'Human' },
    { id: 6, name: 'Obi-Wan Kenobi', birthYear: '57BBY', gender: 'Male', homeworld: 'Stewjon', species: 'Human' },
    { id: 7, name: 'Anakin Skywalker', birthYear: '41.9BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 8, name: 'Chewbacca', birthYear: '200BBY', gender: 'Male', homeworld: 'Kashyyyk', species: 'Wookie' },
    { id: 9, name: 'Han Solo', birthYear: '29BBY', gender: 'Male', homeworld: 'Corellia', species: 'Human' },
    { id: 1, name: 'Luke Skywalker', birthYear: '19BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 2, name: 'C-3PO', birthYear: '112BBY', gender: 'N/A', homeworld: 'Tatooinee', species: 'Droid' },
    { id: 3, name: 'R2-D2', birthYear: '33BBY', gender: 'N/A', homeworld: 'Naboo', species: 'Droid' },
    { id: 4, name: 'Darth Vader', birthYear: '41.9BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 5, name: 'Leia Organa', birthYear: '19BBY', gender: 'Female', homeworld: 'Alderaan', species: 'Human' },
    { id: 6, name: 'Obi-Wan Kenobi', birthYear: '57BBY', gender: 'Male', homeworld: 'Stewjon', species: 'Human' },
    { id: 7, name: 'Anakin Skywalker', birthYear: '41.9BBY', gender: 'Male', homeworld: 'Tatooine', species: 'Human' },
    { id: 8, name: 'Chewbacca', birthYear: '200BBY', gender: 'Male', homeworld: 'Kashyyyk', species: 'Wookie' },
    { id: 9, name: 'Han Solo', birthYear: '29BBY', gender: 'Male', homeworld: 'Corellia', species: 'Human' },
  ];
  
  
  // if (loading){
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   );
  // }
  // else if (error){
  //   return(
  //     <div>
  //       <h1>Something went wrong!</h1>
  //       <p>Name: {error.name}</p>
  //       <p>Message: {error.message}</p>
  //       <p>Data: {data}</p>

  //     </div>
  //   );
  // }
  // else{
    console.log("DATA: " + data)
    return (
      <div className="App">
        <img id="title-logo" alt='title-logo' src={Title}/>
        <img id="yellow-sun" alt='yellow-sun' src={YellowSun}/>
        <img id="red-sun" alt="red-sun" src={RedSun}/>

        <div id="table-container">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            loading={loading}
            
          />
        </div>
      </div>
    );
  }
// }

export default App;
