interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student_1: Student = {
  firstName: 'Hamza',
  lastName: 'Husein',
  age: 20,
  location: 'Accra',
}

const student_2: Student = {
  firstName: 'Yussif',
  lastName: 'A. Rahman',
  age: 22,
  location: 'Takoradi',
}

const studentsList: Array<Student> = [student_1, student_2];


export const Table = (studentsList: Array<Student>) => {
  const table = document.createElement('table')
  const header =document.createElement('tr')
  table.insertAdjacentElement("beforeend", header)
  header.insertAdjacentHTML("beforeend", "<th>Firstname</th>")
  header.insertAdjacentHTML("beforeend", "<th>Location</th>")

  for (const student of studentsList) {
    let tr = document.createElement('tr')
    tr.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`)
    tr.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`)
    table.insertAdjacentElement("beforeend", tr)
  }

  document.body.insertAdjacentElement("beforeend", table)

}

Table(studentsList)
