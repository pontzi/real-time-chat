import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBXtoV0aZUWyqooBkOycVCeKfaCvYpRFt8',
        authDomain: 'chat-app-49522.firebaseapp.com',
        databaseURL: 'https://chat-app-49522.firebaseio.com',
        projectId: 'chat-app-49522',
        storageBucket: 'chat-app-49522.appspot.com',
        messagingSenderId: '177152500103',
        appId: '1:177152500103:web:3a615825c11dce1f8b7322',
        measurementId: 'G-11HY028JFZ',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
