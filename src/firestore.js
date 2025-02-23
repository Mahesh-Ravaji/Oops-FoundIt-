// Add a new document with a generated ID
import { addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

//------------------------------
// firestore.ts
import { addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// ... your Firebase config ...


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export async function addData(data: any) {
//   try {
//     // ...your addData function...
//   } catch (e) {
//     // ...error handling...
//   }
// }

// // ...export other Firestore functions similarly...

// export default {addData, getData, updateData, deleteData, getAllData};

// //------------------------------
// async function addData() {
//   try {
//     const docRef = await addDoc(collection(db, "cities"), {
//       name: "Tokyo",
//       country: "Japan",
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// Read data (retrieve a document)
async function getData(docID) {
  try {
    const docRef = doc(db, "cities", docID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error fetching document: ", e);
  }
}

// Update data (update a document)
async function updateData(docID) {
  try {
    const cityRef = doc(db, "cities", docID);
    await updateDoc(cityRef, {
      country: "Japan Updated",
    });
    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}


// Delete data (delete a document)
async function deleteData(docID) {
    try {
      await deleteDoc(doc(db, "cities", docID));
      console.log("Document successfully deleted!");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
}

// Read all documents in a collection
async function getAllData() {
  try {
    const querySnapshot = await getDocs(collection(db, "cities"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (e) {
    console.error("Error fetching documents: ", e);
  }
}

addData();
getData("someID").then();
updateData("someID").then();
deleteData("someID").then();
getAllData().then();

