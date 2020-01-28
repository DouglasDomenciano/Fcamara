function saveMessage(message) {
    return {
      type: 'SAVE_MESSAGE',
      payload: message
    }
}
function deleteMessage(id) {
    return {
      type: 'DELETE_MESSAGE',
      payload: id
    }
}

export {saveMessage, deleteMessage}