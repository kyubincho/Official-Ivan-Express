import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Hike } from "../models/Hike";
import { db, storage } from "./firebase";

export async function convertToFirestore(hikes: Hike[]) {
  const folderList = await listAll(
    ref(storage, "Official Ivan Express Hike Card Images")
  );
  for (let i in hikes) {
    const hikeCardImageFind = folderList.items.find(
      (h) => h.name.split(".")[0] === String(hikes[i]["No."])
    );
    const hikeCardImageUrl = hikeCardImageFind
      ? await getDownloadURL(hikeCardImageFind)
      : "";
    await setDoc(doc(db, "hikes", String(hikes[i]["No."])), {
      ...hikes[i],
      id: hikes[i]["No."],
      hikeCardImageUrl: hikeCardImageUrl,
    });
  }
}

export async function getOfficialHikes() {
  const hikes = await getDocs(
    query(collection(db, "hikes"), where("id", "<", 1000))
  );
  let hikesArray: Hike[] = [];
  for (const doc of hikes.docs) {
    hikesArray.push(doc.data());
  }
  return hikesArray;
}

export async function getDukeOfEdHikes() {
  const hikes = await getDocs(
    query(collection(db, "hikes"), where("id", ">=", 1000))
  );
  let hikesArray: Hike[] = [];
  for (const doc of hikes.docs) {
    hikesArray.push(doc.data());
  }
  return hikesArray;
}
