import React from 'react';
import './Listpeople.css'; // Import CSS file for styling

const Listpeople = () => {
  // Define an array of group members
  const groupMembers = [
    { id: '1', name: "Anteneh Getnet" },
    { id: '2', name: "Amanuel Firew" },
    { id: '3', name: "Amanuel Addisu" },
    { id: '4', name: "Andinet Dereje" },
    { id: '5', name: "Ammar Mohammed" },
    { id: '6', name: "Ariyam Yilma" },
    { id: '7', name: "Alem Ayalew" },
    { id: '8', name: "Afomia Dugassa" },
    { id: '9', name: "Agumas Desalew" },
    { id: '10', name: "Amanuel Mandefrow" }
  ];

  return (
    <div>
      <h2>Group Members</h2>
      <table className="member-table"> {/* Add className for styling */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Use .map() to iterate over the group members array and generate table rows */}
          {groupMembers.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listpeople;
