import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAH0VBW0AFgnFDMiYv0JI70Sl_PRoWkack",
	authDomain: "blair-irwin-project-5.firebaseapp.com",
	databaseURL: "https://blair-irwin-project-5.firebaseio.com",
	projectId: "blair-irwin-project-5",
	storageBucket: "blair-irwin-project-5.appspot.com",
	messagingSenderId: "643418644752",
	appId: "1:643418644752:web:705d598f3d9d18b82e0595"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;