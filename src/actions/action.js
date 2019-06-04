export default (name, value) => {
    return {
      type: name.toUpperCase(),
      payload: value
    }
}