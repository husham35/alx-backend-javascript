export default function getListStudents() {
  const addStudent = (id, firstName, location) => ({
    id,
    firstName,
    location,
  });

  return[
    addStudent(1, 'Guillaume', 'San Francisco'),
    addStudent(2, 'James', 'Columbia'),
    addStudent(5, 'Serena', 'San Francisco'),
  ]
}
