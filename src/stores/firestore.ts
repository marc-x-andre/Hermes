import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";
import { getFirestore, collection } from "firebase/firestore";
import { useAuthStore } from "./auth";

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();
  const { userData } = useAuthStore();
  const firestore = getFirestore(firebaseApp);

  const getEntryCol = () => {
    return collection(firestore, "users", `${userData?.email}`, "entries");
  };

  const getSettingsCol = () => {
    return collection(firestore, "users", `${userData?.email}`, "settings");
  };
  console.log("getSettingsCol : ", getSettingsCol);
  return {
    firestore,
    getEntryCol,
    getSettingsCol,
  };
});
