const formatDate = date => {
  const newDate = new Date(date)

  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  const fullDate = `${day}/${month}/${year}`

  return fullDate
}
export { formatDate }
