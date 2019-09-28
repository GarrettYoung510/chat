// render chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
  }
  render(data) {
    // const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
    //   addSuffix: true
    // });
    const when = data.created_at.toDate();
    // const now = Date.now();
    // const diff = now - when;
    const timeDisplay = moment(when).startOf("second").fromNow();
    // console.log(moment.utc(diff*1000).format('HH:mm:ss'));
    const html = `<li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${timeDisplay}</div></li>`;
    this.list.innerHTML += html;
  }
}
