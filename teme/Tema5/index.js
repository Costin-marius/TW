const apiUrl = 'http://localhost:8000/api/'

async function getById() {
  const id = document.getElementById('inputId').value
  if (!id) {
    alert("Trebuie sa introduci un ID")
    return
  }

  try {
    const response = await axios.get(apiUrl + "getList/" + id)
    const data = response.data

    if (!data) {
      document.getElementById('result').innerHTML = "Nu a fost gasit niciun rezultat"
      return
    }

    document.getElementById('result').innerHTML = `
      <p><strong>ID:</strong> ${data.id}</p>
      <p><strong>Nume:</strong> ${data.name}</p>
      <p><strong>Vârstă:</strong> ${data.age}</p>
    `
  } catch (err) {
    console.log(err)
    document.getElementById('result').innerHTML = "Eroare"
  }
}
